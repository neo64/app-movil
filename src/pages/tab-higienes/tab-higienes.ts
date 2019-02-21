import { Component, ViewChild } from '@angular/core';
import { Tabs, Events, NavController } from 'ionic-angular';

import { RecallPage } from '../../pages/recall/recall';
import { RecallPasadasPage } from '../../pages/recall-pasadas/recall-pasadas';
import { LoginPage } from '../../pages/login/login';
import { ChatPage } from '../../pages/chat/chat';

@IonicPage()
@Component({
  selector: 'page-tab-higienes',
  templateUrl: 'tab-higienes.html',
})
export class TabHigienesPage {

	tabFuturas: any 	= RecallPage; 			// Página de citas futuras
	tabAnteriores: any 	= RecallPasadasPage;	// Página de citas pasadas
	
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