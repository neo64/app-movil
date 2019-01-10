import { Component } from '@angular/core';
import { IonicPage, NavController, Loading, AlertController, LoadingController, NavParams, Events } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../../pages/login/login';

@IonicPage()
@Component({
  selector: 'page-pedir-cita',
  templateUrl: 'pedir-cita.html',
})

export class PedirCitaPage {	
	
	loading: 			Loading; 	// Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
	show 				= true;		// Variable de tipo Booleano que cuando "true" ha obtenido citas del buscador.
	isDrSelected 		= false;	// Variable de tipo Booleano que detecta si se ha seleccionado un doctor o no.
	doctores 			= [];		// Array donde se almacenan todos los Drs.
	tratamientos 		= [];		// Array donde se almacenan todos los tratamientos asociados a ese doctor.
	citasBuscador 		= [];		// Array donde se almacenan todas las citas que ha devuelto el buscador.
	ttoSelect 			= "";		// String donde se almacena el tratamiento seleccionado.
		
	constructor(private alertCtrl: AlertController, public events: Events, private loadingCtrl: LoadingController, public restProvider: RestProvider,public navCtrl: NavController, public navParams: NavParams) {
		this.showLoading();
		this.getDoctors();
		this.events.publish("user:logged");
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
	searchCita(formulario) {
		this.citasBuscador = []; // Limpio las citas anteriores por si se pulsa el botón dos veces.
		
		console.log(formulario);

		this.restProvider.searchCita(formulario.form.value.date, formulario.form.value.hour, formulario.form.value.dr, formulario.form.value.tto.IdOpc, formulario.form.value.dias).then(data => {
			if(typeof data != "undefined" &&  data['status'] == 1){
				if(JSON.parse(data['data']).length > 0){
					this.citasBuscador = JSON.parse(data['data']);
					this.show = true;
					this.ttoSelect = 	formulario.form.value.tto.Descripcio;
				}else{
					this.show = false;
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
	
	drSeleccionado(e){
		this.isDrSelected = true;
		this.showLoading();
		this.getTratamientos(e);
	}
	
	/**
	* 	Función que obtiene todos los tratamientos asignados
	*	al doctor seleccionado.
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/	
	getTratamientos(e){
		this.restProvider.getTratamientos(e).then(data => {
			if(typeof data != "undefined" &&  data['status'] == 1){
				this.tratamientos = data['data'];				
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
	* 	Función que obtiene todos los doctores a los que se
	*	les puede asignar una cita desde la aplicación móvil
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/ 
	getDoctors(){
		this.restProvider.getDoctors().then(data => {
			if(typeof data != "undefined" &&  data['status'] == 1){					
				this.doctores = data['data'];					
				this.loading.dismiss();
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
	* 	Función que envía un E-mail a recepción para que estas
	*	inserten la cita desde el buscador.
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/ 
	solicitarCita(fecha, hora, doctor, tratamiento){
		this.showLoading('Solicitando cita ...');
		this.restProvider.solicitarCita(fecha, hora, doctor, tratamiento).then(data => {
			if(typeof data != "undefined" &&  data['status'] == 1){					
				this.showError("¡Atención!",data['message']);					
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