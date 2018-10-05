import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, AlertController, Loading, LoadingController, NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../../pages/login/login';

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})

export class PopoverPage {
	
	loading: Loading;	// Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
	fecha 		= "";	// Fecha que será obtenida por parámetro
	hora 		= "";	// Hora que será obtenida por parámetro

	constructor(public navCtrl: NavController, private alertCtrl: AlertController, public restProvider: RestProvider, public viewCtrl: ViewController, public navParams: NavParams, private loadingCtrl: LoadingController) {
		this.fecha 	= this.navParams.get("fecha");
		this.hora 	= this.navParams.get("hora");
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
	presentConfirm(action) {
		let alert = this.alertCtrl.create({
			title: 'Confirmación requerida',
			message: '¿Quieres ' + action + ' la cita?',
			buttons: [{ text: 'CANCELAR', role: 'cancel'},{
					text: action,
					handler: () => {
						this.showLoading("Gestionando la cita ...");
						this.gestionarCita(action);							
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
	gestionarCita(tipo) {		
		this.viewCtrl.dismiss(); // Para cerrar el popup
		var textoAlert = "";
		
		if(tipo == "anular")
			textoAlert = "Hemos anulado tu cita.";
		else if(tipo == "cambiar")
			textoAlert = "Nos pondremos en contacto contigo para cambiar la cita.";
		else if(tipo == "confirmar")
			textoAlert = "Hemos confirmado tu cita.";
		
		this.restProvider.gestionarCita(tipo, this.fecha, this.hora).then(data => {
			if(typeof data != "undefined" &&  data['status'] == 1){
				this.showError("Información",textoAlert);	
			}else if(data.status == 401){
				this.showError("¡Atención!","Se ha perdido la sesión, por favor vuelva a iniciar.");
				this.navCtrl.setRoot(LoginPage);					
			}else{
				this.showError("¡Atención!",data['message']);
			}			
		}).catch(e => {
			this.showError("ERROR","Hubo un error al gestionar tu cita.");	
		});		
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
}

