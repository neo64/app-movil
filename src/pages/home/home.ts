import { Component } from '@angular/core';
import { NavController, Loading, ToastController, LoadingController, AlertController, Events} from 'ionic-angular';
import { TabConsultarCitas } from '../tabConsultarCitas/tabConsultarCitas';
import { PedirCitaPage } from '../pedir-cita/pedir-cita';
import { ChatPage } from '../chat/chat';
import { DocFirmadosPage } from '../doc-firmados/doc-firmados';
//import { AccesoResultadosPage } from '../acceso-resultados/acceso-resultados';
import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';
import { MiSaludPage } from '../mi-salud/mi-salud';
import { ChangePasswordPage } from '../change-password/change-password';
import { RestProvider } from '../../providers/rest/rest';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
	loading: 	Loading; 		// Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
	cards 		= new Array();	// Array donde se almacenan los objetos del tipo card descargados del servidor.

	constructor( private toastCtrl: ToastController, public events: Events, public restProvider: RestProvider, private loadingCtrl: LoadingController, private alertCtrl: AlertController, public navCtrl: NavController) {
		this.showLoading();
		this.getCardsHome();
		this.events.publish("user:logged");
	}
  
	openPage(page, tipo) {
		if(tipo == "page"){
			if(page == "ConsultarCitas")
				this.navCtrl.push(TabConsultarCitas);
			else if(page == "PedirCita")
				this.navCtrl.push(PedirCitaPage);
			else if(page == "Chat")
				this.navCtrl.push(ChatPage);
			else if(page == "DocFirmados")
				this.navCtrl.push(DocFirmadosPage);
			else if(page == "Profile")
				this.navCtrl.push(ProfilePage);
			else if(page == "ChangePassword")
				this.navCtrl.push(ChangePasswordPage);
			else if(page == "MiSalud")
				this.navCtrl.push(MiSaludPage);
			else
				this.presentToast("La página no está disponible.");		
			
		}else if(tipo == "web"){
			window.open(page, '_system', 'location=yes');
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
		console.log("ENTRA");
		let toast = this.toastCtrl.create({
			message: txt,
			duration: 3000,
			position: 'bottom',
			showCloseButton: true,
			closeButtonText: 'OK'
		});
		toast.present();
	}
	
	
	/**
	* 	Función que obtiene las tarjetas para la página
	*	principal de la aplicación.
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/ 
	getCardsHome(){
		this.restProvider.getCardsHome().then(data => {
			if(typeof data != "undefined" &&  data['status'] == 1){
				for (var key in data['data']) {
					this.cards.push(data['data'][key]);
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

}
