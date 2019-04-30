import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
//import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the AccesoResultadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acceso-resultados',
  templateUrl: 'acceso-resultados.html',
})
export class AccesoResultadosPage {
	
	loading: Loading;
	files = new Array();
	error = false;
	repeatCall = 0;
	errorMsg = "";
	subErrorMsg = "";
	loadingPresented = false;

  constructor(/*private domSanitizer: DomSanitizer, */public restProvider: RestProvider, private loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
		this.showLoading();
		this.listFiles();
	}
	
	openURL(url){
		console.log("OPENURL -> " + url);
		if(this.repeatCall < 5){
			this.restProvider.getImage(url).then(data => {
				if(typeof data != "undefined" &&  data['status'] == 1){
					/*for (var key in data['data']) {
						this.files.push(data['data'][key]);
					}*/
					console.log(data);
					this.loading.dismiss();
					this.repeatCall = 0;
				}else if(data.status == 401){
					this.repeatCall++;
					var user = window.localStorage.getItem("user");
					var pass = window.localStorage.getItem("pass");					
					this.login(user,pass);					
					console.log("0. Repetir llamada a función");
					setTimeout( () => { this.openURL(url); }, 1000 );					
				}else if(data['status'] == 0 && data['code'] == 5003){
					this.loading.dismiss();
					this.error = true;
					this.errorMsg 		= "No se han obtenido registros";			
					this.subErrorMsg 	= "No hay citas en nuestra base de datos.";	
					this.repeatCall = 0;
				}else{
					this.repeatCall++;					
					console.log("1. Repetir llamada a función");					
					setTimeout( () => { this.openURL(url); }, 1000 );							
				}			
			}).catch(e => {
				this.loading.dismiss();
				console.log(e);
				this.repeatCall = 0;
			});
		}else{
			this.loading.dismiss();
			this.error = true;
			this.errorMsg 		= "No se han obtenido registros";
			this.subErrorMsg 	= "Revisa la conexión a Internet";	
			this.repeatCall = 0;
		}
	}

  listFiles(){
		if(this.repeatCall < 5){
			this.restProvider.listFiles().then(data => {
				if(typeof data != "undefined" &&  data['status'] == 1){
					for (var key in data['data']) {
						this.files.push(data['data'][key]);
					}
					console.log(data);
					this.loading.dismiss();
					this.repeatCall = 0;
				}else if(data.status == 401){
					this.repeatCall++;
					var user = window.localStorage.getItem("user");
					var pass = window.localStorage.getItem("pass");					
					this.login(user,pass);					
					console.log("0.Repetir llamada a función");
					setTimeout( () => { this.listFiles(); }, 1000 );					
				}else if(data['status'] == 0 && data['code'] == 5003){
					this.loading.dismiss();
					this.error = true;
					this.errorMsg 		= "No se han obtenido registros";			
					this.subErrorMsg 	= "No hay citas en nuestra base de datos.";	
					this.repeatCall = 0;					
				}else{
					this.repeatCall++;				
					console.log("Repetir llamada a función");					
					setTimeout( () => { this.listFiles(); }, 1000 );							
				}			
			}).catch(e => {
				this.loading.dismiss();
				console.log(e);
				this.repeatCall = 0;
			});
		}else{
			this.loading.dismiss();
			this.error = true;
			this.errorMsg 		= "No se han obtenido registros";
			this.subErrorMsg 	= "Revisa la conexión a Internet";	
			this.repeatCall = 0;
		}
	}
	
	login(user,pass){
		this.restProvider.login(user,pass).then(data => {
			if(typeof data != "undefined" && data['status'] == 1){				
				window.localStorage.setItem("user", user);				
				window.localStorage.setItem("pass", pass);				
				window.localStorage.setItem("token", data['token']);				
				window.localStorage.setItem("expires", data['expires']);								
			}
		});	
	}
	
	showLoading() {
		this.loading = this.loadingCtrl.create({
			content: 'Cargando información...',			
			//dismissOnPageChange: true
		});
		this.loading.present();
	}

}
