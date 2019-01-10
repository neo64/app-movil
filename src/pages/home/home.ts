import { Component, ViewChild } from '@angular/core';
import { NavController, Loading, ToastController, LoadingController, AlertController, Events, Slides} from 'ionic-angular';

import { LoginPage } from '../login/login';

// Páginas del menú
import { MiSaludPage } from '../mi-salud/mi-salud';
import { MiPerfilPage } from '../mi-perfil/mi-perfil';
import { MisDocumentosPage } from '../mis-documentos/mis-documentos';
import { MisCitasPage } from '../mis-citas/mis-citas';
import { ChatPage } from '../chat/chat';
import { SugerenciasPage } from '../sugerencias/sugerencias';

// Páginas de navegación
import { ChangePasswordPage } from '../change-password/change-password';
import { ProfilePage } from '../profile/profile';
import { TabConsultarCitas } from '../tabConsultarCitas/tabConsultarCitas';
import { PedirCitaPage } from '../pedir-cita/pedir-cita';
import { DocumentosContablesPage } from '../documentos-contables/documentos-contables';
import { PresupuestosPage } from '../presupuestos/presupuestos';
import { RecallPage } from '../recall/recall';
import { ConsejosPersonalizadosPage } from '../consejos-personalizados/consejos-personalizados';
import { InstruccionesPage } from '../instrucciones/instrucciones';

// Proveedor de API
import { RestProvider } from '../../providers/rest/rest';

import { DomSanitizer } from '@angular/platform-browser';

import { CallNumber } from '@ionic-native/call-number';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild('slides') slides: Slides;
	
	loading: 	Loading; 		// Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
	cards 		= new Array();	// Array donde se almacenan los objetos del tipo card descargados del servidor.

	cardsMenu = [
	      { name:"MIS CITAS", svg:"citas", openPage: "MisCitas", class: 'active', tipo : 'page' },
	      { name:"CHAT", svg:"chat", openPage: "Chat", class: '' , tipo : 'page'},
	      { name:"MI SALUD", svg:"salud", openPage: "MiSalud", class: '' , tipo : 'page'},
	      { name:"MI PERFIL", svg:"perfil", openPage: "MiPerfil", class: '' , tipo : 'page'},	      
	      { name:"DOCUMENTOS", svg:"documentos", openPage: "MisDocumentos", class: '' , tipo : 'page'},	      
	      { name:"FAQ", svg:"preguntas", openPage: "preguntasFrecuentes", class: '' , tipo : 'page'},	      
	      { name:"WEB", svg:"salud", openPage: "http://www.clinicaferrusbratos.com", class: 'active' , tipo : 'web'},
	      { name:"COMO LLEGAR", svg:"salud", openPage: "http://www.clinicaferrusbratos.com/como-llegar", class: '' , tipo : 'web'},
	      { name:"SUGERENCIAS", svg:"perfil", openPage: "http://www.clinicaferrusbratos.com/como-llegar", class: '' , tipo : 'web'},
	      { name:"OTRO MENU", svg:"documentos", openPage: "http://www.clinicaferrusbratos.com/como-llegar", class: '' , tipo : 'web'},
	    ];


	constructor(private callNumber: CallNumber, private domSanitizer: DomSanitizer, private toastCtrl: ToastController, public events: Events, public restProvider: RestProvider, private loadingCtrl: LoadingController, private alertCtrl: AlertController, public navCtrl: NavController) {
		this.showLoading();
		this.getCardsHome();
		this.events.publish("user:logged");
	}

	callClinica(){
		this.callNumber.callNumber("+34917681812", true)
  			.then(res => console.log('Launched dialer!', res))
  			.catch(err => console.log('Error launching dialer', err));
	}

	next() {
		if(this.slides.isEnd())
	    	this.slides.slidePrev();
	    else
	    	this.slides.slideNext();
	}
  
	openPage(page, tipo) {
		if(tipo === "page"){
			if(page == "MiSalud")
				this.navCtrl.push(MiSaludPage);
			else if(page == "MiPerfil")
				this.navCtrl.push(MiPerfilPage);
			else if(page == "MisDocumentos")
				this.navCtrl.push(MisDocumentosPage);
			else if(page == "MisCitas")
				this.navCtrl.push(MisCitasPage);
			else if(page == "Chat")
				this.navCtrl.push(ChatPage);
			else if(page == "Sugerencias")
				this.navCtrl.push(SugerenciasPage);	
			else if(page == "Higiene")
				this.navCtrl.push(RecallPage);	
			else if(page == "Perfil")
				this.navCtrl.push(ProfilePage);						
			else if(page == "Password")
				this.navCtrl.push(ChangePasswordPage);						
			else if(page == "DocContables")
				this.navCtrl.push(DocumentosContablesPage);						
			else if(page == "DocPresupuestos")
				this.navCtrl.push(PresupuestosPage);						
			else if(page == "Citas")
				this.navCtrl.push(TabConsultarCitas);						
			else if(page == "PedirCita")
				this.navCtrl.push(PedirCitaPage);
			else if(page == "ConsejosPersonalizados")
				this.navCtrl.push(ConsejosPersonalizadosPage);
			else if(page == "Instrucciones")
				this.navCtrl.push(InstruccionesPage);
			else
				this.presentToast("La página no está disponible.");		
			
		}else if(tipo == "web"){
			window.open(page, '_system', 'location=yes');
		}else{
			this.presentToast("La página '"+page+"' de tipo '"+tipo+"' no está disponible.");
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
