import { Component, ViewChild } from '@angular/core';
import { Tabs, Events, NavController } from 'ionic-angular';

import { ConsultarCitas } from '../../pages/ConsultarCitas/ConsultarCitas';
import { ConsultarCitasFuturasPage } from '../../pages/consultar-citas-futuras/consultar-citas-futuras';
import { LoginPage } from '../../pages/login/login';
import { ChatPage } from '../../pages/chat/chat';

@IonicPage()
@Component({
	selector: 'tabConsultarCitas',
	templateUrl: 'tabConsultarCitas.html',
})
export class TabConsultarCitas {
	
	tabFuturas: any 	= ConsultarCitasFuturasPage; 	// Página de citas futuras
	tabAnteriores: any 	= ConsultarCitas;				// Página de citas pasadas
	
	@ViewChild("myTab") tabs: Tabs;

	constructor(public events: Events,  public navCtrl: NavController,) {
		events.subscribe("user:Unauthorized", () => {
			this.navCtrl.setRoot(LoginPage);
		});
	}	
	openPage(page,) {
		if(page=="chat")
			this.navCtrl.push(ChatPage);
	}	
 }