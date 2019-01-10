import { Component } from '@angular/core';
import { IonicPage, NavController, Events, LoadingController, AlertController, Loading, ToastController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../../pages/login/login';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';

/**
 * Generated class for the InstruccionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-instrucciones',
  templateUrl: 'instrucciones.html',
})
export class InstruccionesPage {

	loading: 		Loading; 			// Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
	cards 			= new Array();	// Array donde se almacenan los objetos del tipo card descargados del servidor.
	showCardError	= false;
	
	constructor(private toastCtrl: ToastController, private file: File, private fileOpener: FileOpener, public events: Events, public restProvider: RestProvider, private loadingCtrl: LoadingController, private alertCtrl: AlertController, public navCtrl: NavController) {
		this.showLoading();
		this.getInstrucciones();
		this.events.publish("user:logged");
	}
	
	
	/**
	* 	Función que obtiene las tarjetas para la página
	*	de las instrucciones
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/ 
	getInstrucciones(){
		this.restProvider.getInstrucciones().then(data => {
			if(typeof data != "undefined" &&  data['status'] == 1){				
				
				if (typeof this.cards === 'undefined' || this.cards.length <= 0){
					this.showCardError = true;
				}
				
				for (var key in data['data']) {
					this.cards.push(data['data'][key]);
					this.showCardError = false;
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
	* 	Función que almacena el archivo PDF en el sistema,
	*	y a continuación abre el visor para verlo.
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/ 
	openPdf(base64, numDoc){		
				
		if(base64 == ""){
			this.presentToast("No es posible abrir el documento.");
		}else{
			
			this.showLoading();			
			var blob 		= this.b64toBlob(base64, 'application/pdf');			
			var name 		= "Instrucciones"+numDoc+".pdf";					
			let directory 	= this.file.dataDirectory;
				
			// Guardo el fichero en la memoria del dispositivo
			this.file.writeFile(directory, name , blob).then(_ => {
				// Leo el fichero desde la memoria del dispositivo
				this.fileOpener.open(directory + name, 'application/pdf').then(() => {
						this.loading.dismiss()
					}
				).catch(e => {
						alert('Error abriendo el archivo');
						this.loading.dismiss();
					}
				);
			}).catch(err => {
				// Si ocurre que el fichero ya existe, lo leo de la memoria del dispositivo
				if(err.code == 12){
					this.fileOpener.open(directory + name, 'application/pdf').then(() => {
							this.loading.dismiss()
						}
					).catch(e => {
							alert('Error abriendo el archivo');
							this.loading.dismiss();
						}
					);
				}else{
					this.showError("ERROR " + err.code, err.message);
				}
			});	
		}
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
			dismissOnPageChange: false
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
