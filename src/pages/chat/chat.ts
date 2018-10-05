import { Component, ViewChild, ElementRef  } from '@angular/core';
import { NavController, NavParams, Content, IonicPage, LoadingController, Loading } from 'ionic-angular';
import * as firebase from 'Firebase';
import { Events } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { Camera, CameraOptions } from '@ionic-native/camera';

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

	constructor(private loadingCtrl: LoadingController, private _CAMERA : Camera, public element:ElementRef, public vb : Vibration, public eventsCtrl: Events, public navCtrl: NavController, public navParams: NavParams) {
		
		this.showLoading("Cargando conversación ...");	
		this.nickname 		= window.localStorage.getItem("idPac");
		this.menuData 		= window.localStorage.getItem("urlPerfil");
		this.data.type 		= 'message';
		this.data.nickname 	= this.nickname;
		
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
			dismissOnPageChange: true
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
	* 	Función que envía una imagen a Firebase
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	
	*/
	selectImage() : Promise<any>{
		
		this.showLoading("Enviando imagen ...");
		
		return new Promise(resolve => {
		  
			let cameraOptions : CameraOptions = {
				 sourceType         : this._CAMERA.PictureSourceType.PHOTOLIBRARY,
				 destinationType    : this._CAMERA.DestinationType.DATA_URL,
				 quality            : 100,
				 //targetWidth        : 320,
				 //targetHeight       : 240,
				 encodingType       : this._CAMERA.EncodingType.JPEG,
				 correctOrientation : true
			 };

			this._CAMERA.getPicture(cameraOptions).then((data) => {
				
				
				this.cameraImage 	= "data:image/jpeg;base64," + data;
				resolve(this.cameraImage);
				var date = new Date().getTime();
				firebase.database().ref(this.nickname + "/" + date).set ({
					type:		"image",
					user:		this.data.nickname,
					message:	this.cameraImage,
					sendDate:	Date(),
					read: 		false
				});	
				
				if(this.loadingPresented){
					this.loadingPresented = false;
					this.loading.dismiss();
				}
				
			});
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
		
		var date = new Date().getTime();
		firebase.database().ref(this.nickname + "/" + date).set ({
			type:		this.data.type,
			user:		this.data.nickname,
			message:	this.data.message,
			sendDate:	Date(),
			read: 		false
		});
		this.data.message = '';
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
		console.log("ENTRA EN CHAT");
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
		console.log("SALE EN CHAT");
		firebase.database().ref(this.nickname + "/ultimaConexion").set({
			date:	Date(),
		});
		firebase.database().ref(this.nickname).off();
		this.eventsCtrl.publish('chat:unload');		
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
		console.log("VIBRA - " + firstOpen);
		vb.vibrate(500);
	}	
    
	return returnArr;
};
