import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, AlertController, LoadingController, Loading} from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';

import { LoginRecibirPinPage } from '../../pages/login-recibir-pin/login-recibir-pin';


@IonicPage()
@Component({
  selector: 'page-login-olvido',
  templateUrl: 'login-olvido.html',
})
export class LoginOlvidoPage {

	loading: Loading;		
	tituloSubtitulo = {titulo : "Recuperar contraseña", subtitulo: "introduce tu DNI"};
	bCrear 	= {name : 'Siguiente', svg: '', openPage : 'PedirCita', class : 'active login', tipo : 'page', gradiente: ''};
	registerCredentials = { dni: '' };	// Array con los campos del formulario


  	constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider,private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  	
  	}

    siguiente(){
  		var dni = this.registerCredentials.dni;
						
		if(dni == ''){
			alert("Debes rellenar el campo DNI");
			return;
		}
		
		this.showLoading();
		this.restProvider.checkDNI(dni).then(data => {
	
			if(typeof data != "undefined" && (data['status'] == 1 || data['status'] == 3)){				
				this.navCtrl.push(LoginRecibirPinPage, { dni: dni });
				this.loading.dismiss();				
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
			dismissOnPageChange: false,
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