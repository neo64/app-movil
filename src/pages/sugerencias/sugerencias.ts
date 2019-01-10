import { Component } from '@angular/core';
import { IonicPage,  Loading, LoadingController, AlertController, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../../pages/login/login';
import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the SugerenciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sugerencias',
  templateUrl: 'sugerencias.html',
})
export class SugerenciasPage {

	data: any = {}; 			// Array para almacenar los valores de la sugerencia.
	loading: Loading;			// Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
	loadingPresented = false;	// Variable de tipo booleano para saber si el ProgressBar está o no ejecutandose.
	
	constructor(private loadingCtrl: LoadingController, private alertCtrl: AlertController, public restProvider: RestProvider, public navCtrl: NavController, public navParams: NavParams) {
	
	}

	setSugerencia(){
		this.showLoading();
		this.restProvider.setSugerencia(this.data).then(d => {
			if(typeof d != "undefined" &&  d['status'] == 1){
				this.showError("¡Bien!",d['data'], true);
			}else if(d.status == 401){				
				this.showError("¡Atención!","Se ha perdido la sesión, por favor vuelva a iniciar.");
				this.navCtrl.setRoot(LoginPage);
			}else{				
				this.showError("¡Atención!","<p>" + d['message'] + "<br/><br/>[Code: " + d['code'] + "]</p>");
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
			dismissOnPageChange: true
		});
		this.loading.present();
		this.loadingPresented = true;
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
	showError(title,text, redirect = false) {
		this.loading.dismiss();
		let alert = this.alertCtrl.create({
			title: title,
			subTitle: text,
			buttons: [{
					text: 'OK',
					role: 'OK',
					handler: () => {
						if(redirect) this.navCtrl.setRoot(HomePage);
					}
				}]
		});
		alert.present();
	}

}
