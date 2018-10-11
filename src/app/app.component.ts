import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RestProvider } from '../providers/rest/rest';

import { HomePage } from '../pages/home/home';
import { MiSaludPage } from '../pages/mi-salud/mi-salud';
import { TabConsultarCitas } from '../pages/tabConsultarCitas/tabConsultarCitas';
import { PedirCitaPage } from '../pages/pedir-cita/pedir-cita';
import { LoginPage } from '../pages/login/login';
import { ChatPage } from '../pages/chat/chat';
import { ProfilePage } from '../pages/profile/profile';
import { DocFirmadosPage } from '../pages/doc-firmados/doc-firmados';
//import { AccesoResultadosPage } from '../pages/acceso-resultados/acceso-resultados';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { ConsejosPersonalizadosPage } from '../pages/consejos-personalizados/consejos-personalizados';

import * as firebase from 'firebase/app';
import { FCM } from '@ionic-native/fcm';

const config = {
  apiKey: 'AIzaSyB5bclgiYwByWq8RVdei__gRO6PSKs2mWo',
  authDomain: '785325583727-viu7ei21dmm7svdg0umpbnp851hlt4lr.apps.googleusercontent.com',
  databaseURL: 'fbapp-8a8e5.firebaseio.com',
  projectId: 'fbapp-8a8e5',
  storageBucket: 'fbapp-8a8e5.appspot.com',
};


@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  @ViewChild(Nav) nav: Nav;

	rootPage: any = LoginPage;  
	pages: 	Array<{title: string, icon: string, color: string, component: any}>;
	menuData = new Array();

	constructor(private alertCtrl: AlertController, private fcm: FCM, public events: Events, public platform: Platform, public restProvider: RestProvider, public statusBar: StatusBar, public splashScreen: SplashScreen) {
		this.initializeApp();		
	
		// used for an example of ngFor and navigation
		this.pages = [
		  { title: 'Inicio', icon: 'fa fa-home', color: 'primary', component: HomePage },
		  { title: 'Mi salud', icon: 'fas fa-heartbeat', color: 'primary', component: MiSaludPage },
		  { title: 'Perfil', icon: 'fas fa-user', color: 'primary', component: ProfilePage },
		  { title: 'Cambiar contraseña', icon: 'fas fa-unlock-alt', color: 'primary', component: ChangePasswordPage },
		  { title: 'Consultar citas',  icon: 'far fa-calendar-alt', color: 'primary', component: TabConsultarCitas },
		  { title: 'Pedir cita',  icon: 'far fa-calendar-alt', color: 'primary', component: PedirCitaPage },
		  { title: 'Chat',  icon: 'fas fa-comments', color: 'primary', component: ChatPage },
		  { title: 'Documentos administrativos',  icon: 'fas fa-signature', color: 'primary', component: DocFirmadosPage },
		  //{ title: 'Pruebas diagnosticas',  icon: 'far fa-list-alt', color: 'primary', component: AccesoResultadosPage }
		];	
  }

	initializeApp() {
		this.platform.ready().then(() => {
			//Notifications
			if (this.platform.is('cordova')) {
				this.fcm.subscribeToTopic('all');
				this.fcm.getToken().then(token=>{
					this.enviarTokenNotifications(token);
				})
				this.fcm.onNotification().subscribe(data=>{
					if(data.wasTapped){
						setTimeout( () => { this.openPageStrig(data.click_action, true); }, 100 );		
					} else {
						if(data.showDialog == "true")
							this.showError(data.title, data.subTitle, data.textButton, data.click_action);
					};
				})
				this.fcm.onTokenRefresh().subscribe(token=>{
					this.enviarTokenNotifications(token);
				});
				//end notifications.
			}
			
			this.events.subscribe("user:logged", () => {				
				this.getDataMenu();
			});     
		});
		firebase.initializeApp(config);
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
	showError(title, text, textButton, page) {		
		let alert = this.alertCtrl.create({
		title: title,
		subTitle: text,
		buttons: 
			[
				{
					text: 'Cancelar',
					role: 'Cancelar',
					handler: () => {
					}
				},
				{
					text: textButton,
					role: textButton,
					handler: () => {
						setTimeout( () => { this.openPageStrig(page, false); }, 500 );		
					}
				}
			]
	});
	alert.present();
}
	/**
	* 	Función que almacena el token de Firebase para las notificaciones.
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/
	enviarTokenNotifications(token){		
		this.restProvider.enviarTokenNotifications(token).then(data => {
			if(typeof data != "undefined" && data['status'] == 1){
				
			}else if(data.status == 401){
					
			}else{
				this.showErrorAPI("ERROR",data['message']);
			}					
		});				
	}
		
	/**
	* 	Función que muestra el header del menú lateral
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/ 
	getDataMenu(){				
		this.restProvider.getMenuData().then(data => {
			if(typeof data != "undefined" && data['status'] == 1){
				
				this.menuData 				= data['data'];
				this.menuData["inicial"] 	= data['data']["apellidos"].charAt(0);
				
				if(data['data']["sexo"] == "H"){
					this.menuData["color"] = "81a7d4";
				}else{
					this.menuData["color"] = "f1a6c7";
				}	
				
				window.localStorage.setItem("urlPerfil", "https://ui-avatars.com/api/?name="+ this.menuData["nombre"] + " " + this.menuData["inicial"] + " &size=256&rounded=true&background=" + this.menuData["color"] + "&font-size=0.33&color=fff");	
			}					
		});		
	}
  
	/**
	* 	Función que abre una página
	*
	* 	@param Pagina	String Nombre de la página.
	* 	@param Tipo		Si es rootPage o no.
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/ 
	openPageStrig(page, tipo){
		if(tipo){
			if(page == "TabConsultarCitas")
				this.nav.setRoot(TabConsultarCitas);
			if(page == "ChatPage")
				this.nav.setRoot(ChatPage);
			if(page == "ConsejosPersonalizadosPage")
				this.nav.setRoot(ConsejosPersonalizadosPage);
		}else{
			if(page == "TabConsultarCitas")
				this.nav.push(TabConsultarCitas);
			if(page == "ChatPage")
				this.nav.push(ChatPage);
			if(page == "ConsejosPersonalizadosPage")
				this.nav.push(ConsejosPersonalizadosPage);
		}			  
	}

	/**
	* 	Función que abre una página, si es la Home, la envía
	*	como la página raiz.
	*
	* 	@param Pagina Page nombre de la página
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/ 
	openPage(page) {
		if(page.title == "Inicio")
			this.nav.setRoot(page.component);
		else
			this.nav.push(page.component);
	}
  
	/**
	* 	Función desloguea la aplicación y envía a LoginPage
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/ 
	clickLogout(){
		this.restProvider.logout();
		this.nav.setRoot(LoginPage);	
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
	showErrorAPI(title,text) {
		let alert = this.alertCtrl.create({
			title: title,
			subTitle: text,
			buttons: ['OK']
		});
		alert.present();
	}
  
}
