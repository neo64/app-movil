import { Component } from '@angular/core';
import { IonicPage, NavController, Loading, LoadingController, AlertController, Events } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../../pages/login/login';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
 
export class ProfilePage {

	data: any = {}; 			// Array para almacenar los valores del perfil.
	loading: Loading;			// Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
	loadingPresented = false;	// Variable de tipo booleano para saber si el ProgressBar está o no ejecutandose.
	
	constructor(public events: Events, private alertCtrl: AlertController, public restProvider: RestProvider, public navCtrl: NavController, private loadingCtrl: LoadingController) {
		this.showLoading(); 	// Mostramos el ProgressBar al iniciar la aplicación
		this.getProfile();		// Llamada a la funcion para obtener el perfil del paciente
		this.events.publish("user:logged");
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
				this.setValues(data['data']);
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
