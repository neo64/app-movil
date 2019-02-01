import { Component, ViewChild, ElementRef  } from '@angular/core';
import { NavController, NavParams, Content, AlertController, IonicPage, LoadingController, Loading, Platform, ActionSheetController } from 'ionic-angular';
import * as firebase from 'Firebase';
import { Events } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { RestProvider } from '../../providers/rest/rest';
import { PhotoViewer } from '@ionic-native/photo-viewer';

import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';


@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})

export class ChatPage {	

	@ViewChild(Content) content: Content;
	@ViewChild('chat_input') messageInput: ElementRef;
	
	data 				= { type:'', nickname:'', message:'' };	// Array con la información del mensaje 
	chats 				= [];		// Array con todos los mensajes
	nickname:			string;		// Nombre de usuario (IdPac)
	cameraImage : 		string;		// Foto de la camara que se desea envíar
	loading: 			Loading;	// Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
	firstOpen 			= true;		// Indica si es la primera vez que se abre el chat 
	offStatus:boolean 	= false;	// Controla si la vista está en primer plano.
	showEmojiPicker 	= false;	// Controla si los emoticonos estan en primer plano.
	loadingPresented 	= false;	// Controla si el Loading esta en primer plano.
	menuData 			= "";		// Foto de perfil del usuario.

	constructor(private file: File, private fileOpener: FileOpener, private photoViewer: PhotoViewer, public actionSheetCtrl: ActionSheetController, public plt: Platform, private alertCtrl: AlertController, public restProvider: RestProvider, private loadingCtrl: LoadingController, private _CAMERA : Camera, public element:ElementRef, public vb : Vibration, public eventsCtrl: Events, public navCtrl: NavController, public navParams: NavParams) {
		
		this.showLoading("Cargando conversación ...");	
		this.nickname 		= window.localStorage.getItem("idPac");
		this.menuData 		= window.localStorage.getItem("urlPerfil");
		this.data.type 		= 'message';
		this.data.nickname 	= this.nickname;

		// Compruebo si la fecha de expiración es posterior
		// a la fecha actual del sistema, si es así redirijo
		// a la página de home.
		var timeNow 		= new Date(2100,12,31,23,59,59,0); // Obtengo una fecha en el futuro por si la API no devuelve fecha.
		var mostrarError 	= false;
		this.restProvider.getTimeServer().then(data => {
			
			if(typeof data != "undefined" && data['status'] == 1){
				timeNow = new Date(Number(data['timeStamp']));

				if(timeNow.getDay() == 0 || timeNow.getDay() == 6){
					mostrarError = true;
				}else if(timeNow.getDay() == 5){
					if(timeNow.getHours() <= 9 || timeNow.getHours() >= 20){

						if(timeNow.getHours() == 9 && timeNow.getMinutes() >= 0){
							mostrarError = false;
						}else if(timeNow.getHours() == 20 && timeNow.getMinutes() <= 0){
							mostrarError = false;
						}else{
							mostrarError = true;
						}					
					}
				}else{
					if(timeNow.getHours() <= 9 || timeNow.getHours() >= 21){

						if(timeNow.getHours() == 9 && timeNow.getMinutes() >= 0){
							mostrarError = false;
						}else if(timeNow.getHours() == 21 && timeNow.getMinutes() <= 0){
							mostrarError = false;
						}else{
							mostrarError = true;
						}					
					}
				}				

				if(mostrarError){
					this.showError("¡Atención!","El horario de la clínica es: <br><br> L-J de 09:30 a 20:30 <br> V &nbsp&nbsp&nbspde 09:30 a 19:30");
					this.navCtrl.pop();
				}
			}		
					
		});
		
		firebase.database().ref(this.nickname).limitToLast(15).on('value', resp => {
			this.chats = [];			
			this.chats = snapshotToArray(resp,this.nickname, this.vb, this.firstOpen, this.offStatus);
			setTimeout(() => {
				this.firstOpen = false;
				if(this.offStatus === false) {
					if(this.content != null){
						this.content.scrollToBottom(0);
						if(this.loadingPresented){
							this.loadingPresented = false;
							this.loading.dismiss();
						}
					}
				}
			});
		}); 
	}


