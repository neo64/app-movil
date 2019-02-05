import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, Events, Loading, LoadingController, AlertController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';

import { HomePage } from '../../pages/home/home';


/**
 * Generated class for the LoginInputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-input',
  templateUrl: 'login-input.html',
})
export class LoginInputPage {

	loading: Loading;		
	tituloSubtitulo = {titulo : "Inicia sesión", subtitulo: "en tu cuenta"};
	bIniciar 	= {name : 'Iniciar sesión', svg: '', openPage : 'PedirCita', class : 'active login', tipo : 'page', gradiente: ''};
	registerCredentials = { email: '', password: '' };	// Array con los campos del formulario

	constructor(private app : App, public events: Events, public nav: NavController, public navParams: NavParams, public restProvider: RestProvider,private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
	
	}

	goTab(n){
		this.nav.parent.select(n);
	}

	/**
	* 	Función que comprueba si el usuario y la contraseña
	*	son correctos.
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/ 	
	login() {		
			
		var user = this.registerCredentials.email;
		var pass = this.registerCredentials.password;
				
		if(user == '' || pass == '')
			return;		
		
		this.showLoading();
		this.restProvider.login(user,pass).then(data => {
			if(typeof data != "undefined" && data['status'] == 1){
				
				window.localStorage.setItem("idPac", data['idPac']);					
				window.localStorage.setItem("token", data['token']);				
				window.localStorage.setItem("expires", data['expires']);

				this.events.publish("user:logged");	
				this.app.getRootNav().setRoot(HomePage);
				
			}else{
				if(typeof data['code'] != "undefined")
					this.showError("ERROR " + data['code'],"Acceso Denegado");			
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
