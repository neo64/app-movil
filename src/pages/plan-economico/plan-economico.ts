import { Component } from '@angular/core';
import { IonicPage, NavController, Events, LoadingController, AlertController, Loading, ToastController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../../pages/login/login';
import { PlanEconomicoDetailPage } from '../../pages/plan-economico-detail/plan-economico-detail';

/**
 * Generated class for the PlanEconomicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plan-economico',
  templateUrl: 'plan-economico.html',
})
export class PlanEconomicoPage {

	loading: 		Loading; 			// Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
	cards 			= new Array();	// Array donde se almacenan los objetos del tipo card descargados del servidor.
	showCardError	= false;

  	constructor(private toastCtrl: ToastController, public events: Events, public restProvider: RestProvider, private loadingCtrl: LoadingController, private alertCtrl: AlertController, public navCtrl: NavController) {
		this.showLoading();
		this.getPlanEconomico();
		this.events.publish("user:logged");
	}

	/**
	* 	Función que abre una página
	*
	* 	@param Pagina Page nombre de la página
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/ 
	openPage(info) {
		this.navCtrl.push(PlanEconomicoDetailPage, {
		  'data': info
		});
	}

	/**
	* 	Función que obtiene las tarjetas para la página
	*	de los planes económicos
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/ 
	getPlanEconomico(){
		this.restProvider.getPlanEconomico().then(data => {
			console.log(data);
			if(typeof data != "undefined" &&  data['status'] == 1){
				
				if (typeof this.cards === 'undefined' || this.cards.length <= 0){
					this.showCardError = true;
				}
				
				for (var key in data['data']) {
					this.cards.push(data['data'][key]);
					this.showCardError = false;
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
