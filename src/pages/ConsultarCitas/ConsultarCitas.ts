import { Component,ViewChild } from '@angular/core';
import { NavController, Loading, LoadingController, AlertController, Events, Slides } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

// Para aceptar HTML desde la API
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'page-list',
	templateUrl: 'ConsultarCitas.html'
})

export class ConsultarCitas {

	@ViewChild('slides') slides: Slides;

	loading: 	Loading;		// Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
	citas 		= new Array();	// Array con todas las citas futuras del paciente.
		
	constructor(private domSanitizer: DomSanitizer, public events: Events, private alertCtrl: AlertController, public navCtrl: NavController, public restProvider: RestProvider, private loadingCtrl: LoadingController) {
		this.showLoading();
		this.getCitas();
		this.events.publish("user:logged");
	}

	/**
	* 	Función que mueve los elementos del menú en forma
	*	de slider para poder albergar más elementos
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	
	*/
	next() {
		if(this.slides.isEnd())
	    	this.slides.slidePrev();
	    else
	    	this.slides.slideNext();
	}
	   

	/**
	* 	Función que obtiene las citas pasadas del paciente
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/
	getCitas(){
		this.restProvider.getCitasPasadas().then(data => {
			if(typeof data != "undefined" &&  data['status'] == 1){
				for (var key in data['data']) {
					this.citas.push(data['data'][key]);
				}
				this.loading.dismiss();
			}else if(data.status == 401){
				this.showError("¡Atención!","Se ha perdido la sesión, por favor vuelva a iniciar.");		
				this.events.publish("user:Unauthorized");				
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
	showLoading(text = 'Cargando información...') {
		this.loading = this.loadingCtrl.create({
			content: text,			
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
	* 	Función que detecta el movimiento del gesto y pasa
	*	de una página a otra.
	*
	* 	@param String Titulo de la alerta.
	* 	@param String Texto de la alerta.
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	
	*/
	swipe(e) {
		if(e.direction == '2'){
			this.navCtrl.parent.select(1);
		}else if(e.direction == '4'){
			this.navCtrl.parent.select(0);
		}else if(e.direction == '1'){
			this.getCitas();
		}
	}	
 
}
