import { Component } from '@angular/core';
import { IonicPage, Platform, NavController, NavParams, Events, Loading, LoadingController, AlertController  } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';

import { LoginErrorPinPage } from '../../pages/login-error-pin/login-error-pin';
import { LoginYaRegistradoPage } from '../../pages/login-ya-registrado/login-ya-registrado';
import { LoginReenviarPage } from '../../pages/login-reenviar/login-reenviar';

import { ChangePasswordPage } from '../../pages/change-password/change-password';

declare var SMS:any;


@IonicPage()
@Component({
  selector: 'page-login-recibir-pin',
  templateUrl: 'login-recibir-pin.html',
})
export class LoginRecibirPinPage {

	loading 			: Loading;		
	registerCredentials = { digitos: '' };	// Array con los campos del formulario
	data 				= Array();
	bCrear 				= {name : 'Siguiente', svg: '', openPage : 'PedirCita', class : 'active login', tipo : 'page', gradiente: ''};
	interval 			: any;
	tituloSubtitulo 	= {titulo : "Introduce el PIN", subtitulo: "que te acabamos de enviar"};


  	constructor(public platform:Platform, public events: Events, public navCtrl: NavController, public nav: NavParams, public restProvider: RestProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  		this.enviarPIN(this.nav.get("dni"));  		
  	}
	
	ReadListSMS(){

		let filter = {
	       box 			: 'inbox', // 'inbox' (default), 'sent', 'draft'
	       indexFrom 	: 0, // start from index 0
	       maxCount 	: 10, // count of SMS to return each time
	       address 		: "Clinica F&B",
	       body			: "verificacion",
	    };

	    if(SMS) {
	    	SMS.listSMS(filter, (ListSms)=>{
	           this.detectCode(ListSms);
	        },error=>{
	          	console.log('error list sms: ' + error);
	        });	
	    }
	}

	detectCode(ListSms){
		for(let data of ListSms) {
		  	var pin = data.body.substr((data.body.indexOf(": ")+2), 6);
		   	this.checkPIN(this.nav.get("dni"), pin, true);
		}
	}
	
  	checkPIN(dni, pin, auto = false){		
  		
  		if(!pin)
  			pin = this.registerCredentials.digitos;

		this.restProvider.checkPIN(dni, pin).then(d => {
			if(typeof d != "undefined" && d['status'] == 1){
				console.log(d);

				this.registerCredentials.digitos = pin;
				this.showLoading(true);
				clearInterval(this.interval);

				window.localStorage.setItem("idPac", d['data']['idPac']);					
				window.localStorage.setItem("token", d['data']['token']);				
				window.localStorage.setItem("expires", d['data']['expires']);

				this.events.publish("user:logged");	

				this.navCtrl.push(ChangePasswordPage);
			}else if(typeof d != "undefined" && d['status'] == 2){
				if(!auto)
					this.showError("ERROR","El código introducido es incorrecto."); 	
			}else{
				if(typeof d['code'] != "undefined" && !auto)
					this.showError("ERROR " + d['code'],"Acceso Denegado");			
				else if(!auto)
					this.showError("ERROR","Acceso Denegado");			
			}
		});
  	}

  	reEnviarPIN(){
  		this.navCtrl.push(LoginReenviarPage, {data: this.data});
  	}


  	enviarPIN(dni){
		
		this.showLoading();		

		this.restProvider.sendPIN(dni).then(d => {
			
			if(typeof d != "undefined" && d['status'] == 1){
				this.data = d['data'];
				this.loading.dismiss();

				this.ReadListSMS();
  				this.interval = setInterval(() => { 
				   this.ReadListSMS();
				}, 3000);
  				
			}else if(typeof d != "undefined" && d['status'] == 2){
				this.navCtrl.push(LoginErrorPinPage).then(() => {
					const startIndex = this.navCtrl.getActive().index - 1;
				  	this.navCtrl.remove(startIndex);
				});
				this.loading.dismiss();
			}else if(typeof d != "undefined" && d['status'] == 3){
				this.navCtrl.push(LoginYaRegistradoPage, {dni: this.nav.get("dni")}).then(() => {
					const startIndex = this.navCtrl.getActive().index - 1;
				  	this.navCtrl.remove(startIndex);
				});
				this.loading.dismiss();
			}else{
				if(typeof d['code'] != "undefined")
					this.showError("ERROR " + d['code'],"Acceso Denegado");			
				else
					this.showError("ERROR","Acceso Denegado");			
			}
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
	showLoading(dismiss = false) {
		this.loading = this.loadingCtrl.create({
			content: 'Cargando información...',			
			dismissOnPageChange: dismiss,
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
