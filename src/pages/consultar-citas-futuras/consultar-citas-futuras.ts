import { Component, ViewChild} from '@angular/core';
import { NavController, Loading, LoadingController, Platform, PopoverController, AlertController, Events, Slides  } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { PopoverPage } from '../../pages/popover/popover';
import { Calendar } from '@ionic-native/calendar';

// Para aceptar HTML desde la API
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'page-list',
	templateUrl: 'consultar-citas-futuras.html'
})

export class ConsultarCitasFuturasPage {

	@ViewChild('slides') slides: Slides;


	loading: 	Loading;		// Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
	citas 		= new Array();	// Array con todas las citas futuras del paciente.
	calendars 	= [];			// Array con la información de la cita para almacenar en el calendario.
	showMessage = false;
	fecha 		= "";			// Fecha que será obtenida por parámetro
	hora 		= "";			// Hora que será obtenida por parámetro

	
	constructor(private domSanitizer: DomSanitizer, public events: Events, private alertCtrl: AlertController, public popoverCtrl: PopoverController, private calendar: Calendar,  public navCtrl: NavController, public restProvider: RestProvider, private loadingCtrl: LoadingController, private plt: Platform) {
		this.showLoading();
		this.getCitas();
		
		 if (this.plt.is('cordova')) {
			this.plt.ready().then(() => {
				this.calendar.listCalendars().then(data => {
					this.calendars = data;
				});
			})	
		 }
		
		this.events.publish("user:logged");
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
	* 	Función que añade al calendario una cita.
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/
	addEvent(timestampINI,timestampFIN) {
		
		let dateINI 	= new Date(parseInt(timestampINI));
		let dateFIN 	= new Date(parseInt(timestampFIN));
		let titulo 		= 'Cita en Clínica Dental Ferrus&Bratos';
		let direccion 	= 'C/ Caleruega 67 3ª Planta. 28033 Madrid';
		
		let options = { calendarId: 1, url: 'http://clinicaferrusbratos.com', firstReminderMinutes: 15 };
	 
		this.calendar.createEventInteractivelyWithOptions(titulo, direccion, '', dateINI, dateFIN, options)
		.then(
			res => { 
				//this.showError("¡Bien!", "La cita ha sido añadida al calendario." + res);
			}, 	
			err => {
				this.showError("ERROR", "No ha sido posible añadir la cita al calendario.");
			}
		).catch( 
			e => { 
				this.showError("ERROR", "No ha sido posible añadir la cita al calendario.");
			}
		);
	}
	
	/**
	* 	Función que convierte los numeros a dos digitos
	*
	* 	@param Integer Número a convertir
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return Número de dos digitos 
	*/
	pad(a){
		return (a < 10 ? '0' : '') + a
	}
	
	/**
	* 	Función que obtiene las citas futuras del paciente
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/
	getCitas(){
		this.restProvider.getCitasFuturas().then(data => {
			if(typeof data != "undefined" &&  data['status'] == 1){
				if(data['code'] == '105260'){ 
					this.showMessage = true;
					this.citas = data['data'];
				}else{
					for (var key in data['data']) {
						this.citas.push(data['data'][key]);
					}
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
			dismissOnPageChange: true
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
