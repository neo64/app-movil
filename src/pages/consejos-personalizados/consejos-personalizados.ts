import { Component } from '@angular/core';
import { IonicPage, NavController, Events, LoadingController, AlertController, Loading } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../../pages/login/login';
import { ConsejosDetailPage } from '../../pages/consejos-detail/consejos-detail';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-consejos-personalizados',
  templateUrl: 'consejos-personalizados.html',
})
export class ConsejosPersonalizadosPage {

	loading: 		Loading; 		// Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
	cards 			= new Array();	// Array donde se almacenan los objetos del tipo card descargados del servidor.
	showCardError	= false;
	tituloSubtitulo = [{titulo : "Mis Consejos", subtitulo: "de los doctores"}];

	constructor(private domSanitizer: DomSanitizer, public events: Events, public restProvider: RestProvider, private loadingCtrl: LoadingController, private alertCtrl: AlertController, public navCtrl: NavController) {
		this.showLoading();
		this.getConsejosPersonalizados();
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
		this.navCtrl.push(ConsejosDetailPage, {
		  'data': info
		});
	}
	
	/**
	* 	Función que obtiene las tarjetas para la página
	*	de mis Consejos personalizados.
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/ 
	getConsejosPersonalizados(){
		this.restProvider.getConsejosPersonalizados().then(data => {
			if(typeof data != "undefined" &&  data['status'] == 1){
				for (var key in data['data']) {
					if(key == "Img")
						data['data'][key] = this.domSanitizer.bypassSecurityTrustUrl(data['data'][key]);
					this.cards.push(data['data'][key]);
				}
				
				if (typeof this.cards === 'undefined' || this.cards.length <= 0){
					this.showCardError= true;
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
