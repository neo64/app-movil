import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, AlertController, LoadingController, Loading} from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';

import { LoginRecibirPinPage } from '../../pages/login-recibir-pin/login-recibir-pin';
import { LoginErrorPinPage } from '../../pages/login-error-pin/login-error-pin';
import { LoginYaRegistradoPage } from '../../pages/login-ya-registrado/login-ya-registrado';


/**
 * Generated class for the LoginRegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-registro',
  templateUrl: 'login-registro.html',
})
export class LoginRegistroPage {

	loading: Loading;		
	tituloSubtitulo = {titulo : "Crea tu cuenta", subtitulo: "introduce tu DNI"};
	bCrear 	= {name : 'Siguiente', svg: '', openPage : 'PedirCita', class : 'active login', tipo : 'page', gradiente: ''};
	registerCredentials = { email: '', password: '' };	// Array con los campos del formulario

 	constructor(private app : App, public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider,private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  	
  	}

  	siguiente(){
  		var dni = this.registerCredentials.email;
						
		if(dni == ''){
			alert("Debes rellenar el campo DNI");
			return;
		}
		
		this.showLoading();
		this.restProvider.sendPIN(dni).then(data => {
			console.log(data);
			this.loading.dismiss();
			if(typeof data != "undefined" && data['status'] == 1){				
				this.app.getRootNav().push(LoginRecibirPinPage, { data: data });				
			}else if(typeof data != "undefined" && data['status'] == 2){
				this.app.getRootNav().push(LoginErrorPinPage);
			}else if(typeof data != "undefined" && data['status'] == 3){
				this.app.getRootNav().push(LoginYaRegistradoPage);
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