	printImage(base){
		
		this.showLoading();
		const writeDirectory 	= this.plt.is('ios') ? this.file.dataDirectory : this.file.externalDataDirectory;
		var filename 			= "imageShow.jpg";
		this.file.writeFile(writeDirectory, filename, this.convertBase64ToBlob(base, 'data:application/jpeg;base64'), {replace: true}).then(() => {		    
		        this.photoViewer.show(writeDirectory + filename, '¿Compartir?', {share: true});
		        this.loading.dismiss();
		}).catch(() => {
		    console.error('Error writing pdf file');
		    this.loading.dismiss();
		});
		 
	}

	convertBase64ToBlob(b64Data, contentType): Blob {
	    contentType = contentType || '';
	    const sliceSize = 512;
	    b64Data = b64Data.replace(/^[^,]+,/, '');
	    b64Data = b64Data.replace(/\s/g, '');
	    const byteCharacters = window.atob(b64Data);
	    const byteArrays = [];
	    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
	         const slice = byteCharacters.slice(offset, offset + sliceSize);
	         const byteNumbers = new Array(slice.length);
	         for (let i = 0; i < slice.length; i++) {
	             byteNumbers[i] = slice.charCodeAt(i);
	         }
	         const byteArray = new Uint8Array(byteNumbers);
	         byteArrays.push(byteArray);
	    }
	   return new Blob(byteArrays, {type: contentType});
	}

		
	/**
	* 	Función que muestra el ProgressBar cuando alguna acción
	*	se está ejecutando en primer plano.
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/ 
	showLoading(txt = 'Cargando información...') {
		this.loading = this.loadingCtrl.create({
			content: txt,			
			dismissOnPageChange: false
		});
		this.loading.present();
		this.loadingPresented = true;
	}
	
	/**
	* 	Función que redibuja el textarea
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/ 
	onFocus() {
		this.showEmojiPicker = false;
		this.content.resize();
		this.scrollToBottom();
	}



	/**
	* 	Función que selecciona si es desde galeria o camara
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	
	*/
	openChooseImage() {
    	let actionSheet = this.actionSheetCtrl.create({
	    	title: 'Elige una opción',
	      	cssClass: 'action-sheets-basic-page',
	      	buttons: [
	        	{
	          		text: 'Camara',
	          		role: 'destructive',
	          		//icon: !this.plt.is('ios') ? 'ios-camera-outline' : null,	          		
	          		handler: () => {
	            		this.selectImage(1);
	          		}
	        	},
	        	{
	          		text: 'Galeria',
	          		role: 'destructive',
	          		//icon: !this.plt.is('ios') ? 'ios-camera-outline' : null,	
	          		handler: () => {
	            		this.selectImage(0);
	          		}
	        	},
	      	]
	    });
	    actionSheet.present();
	}

	
	/**
	* 	Función que envía una imagen a Firebase
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	
	*/
	selectImage(x) : Promise<any>{
		
		this.showLoading("Enviando imagen ...");
		
		return new Promise(resolve => {
		  
			let cameraOptions : CameraOptions = {
				 sourceType         : x,
				 destinationType    : this._CAMERA.DestinationType.DATA_URL,
				 quality            : 100,
				 allowEdit			: true,
				 correctOrientation	: true,
				 saveToPhotoAlbum 	: true,
				 cameraDirection	: 1,
				 encodingType       : this._CAMERA.EncodingType.JPEG,
			 };

			this._CAMERA.getPicture(cameraOptions).then((data) => {
				
				
				this.cameraImage 	= "data:image/jpeg;base64," + data;
				resolve(this.cameraImage);				
				
				
				this.restProvider.getTimeStamp().then(data => {					
					firebase.database().ref(this.nickname + "/" + data.timeStamp).set ({
						type:		"image",
						user:		this.data.nickname,
						message:	this.cameraImage,
						sendDate:	new Date(Number(data.timeStamp)).toString(),
						read: 		false
					});	
				});				
				
				if(this.loadingPresented){
					this.loadingPresented = false;
					this.loading.dismiss();
				}
				
			}).catch(e => {
				if(e == 20)
					this.showError("ERROR", "Error al intentar enviar la imagen, no hay permisos para acceder a las imagenes.");
				else
					this.loading.dismiss();
			});
		}).catch(e => {
			this.showError("ERROR", "Error al intentar enviar la imagen.");
		});
	}
	
	/**
	* 	Función que lleva la vista al final de la pantalla
	*	para dar impresión de un chat.
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	
	*/
	scrollToBottom() {
		setTimeout(() => {
			if (this.content.scrollToBottom) {
				this.content.scrollToBottom();
			}
		}, 400)
	}
	 

	/**
	* 	Función que controla si está abierto los emoticonos o el texarea
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	
	*/
	switchEmojiPicker() {
		this.showEmojiPicker = !this.showEmojiPicker;
		if (!this.showEmojiPicker) {
			this.focus();
		} else {
			this.setTextareaScroll();
		}
		this.content.resize();
		this.scrollToBottom();
	}
	 
	/**
	* 	Función que muestra el textarea y cierra los emoticonos
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	
	*/
	private setTextareaScroll() {
		const textarea = this.messageInput.nativeElement;
		textarea.scrollTop = textarea.scrollHeight;
	}
	
	/**
	* 	Función que muestra los emoticonos y cierra el textarea
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	
	*/
	private focus() {
		if (this.messageInput && this.messageInput.nativeElement) {
			this.messageInput.nativeElement.focus();
		}
	}
	
	/**
	* 	Función que envía un mensaje a Firebase
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	
	*/
	sendMessage() {
		if(this.data.message.trim() == "")
			return;
				
		this.restProvider.getTimeStamp().then(data => {
						
			firebase.database().ref(this.nickname + "/" + data.timeStamp).set ({
				type:		this.data.type,
				user:		this.data.nickname,
				message:	this.data.message,
				sendDate:	new Date(Number(data.timeStamp)).toString(),
				read: 		false
			});
			this.data.message = '';
		});
		
	}

	/**
	* 	Función que inicia la escucha con Firebase y
	*	actualiza la última conexión del usuario.
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	
	*/
	ionViewDidEnter() {
		//console.log("ENTRA EN CHAT");
		firebase.database().ref(this.nickname + "/ultimaConexion").set({
			date:	"Online",
		});
		this.eventsCtrl.publish('chat:load');   
	}
	
	/**
	* 	Función que desconecta la escucha con Firebase y
	*	actualiza la última conexión del usuario.
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/ 
	ionViewWillLeave() {
		this.offStatus = true;
		//console.log("SALE EN CHAT");
		firebase.database().ref(this.nickname + "/ultimaConexion").set({
			date:	Date(),
		});
		firebase.database().ref(this.nickname).off();
		this.eventsCtrl.publish('chat:unload');		
	}
	
	/**
	* 	Función que muestra una alerta con el titulo
	*	y el texto pasado por parámetro.
	*
	* 	@param String Titulo de la alerta.
	* 	@param String Texto de la alerta.
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	
	*/
	showError(title,text) {
		this.loading.dismiss();
		let alert = this.alertCtrl.create({
			title: title,
			subTitle: text,
			buttons: ['OK']
		});
		alert.present();
	}

}

/**
* 	Función que convierte la conversación en un 
*	array para poder dibujarlo en la plantilla.
*
* 	@param None
* 
* 	@author Jesús Río <jesusriobarrilero@gmail.com>
* 	@return None 
*/ 
export const snapshotToArray = (snapshot,nickname,vb,firstOpen, offStatus) => {
    let returnArr = [];
	let lastElemenmt = "";

    snapshot.forEach(childSnapshot => {		
		if(childSnapshot.key != "ultimaConexion"){
			lastElemenmt = childSnapshot.val().user;
			if(childSnapshot.val().user == "atPaciente"){
				var updates = {};
				updates[nickname + '/' + childSnapshot.key + '/read'] = true;
				firebase.database().ref().update(updates)
			}
			let item = childSnapshot.val();
			item.key = childSnapshot.key;
			returnArr.push(item);
		}
    });
	
	if(!firstOpen && !offStatus && lastElemenmt == "atPaciente"){
		//console.log("VIBRA - " + firstOpen);
		vb.vibrate(500);
	}	
    
	return returnArr;
};
