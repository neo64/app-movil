import { Component } from '@angular/core';
import { IonicPage, NavController, Loading, ToastController, LoadingController, AlertController, Events } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { PlanEconomicoPage } from '../../pages/plan-economico/plan-economico';
import { LoginPage } from '../../pages/login/login';
import { PresupuestosPage } from '../../pages/presupuestos/presupuestos';
import { DocumentosContablesPage } from '../../pages/documentos-contables/documentos-contables';

// Para aceptar HTML desde la API
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-mis-documentos',
  templateUrl: 'mis-documentos.html',
})
export class MisDocumentosPage {
	loading: 	Loading; 		// Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
	cards 		= new Array();	// Array donde se almacenan los objetos del tipo card descargados del servidor.
	cardsMenu 	= new Array();	// Array donde se descargan los elementos del menú

	constructor(private domSanitizer: DomSanitizer, private toastCtrl: ToastController, public events: Events, public restProvider: RestProvider, private loadingCtrl: LoadingController, private alertCtrl: AlertController, public navCtrl: NavController) {
		this.showLoading();
		this.getCardsMisDocumentos();
		this.events.publish("user:logged");
	}
	
	openPage(page, tipo) {
		if(tipo == "page"){
			if(page == "Presupuestos")
				this.navCtrl.push(PresupuestosPage);
			else if(page == "Contables")
				this.navCtrl.push(DocumentosContablesPage);
			else if(page == "Domiciliaciones")
				this.navCtrl.push(PlanEconomicoPage);		
			else
				this.presentToast("La página " + page + " no está disponible.");
		}else if(tipo == "web"){
			window.open(page, '_system', 'location=yes');
		}
	}

	/**
	* 	Función que obtiene las tarjetas para la página
	*	Mi salud.
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/ 
	getCardsMisDocumentos(){
		this.restProvider.getCardsMisDocumentos().then(data => {
			if(typeof data != "undefined" &&  data['status'] == 1){
				if(data['data']['cards']){
					for (var i in data['data']['cards']) {
						this.cards.push(data['data']['cards'][i]);
					}
				}
				for (var j in data['data']['menu']) {
					this.cardsMenu.push(data['data']['menu'][j]);
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
