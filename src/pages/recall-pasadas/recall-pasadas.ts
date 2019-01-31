import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Events, LoadingController, AlertController, Loading } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../../pages/login/login';
import { PedirCitaPage } from '../../pages/pedir-cita/pedir-cita';
import { DomSanitizer } from '@angular/platform-browser';


@IonicPage()
@Component({
  selector: 'page-recall-pasadas',
  templateUrl: 'recall-pasadas.html',
})
export class RecallPasadasPage {

	loading: 		Loading; 		// Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
	recall 			= Array();
	infoR 			= {fechaFutura: false};
	botonPedirCita	= {name: 'PEDIR CITA DE HIGIENE', svg: 'citas', openPage: 'PedirCita', tipo: 'page', gradiente: '', class: 'active'};

  	constructor(private app : App, private domSanitizer: DomSanitizer, public events: Events, public restProvider: RestProvider, private loadingCtrl: LoadingController, private alertCtrl: AlertController, public navCtrl: NavController) {
		this.showLoading();
		this.getRecallPasadas();
		this.events.publish("user:logged");	
	}

	openPage(page, tipo) {
		if(tipo == "page"){
			if(page == "PedirCita")
				this.app.getRootNav().push(PedirCitaPage);
		}else if(tipo == "web"){
			window.open(page, '_system', 'location=yes');
		}		
	}

		/**
	* 	Función que obtiene las higienes y recall
	*	del paciente
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/ 
	getRecallPasadas(){
		this.restProvider.getRecallPasadas().then(data => {
			console.log(data);
			if(typeof data != "undefined" &&  data['status'] == 1){
				this.recall = data['data']['data'];
				this.infoR 	= data['data'];				
				this.loading.dismiss();
			}else if(data.status == 401){
				this.showError("¡Atención!","Se ha perdido la sesión, por favor vuelva a iniciar.");
				this.navCtrl.setRoot(LoginPage);				
			}else{
				this.showError("¡Atención!","<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
				console.log(data['message']);
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
	showLoading(txt = 'Cargando información...') {
		this.loading = this.loadingCtrl.create({
			content: txt,			
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
