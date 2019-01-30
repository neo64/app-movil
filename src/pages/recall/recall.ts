import { Component } from '@angular/core';
import { IonicPage, NavController, Loading, LoadingController, AlertController, Events, PopoverController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../../pages/login/login';
import { Calendar } from '@ionic-native/calendar';
import { PopoverPage } from '../../pages/popover/popover';
import { DomSanitizer } from '@angular/platform-browser';


@IonicPage()
@Component({
  selector: 'page-recall',
  templateUrl: 'recall.html',
})
export class RecallPage {

	loading: 	Loading; 		// Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
	recall 		= Array();
	fechaProx 	= "";
	showPlanificada = false;
	showMessage = true;
	
	constructor(private domSanitizer: DomSanitizer, private calendar: Calendar, public popoverCtrl: PopoverController, public events: Events, public restProvider: RestProvider, private loadingCtrl: LoadingController, private alertCtrl: AlertController, public navCtrl: NavController) {
		this.showLoading();
		this.getRecall();
		this.events.publish("user:logged");	
	}
	
	openPage(page, tipo) {
		if(tipo == "page"){
			
		}else if(tipo == "web"){
			window.open(page, '_system', 'location=yes');
		}		
	}
	
	/**
	* 	Función que añade al calendario una cita.
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/
	addEvent(timestampINI,timestampFIN) {
		this.showLoading("Añadiendo al calendario")		
		
		let dateINI 	= new Date(parseInt(timestampINI));
		let dateFIN 	= new Date(parseInt(timestampFIN));
		let titulo 		= 'Cita en clínica dental Ferrus & Bratos';
		let direccion 	= 'C/ Caleruega 67 3ª Planta. 28033 Madrid';
		
		let options = { calendarId: 1, calendarName: "Clínica Ferrus & Bratos", url: 'http://clinicaferrusbratos.com', firstReminderMinutes: 15 };
	 
		this.calendar.createEventInteractivelyWithOptions(titulo, direccion, '', dateINI, dateFIN, options).then(res => {
			this.loading.dismiss();
		}, err => {
		  this.loading.dismiss();
		});
	}
	
	/**
	* 	Función que muestra un pop-up para gestionar la cita.
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/
	presentPopover(myEvent, fecha, hora) {
		let popover = this.popoverCtrl.create(PopoverPage, {fecha:fecha, hora:hora});
		popover.present({
			ev: myEvent
		});
	}

	/**
	* 	Función que muestra una alerta para confirmar o
	*	anular la acción requerida.
	*
	* 	@param String Accion de gestión de la cita (Anulada, Cambio o Confirmada)
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	
	*/
	presentConfirm(action,fechaDecimal, horaDecimal) {
		let alert = this.alertCtrl.create({
			title: 'Confirmación requerida',
			message: '¿Quieres ' + action + ' la cita?',
			buttons: [{ text: 'CANCELAR', role: 'cancel'},{
					text: action,
					handler: () => {
						this.showLoading("Gestionando la cita ...");
						this.gestionarCita(action, fechaDecimal, horaDecimal);							
					}
				}
			]
		});
		alert.present();
	}

	/**
	* 	Función que muestra gestiona la cita haciendo
	*	uso de la API del sistema
	*
	* 	@param String Tipo de gestión de la cita (Anulada, Cambio o Confirmada)
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	
	*/
	gestionarCita(tipo, fechaDecimal, horaDecimal) {		
		var textoAlert = "";
		
		if(tipo == "anular")
			textoAlert = "Hemos anulado tu cita.";
		else if(tipo == "cambiar")
			textoAlert = "Nos pondremos en contacto contigo para cambiar la cita.";
		else if(tipo == "confirmar")
			textoAlert = "Hemos confirmado tu cita.";
		
		this.restProvider.gestionarCita(tipo, fechaDecimal, horaDecimal).then(data => {
			if(typeof data != "undefined" &&  data['status'] == 1){
				this.showError("Información",textoAlert);	
			}else if(data.status == 401){
				this.showError("¡Atención!","Se ha perdido la sesión, por favor vuelva a iniciar.");
				this.events.publish("user:Unauthorized");				
			}else{
				this.showError("¡Atención!","<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
			}			
		}).catch(e => {
			this.showError("ERROR","Hubo un error al gestionar tu cita.");	
		});		
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
	getRecall(){
		this.restProvider.getRecall().then(data => {
			if(typeof data != "undefined" &&  data['status'] == 1){
				this.recall = data['data']['data'];
				if(data['data']['fechaFutura']){
					this.showMessage = false;
				}
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
