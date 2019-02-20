import { Component } from '@angular/core';
import { IonicPage, NavController, Loading, LoadingController, AlertController, Events, ActionSheetController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../../pages/login/login';

import { File } from '@ionic-native/file'; 
import { DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraOptions } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
 
export class ProfilePage {

	data: any = {}; 			// Array para almacenar los valores del perfil.
	loading: Loading;			// Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
	loadingPresented = false;	// Variable de tipo booleano para saber si el ProgressBar está o no ejecutandose.
	bGuardar = {name : 'GUARDAR CAMBIOS', 	svg: '', openPage : '', class : 'active btn-large', tipo : 'page', gradiente: 'fb-gradient'};


	constructor(private domSanitizer: DomSanitizer, private _CAMERA : Camera, public actionSheetCtrl: ActionSheetController, private file: File, public events: Events, private alertCtrl: AlertController, public restProvider: RestProvider, public navCtrl: NavController, private loadingCtrl: LoadingController) {
		this.checkFileExistence("fyb.jpeg");
		this.showLoading(); 	// Mostramos el ProgressBar al iniciar la aplicación
		this.getProfile();		// Llamada a la funcion para obtener el perfil del paciente
		this.events.publish("user:logged");
	}

	public checkFileExistence(fileName: string) {
	    return this.file.checkFile(this.file.externalRootDirectory, fileName).then(() => {
	            this.file.readAsDataURL(this.file.externalRootDirectory, fileName).then(result => {
					this.existe 		= true;
					this.base64 		= result;
					this.data.Imagen 	= result;
				}, (err) => {
					//console.log(err);
				});
	    }, (error) => {
	        //console.log(error);
	    })
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

		this.showLoading("Guardando imagen ...");
		
		return new Promise(resolve => {
		  
			let cameraOptions : CameraOptions = {
				sourceType         	: x,
				destinationType    	: this._CAMERA.DestinationType.DATA_URL,
				quality            	: 50,
				allowEdit			: true,
				correctOrientation	: true,
				saveToPhotoAlbum 	: true,
				cameraDirection		: 1,
				encodingType       	: this._CAMERA.EncodingType.JPEG,
			 };

			this._CAMERA.getPicture(cameraOptions).then((data) => {			
				this.writeFile('data:image/jpeg;base64,' + data, "", "fyb.jpeg");
				
			}).catch(e => {
				if(e == 20){
					this.showError("ERROR", "Error al intentar enviar la imagen, no hay permisos para acceder a las imagenes.");
				}else{
					this.showError("ERROR", e);
					this.loading.dismiss();
				}
					
			});
		}).catch(e => {
			this.showError("ERROR", "Error al intentar enviar la imagen.");
		});

	}

  	/*
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
	* 	Función que actualiza los datos personales 
	*	del paciente y envía un correo a citas@...
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/ 
	setProfile(){
		this.restProvider.setProfile(this.data).then(d => {
			if(typeof d != "undefined" &&  d['status'] == 1){
				this.showError("¡Bien!",d['data']);
				this.loading.dismiss();
			}else if(d.status == 401){				
				this.showError("¡Atención!","Se ha perdido la sesión, por favor vuelva a iniciar.");
				this.navCtrl.setRoot(LoginPage);
			}else{				
				this.showError("¡Atención!","<p>" + d['message'] + "<br/><br/>[Code: " + d['code'] + "]</p>");
			}			
		}).catch(e => {
			this.loading.dismiss();
			console.log(e);
		});
	}



	/**
	* 	Función que obtiene todos los datos personales del 
	*	paciente y los muestra en la interfaz, cada uno en
	*	su campo correspondiente.
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/ 		
	getProfile(){
		this.restProvider.getProfile().then(data => {
			if(typeof data != "undefined" &&  data['status'] == 1){				
				if(this.existe)
					data['data']['Imagen'] = this.base64;

				this.data = data['data'];				
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
	* 	Función que asigna los valores obtenidos en la petición
	*	a cada campo correspondiente.
	*
	* 	@param Array Valores obtenidos de la petición al servidor.
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/ 
	setValues(values) {
		this.data.Email 		= values.Email;
		this.data.Nombre 		= values.Nombre;
		this.data.Apellidos		= values.Apellidos;
		this.data.DNI	 		= values.NIF;
		this.data.FecNacim 		= values.FecNacim;
		this.data.Direccion 	= values.Direccion;
		this.data.TelMovil 		= values.TelMovil;
		this.data.Tel1 			= values.Tel1;
		this.data.Alergias 		= values.Alergias;
		this.data.Medicacion 	= values.Medicacion;
		this.data.Localidad		= values.Localidad;
		this.data.Provincia		= values.Provincia;
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
		this.loadingPresented = true;
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
