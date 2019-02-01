import { Component } from '@angular/core';
import { RestProvider } from '../../providers/rest/rest';
import { NavController, Loading, IonicPage, LoadingController, AlertController, Events  } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { ChangePasswordPage } from '../../pages/change-password/change-password';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

	loading: Loading;									// Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
	registerCredentials = { email: '', password: '' };	// Array con los campos del formulario
	bCrearCuenta 	= {name : 'Crear cuenta', svg: '', openPage : 'crearCuenta', class : 'active login', tipo : 'page', gradiente: ''};
	bIniciarSesion 	= {name : 'Iniciar sesión', svg: '', openPage : 'IniciarSesion', class : 'login', tipo : 'page', gradiente: ''};


	constructor(public events: Events, private nav: NavController, public restProvider: RestProvider,private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
				
		var timeNow = new Date(2100,12,31,23,59,59,0); // Obtengo una fecha en el futuro por si la API no devuelve fecha.
		var expires = new Date(2100,12,31,23,59,59,0); // Obtengo una fecha en el futuro por si la API no devuelve fecha.
		
		// Compruebo si la fecha de expiración es posterior
		// a la fecha actual del sistema, si es así redirijo
		// a la página de home.
		this.restProvider.getTimeServer().then(data => {
			
			if(typeof data != "undefined" && data['status'] == 1){
				timeNow = new Date(Number(data['timeStamp']));
				expires = new Date(Number(data['expires']));
			}
			
			if(expires > timeNow){
				this.events.publish("user:logged");	
				this.nav.setRoot(HomePage);	
			}		
		});
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
	public login() {		
			
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
	
				if(data['isDefault'] == 1)
					this.nav.push(ChangePasswordPage, {first: true});
				else
					this.nav.setRoot(HomePage);
				
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
