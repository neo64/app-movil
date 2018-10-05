import { Component } from '@angular/core';
import { NavController, Loading, LoadingController, AlertController} from 'ionic-angular';
import { TabConsultarCitas } from '../tabConsultarCitas/tabConsultarCitas';
import { PedirCitaPage } from '../pedir-cita/pedir-cita';
import { ChatPage } from '../chat/chat';
import { DocFirmadosPage } from '../doc-firmados/doc-firmados';
import { AccesoResultadosPage } from '../acceso-resultados/acceso-resultados';
import { LoginPage } from '../login/login';
import { RestProvider } from '../../providers/rest/rest';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
	loading: 	Loading; 		// Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
	cards 		= new Array();	// Array donde se almacenan los objetos del tipo card descargados del servidor.

	constructor(public restProvider: RestProvider, private loadingCtrl: LoadingController, private alertCtrl: AlertController, public navCtrl: NavController) {
		this.showLoading();
		this.getCardsHome();
	}
  
	openPage(page, tipo) {
		if(tipo == "page"){
			if(page == "ConsultarCitas")
				this.navCtrl.push(TabConsultarCitas);
			else if(page == "PedirCita")
				this.navCtrl.push(PedirCitaPage);
			else if(page == "Chat")
				this.navCtrl.push(ChatPage);
			else if(page == "DocFirmadosPage")
				this.navCtrl.push(DocFirmadosPage);
			else if(page == "AccesoResultadosPage")
				this.navCtrl.push(AccesoResultadosPage);
		}else if(tipo == "web"){
			window.open(page, '_system', 'location=yes');
		}
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
				this.showError("ERROR",data['message']);						
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
