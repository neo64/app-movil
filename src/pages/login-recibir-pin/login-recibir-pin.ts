import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Loading, LoadingController, AlertController  } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';

import { LoginErrorPinPage } from '../../pages/login-error-pin/login-error-pin';
import { LoginYaRegistradoPage } from '../../pages/login-ya-registrado/login-ya-registrado';

@IonicPage()
@Component({
  selector: 'page-login-recibir-pin',
  templateUrl: 'login-recibir-pin.html',
})
export class LoginRecibirPinPage {

	loading: Loading;		
	registerCredentials = { digitos: '' };	// Array con los campos del formulario
	data = Array();
	bCrear 	= {name : 'Siguiente', svg: '', openPage : 'PedirCita', class : 'active login', tipo : 'page', gradiente: ''};


  	constructor(public events: Events, public navCtrl: NavController, public nav: NavParams, public restProvider: RestProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  		this.data = this.nav.get("data");
  		console.log("CONSTRUCTR");
  		console.log(this.data);
  	}

  	reEnviarPIN(){
		
		this.showLoading();

		this.restProvider.sendPIN(this.data.data.dni.trim()).then(d => {
			this.loading.dismiss();
			if(typeof d != "undefined" && d['status'] == 1){
				this.data = d;
				console.log("FUNCION");
  				console.log(this.data);
			}else if(typeof d != "undefined" && d['status'] == 2){
				this.navCtrl.push(LoginErrorPinPage);
			}else if(typeof d != "undefined" && d['status'] == 3){
				this.navCtrl.push(LoginYaRegistradoPage);
			}else{
				if(typeof d['code'] != "undefined")
					this.showError("ERROR " + d['code'],"Acceso Denegado");			
				else
					this.showError("ERROR","Acceso Denegado");			
			}
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
}
