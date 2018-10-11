import { Component } from '@angular/core';
import { IonicPage, NavController, Loading, LoadingController, ToastController, AlertController, Events} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { LoginPage } from '../../pages/login/login';

@IonicPage()
@Component({
  selector: 'page-doc-firmados',
  templateUrl: 'doc-firmados.html',
})

export class DocFirmadosPage {
	
	loading: 	Loading; 		// Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
	docs 		= new Array();	// Array donde se almacenan los objetos del tipo documento descargados del servidor.

	constructor(public events: Events, private alertCtrl: AlertController, private toastCtrl: ToastController, private fileOpener: FileOpener, private file: File, public restProvider: RestProvider, private loadingCtrl: LoadingController, public navCtrl: NavController) {
		this.showLoading();
		this.getDocFirmados();
		this.events.publish("user:logged");
	}
	  
	/**
	* 	Función que almacena el archivo PDF en el sistema,
	*	y a continuación abre el visor para verlo.
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/ 
	openPdf(src){		
				
		if(src == ""){
			this.presentToast("El documento está firmado electronicamente y no es posible visualizarlo.");
		}else{
			
			this.showLoading();			
			var blob 		= this.b64toBlob(src, 'application/pdf');			
			var name 		= "documentFyB_" + new Date().getTime() + ".pdf";					
			let directory 	= this.file.dataDirectory;
					
			this.file.writeFile(directory, name , blob).then(_ => {
				this.fileOpener.open(directory + name, 'application/pdf').then(() => {
						this.loading.dismiss()
					}
				).catch(e => {
						alert('Error abriendo el archivo');
						this.loading.dismiss();
					}
				);
			}).catch(err => {
					this.loading.dismiss()
				}
			);	
		}
	}
	
	/**
	* 	Función que convierte a Blob una cadena en Base64
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/ 
	b64toBlob(b64Data, contentType, sliceSize = 512) {
		contentType = contentType || '';
		sliceSize = sliceSize || 512;
		
		var byteCharacters = atob(b64Data);
		var byteArrays = [];

		for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
			var slice = byteCharacters.slice(offset, offset + sliceSize);
			var byteNumbers = new Array(slice.length);
			for (var i = 0; i < slice.length; i++) {
				byteNumbers[i] = slice.charCodeAt(i);
			}
			var byteArray = new Uint8Array(byteNumbers);
			byteArrays.push(byteArray);
		}

		var blob = new Blob(byteArrays, {type: contentType});
		return blob;
	}
  
	/**
	* 	Función que obtiene todos los documentos de la 
	*	carpeta del paciente y los documentos firmados electronicamente.
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/ 
	getDocFirmados(){
		this.restProvider.getDocFirmados().then(data => {
			if(typeof data != "undefined" &&  data['status'] == 1){
				for (var key in data['data']) {
					this.docs.push(data['data'][key]);
				}
				this.loading.dismiss();
			}else if(data.status == 401){
				this.showError("¡Atención!","Se ha perdido la sesión, por favor vuelva a iniciar.");
				this.navCtrl.setRoot(LoginPage);				
			}else{
				this.showError("¡Atención!","<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");						
			}			
		}).catch(e => {
			this.loading.dismiss();
			console.log(e);
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
	showLoading() {
		this.loading = this.loadingCtrl.create({
			content: 'Cargando información...',			
			dismissOnPageChange: true
		});
		this.loading.present();
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
	
	/**
	* 	Función que muestra un Toast con la información
	*	referente a la acción del usuario.
	*
	* 	@param String Titulo de la alerta.
	* 	@param String Texto de la alerta.
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	
	*/
	presentToast(txt) {
		let toast = this.toastCtrl.create({
			message: txt,
			duration: 3000,
			position: 'bottom',
			showCloseButton: true,
			closeButtonText: 'OK'
		});
		toast.present();
	}
}
