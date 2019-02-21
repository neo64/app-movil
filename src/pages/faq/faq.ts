import { Component } from '@angular/core';
import { IonicPage, NavController, Loading, AlertController, LoadingController, NavParams, Events } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../../pages/login/login';
import { FaqDetailPage } from '../../pages/faq-detail/faq-detail';
import { ChatPage } from '../../pages/chat/chat';

@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})

export class FaqPage {

	tituloSubtitulo 	= {titulo : "Preguntas frecuentes", subtitulo: "de tratamientos"};
	faq 				= [];
	loading: 			Loading; 	// Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.


  	constructor(private alertCtrl: AlertController, public events: Events, private loadingCtrl: LoadingController, public restProvider: RestProvider,public navCtrl: NavController, public navParams: NavParams) {
  		this.showLoading();
		this.getFaq();
		this.events.publish("user:logged");
  	}

  	/**
	* 	Función que envia los parámetros a 
	*	la página que muestra las preguntas de cada categoria
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/	
  	siguiente(f){
  		this.navCtrl.push(FaqDetailPage, {
		  'categoria' 	: f.name
		});
  	}

  	/**
	* 	Función que obtiene todos las categorias
	* 	de las preguntas frecuentes.
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/	
	getFaq(){
		this.restProvider.getFaq().then(data => {
			if(typeof data != "undefined" &&  data['status'] == 1){
				this.faq = data['data'];				
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
	
	openPage(page,) {

		if(page=="chat")
			this.navCtrl.push(ChatPage);

	}

}
