import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events, AlertController, Loading, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RestProvider } from '../providers/rest/rest';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

// Páginas del menú
import { MiSaludPage } from '../pages/mi-salud/mi-salud';
import { MiPerfilPage } from '../pages/mi-perfil/mi-perfil';
import { MisDocumentosPage } from '../pages/mis-documentos/mis-documentos';
import { MisCitasPage } from '../pages/mis-citas/mis-citas';
import { ChatPage } from '../pages/chat/chat';
import { SugerenciasPage } from '../pages/sugerencias/sugerencias';

// Páginas de navegación
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { ProfilePage } from '../pages/profile/profile';
import { TabConsultarCitas } from '../pages/tabConsultarCitas/tabConsultarCitas';
import { PedirCitaPage } from '../pages/pedir-cita/pedir-cita';
import { DocumentosContablesPage } from '../pages/documentos-contables/documentos-contables';
import { PresupuestosPage } from '../pages/presupuestos/presupuestos';
import { RecallPage } from '../pages/recall/recall';
import { ConsejosPersonalizadosPage } from '../pages/consejos-personalizados/consejos-personalizados';
import { InstruccionesPage } from '../pages/instrucciones/instrucciones';

import * as firebase from 'firebase';
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
	loading: 		Loading; 			// Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
	constructor(private alertCtrl: AlertController, private fcm: FCM, public events: Events, public platform: Platform, public restProvider: RestProvider, public statusBar: StatusBar, public splashScreen: SplashScreen, private loadingCtrl: LoadingController) {
		this.initializeApp();		
	
		// used for an example of ngFor and navigation
		this.pages = [
		  { title: 'Inicio', icon: 'fa fa-home', color: 'primary', component: HomePage },
		  { title: 'Mi salud', icon: 'fas fa-heartbeat', color: 'primary', component: MiSaludPage },
		  { title: 'Mis citas', icon: 'fas fa-calendar-alt', color: 'primary', component: MisCitasPage },
		  { title: 'Mis documentos',  icon: 'fas fa-file-alt', color: 'primary', component: MisDocumentosPage },
		  { title: 'Mi perfil', icon: 'fas fa-user', color: 'primary', component: MiPerfilPage },	  
		  { title: 'Chat',  icon: 'fas fa-comments', color: 'primary', component: ChatPage },
		  { title: 'Sugerencias',  icon: 'fas fa-thumbs-up', color: 'primary', component: SugerenciasPage }
		];	
  }

	initializeApp() {
		this.platform.ready().then(() => {
			
			this.events.subscribe("user:logged", () => {				
				this.getDataMenu();
			});
			
			//Notifications
			if (this.platform.is('cordova')) {
				this.fcm.subscribeToTopic('all');
				this.fcm.getToken().then(token=>{
					this.enviarTokenNotifications(token);
				})
				this.fcm.onNotification().subscribe(data=>{
					if(data.wasTapped){						
						setTimeout( () => {							
							this.openPageStrig(data.click_action, true); 
						}, 300 );		
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
			     
		});
		firebase.initializeApp(config);
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
			if(page == "MiSalud")
				this.nav.setRoot(MiSaludPage);
			else if(page == "MiPerfil")
				this.nav.setRoot(MiPerfilPage);
			else if(page == "MisDocumentos")
				this.nav.setRoot(MisDocumentosPage);
			else if(page == "MisCitas")
				this.nav.setRoot(MisCitasPage);
			else if(page == "Chat")
				this.nav.setRoot(ChatPage);
			else if(page == "Sugerencias")
				this.nav.setRoot(SugerenciasPage);	
			else if(page == "Higiene")
				this.nav.setRoot(RecallPage);	
			else if(page == "Perfil")
				this.nav.setRoot(ProfilePage);						
			else if(page == "Password")
				this.nav.setRoot(ChangePasswordPage);						
			else if(page == "DocContables")
				this.nav.setRoot(DocumentosContablesPage);						
			else if(page == "DocPresupuestos")
				this.nav.setRoot(PresupuestosPage);						
			else if(page == "Citas")
				this.nav.setRoot(TabConsultarCitas);						
			else if(page == "PedirCita")
				this.nav.setRoot(PedirCitaPage);
			else if(page == "ConsejosPersonalizados")
				this.nav.setRoot(ConsejosPersonalizadosPage);
			else if(page == "Instrucciones")
				this.nav.setRoot(InstruccionesPage);
		}else{
			if(page == "MiSalud")
				this.nav.push(MiSaludPage);
			else if(page == "MiPerfil")
				this.nav.push(MiPerfilPage);
			else if(page == "MisDocumentos")
				this.nav.push(MisDocumentosPage);
			else if(page == "MisCitas")
				this.nav.push(MisCitasPage);
			else if(page == "Chat")
				this.nav.push(ChatPage);
			else if(page == "Sugerencias")
				this.nav.push(SugerenciasPage);	
			else if(page == "Higiene")
				this.nav.push(RecallPage);	
			else if(page == "Perfil")
				this.nav.push(ProfilePage);						
			else if(page == "Password")
				this.nav.push(ChangePasswordPage);						
			else if(page == "DocContables")
				this.nav.push(DocumentosContablesPage);						
			else if(page == "DocPresupuestos")
				this.nav.push(PresupuestosPage);						
			else if(page == "Citas")
				this.nav.push(TabConsultarCitas);						
			else if(page == "PedirCita")
				this.nav.push(PedirCitaPage);
			else if(page == "ConsejosPersonalizados")
				this.nav.push(ConsejosPersonalizadosPage);
			else if(page == "Instrucciones")
				this.nav.push(InstruccionesPage);
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