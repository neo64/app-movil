import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events, LoadingController, Loading } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../../pages/login/login';
import { PedirCitaPreferenciasPage } from '../../pages/pedir-cita-preferencias/pedir-cita-preferencias';
import { PedirCitaReservaPage } from '../../pages/pedir-cita-reserva/pedir-cita-reserva';

// Para aceptar HTML desde la API
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-pedir-cita-elegir',
  templateUrl: 'pedir-cita-elegir.html',
})
export class PedirCitaElegirPage {

	loading: 			Loading; 	// Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.

	bSiguiente 			= {name : 'Siguiente', svg: '', openPage : '', class : 'active login', tipo : '', gradiente: ''};
	bAnterior 			= {name : 'Anterior', svg: '', openPage : '', class : 'login', tipo : '', gradiente: ''};
	tituloSubtitulo 	= {titulo : "Elige tu cita", subtitulo: "de la cita"};

	citasBuscador 		= [];

  	constructor(private domSanitizer: DomSanitizer, private alertCtrl: AlertController, public events: Events, private loadingCtrl: LoadingController, public restProvider: RestProvider,public navCtrl: NavController, public navParams: NavParams) {
  		this.showLoading();
		this.searchCita(this.navParams.get('dia'), this.navParams.get('hora'), this.navParams.get('dr'), this.navParams.get('tto'));
		this.events.publish("user:logged");
  	}


	anterior(){
		this.navCtrl.push(PedirCitaPreferenciasPage, {
		  'tto': this.navParams.get('tto')
		});
	}

		/**
	* 	Función que obtiene todas las citas disponibles
	* 	en la agenda ( conectada con el buscador )
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/
	searchCita(dia, hora, dr, tto) {		
		this.restProvider.searchCita(dia, hora, dr, tto).then(data => {
			//console.log(data);
			if(typeof data != "undefined" &&  data['status'] == 1){
				if(JSON.parse(data['data']).length > 0){
					this.citasBuscador = JSON.parse(data['data']);
				}else{
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
	* 	Función que envía un E-mail a recepción para que estas
	*	inserten la cita desde el buscador.
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/ 
	solicitarCita(item){		

		this.showLoading('Solicitando cita ...');
		this.restProvider.solicitarCita(item.fecha, item.hora, item.usuario, item.tratamiento).then(data => {
			if(typeof data != "undefined" &&  data['status'] == 1){
				this.loading.dismiss();
				this.navCtrl.push(PedirCitaReservaPage, {
				  'item': item
				});				
			}else if(data.status == 401){
				this.showError("¡Atención!","Se ha perdido la sesión, por favor vuelva a iniciar.");
				this.navCtrl.setRoot(LoginPage);				
			}else{
				this.showError("¡Atención!","<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");	
			}			
		}).catch(e => {
			this.loading.dismiss();
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
	showLoading(cont = 'Cargando información...') {
		this.loading = this.loadingCtrl.create({
			content: cont
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
			message: text,
			buttons: ['OK']
		});
		alert.present();
	}

}
