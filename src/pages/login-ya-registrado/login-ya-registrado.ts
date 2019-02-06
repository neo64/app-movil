import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { LoginRecibirPinPage } from '../../pages/login-recibir-pin/login-recibir-pin';
import { LoginTabPage } from '../../pages/login-tab/login-tab';

/**
 * Generated class for the LoginYaRegistradoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-ya-registrado',
  templateUrl: 'login-ya-registrado.html',
})
export class LoginYaRegistradoPage {

	tituloSubtitulo  = {titulo : "Tu cuenta ya existe", subtitulo: "en nuestro sistema"};
	bRecuperar 	= {name : 'Recuperar', svg: '', openPage : 'Recuperar', class : 'active login', tipo : 'page', gradiente: ''};
	bIniciarSesion 	= {name : 'Iniciar sesión', svg: '', openPage : 'Login', class : 'login', tipo : 'page', gradiente: ''};
	dni = 0;

	constructor(private toastCtrl: ToastController, public nav: NavController, public navParams: NavParams) {
		this.dni = this.navParams.get("dni");
		console.log("->", this.navParams.get("dni"));
	}

	/**
	* 	Función que abre una página o una web dependiendo
	*	de los parámetros que se les introduzca.
	*
	* 	@param String page a la que redirigir.
	* 	@param String tipo si es pagina o web.
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	
	*/  
	openPage(page, tipo) {
		if(tipo === "page"){
			if(page == "Login")
				this.nav.push(LoginTabPage, { pageDefault: "0" } );				
			else if(page == "Recuperar")
				this.nav.push(LoginRecibirPinPage, {dni : this.dni});			
			else
				this.presentToast("La página no está disponible.");			
		}else if(tipo == "web"){
			window.open(page, '_system', 'location=yes');
		}else{
			this.presentToast("La página '"+page+"' de tipo '"+tipo+"' no está disponible.");
		}		
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
