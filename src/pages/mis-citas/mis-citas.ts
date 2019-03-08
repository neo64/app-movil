import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabConsultarCitas } from '../tabConsultarCitas/tabConsultarCitas';
import { PedirCitaPage } from '../pedir-cita/pedir-cita';
import { RecallPage } from '../../pages/recall/recall';
import { ChatPage } from '../../pages/chat/chat';

/**
 * Generated class for the MisCitasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mis-citas',
  templateUrl: 'mis-citas.html',
})
export class MisCitasPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	
	}

	openPage(page,) {
		if(page == "citas")
			this.navCtrl.push(TabConsultarCitas);
		else if(page == "pedirCita")
			this.navCtrl.push(PedirCitaPage);
		else if(page=="chat")
			this.navCtrl.push(ChatPage);
		else
			this.navCtrl.push(RecallPage);
	}

}
