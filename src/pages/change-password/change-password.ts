import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController,LoadingController, Events } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../../pages/login/login';

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {
	
	isFirst 	= false;	// Indica si es la primera vez que entra en la App, y debe cambiar la contraseña
	loading: 	Loading;	// Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
	data 		= { /*pass1: '', */pass2: '', pass3: '' }; // Array con las tres contraseñas (antigua, 2 nuevas)
	bGuardar 	= {name : 'Guardar contraseña', svg: '', openPage : 'Login', class : 'active login', tipo : 'page', gradiente: ''};
	tituloSubtitulo  = {titulo : "Crea tu contraseña", subtitulo: "para acceder a la App"};


	constructor(public events: Events, private loadingCtrl: LoadingController,public restProvider: RestProvider, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
		this.isFirst = navParams.get('first');
		this.events.publish("user:logged");
	}
	
	/**
	* 	Función actualiza la contraseña del usuario, si es
	*	la primera vez que entra mostrará el mensaje de que 
	*	es obligatorio cambiarla.
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 
	*/
	actualizarPass(){		
		this.showLoading(); 	// Mostramos el ProgressBar al iniciar la aplicación
		if(/*this.data.pass1 == "" || */this.data.pass2 == "" || this.data.pass3 == ""){
			this.showError("ERROR","Los campos no pueden estar vacios.");	
			return;
		//}else if (this.data.pass1 == this.data.pass2){
		//	this.showError("ERROR","La nueva contraseña no puede ser igual que la anterior.");	
		//	return;
		}else if (this.data.pass3 != this.data.pass2){
			this.showError("ERROR","La nuevas nuevas contraseñas deben ser iguales.");	
			return;
		}else{
			this.restProvider.actualizarPass(/*this.data.pass1,*/this.data.pass2,this.data.pass3).then(data => {
				if(typeof data != "undefined" && data['status'] == 1){					
					if(data['error'] == 0){ 
						this.showError("¡Bien!","La contraseña ha sido cambiada con éxito", true);		
					}else{
						this.showError("¡Atención!","<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
					}					
				}else if(data.status == 401){
					this.showError("¡Atención!","Se ha perdido la sesión, por favor vuelva a iniciar.");
					this.navCtrl.setRoot(LoginPage);
				}else{
					this.showError("¡Atención!","<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
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
	showError(title,text, redirect = false) {
		this.loading.dismiss();
		let alert = this.alertCtrl.create({
			title: title,
			subTitle: text,
			buttons:  [{
				text: 'OK',
				role: 'OK',
				handler: () => {
				  if(redirect)
					this.navCtrl.setRoot(HomePage);  
				}
			}]
		});
		alert.present();
	}
	
	
}
