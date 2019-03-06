import { Component, ViewChild } from '@angular/core';
import { Tabs, Events, NavController, NavParams } from 'ionic-angular';

import { ConsultarCitas } from '../../pages/ConsultarCitas/ConsultarCitas';
import { ConsultarCitasFuturasPage } from '../../pages/consultar-citas-futuras/consultar-citas-futuras';
import { LoginPage } from '../../pages/login/login';

@IonicPage()
@Component({
	selector: 'tabConsultarCitas',
	templateUrl: 'tabConsultarCitas.html',
})
export class TabConsultarCitas {
	
	tabFuturas: any 	= ConsultarCitasFuturasPage; 	// Página de citas futuras
	tabAnteriores: any 	= ConsultarCitas;				// Página de citas pasadas
	activeCard 			= 0;

	@ViewChild("myTab") tabs: Tabs;

	constructor(public events: Events,  public navCtrl: NavController, public navParams: NavParams) {
		events.subscribe("user:Unauthorized", () => {
			this.navCtrl.setRoot(LoginPage);
		});

		this.activeCard = this.navParams.get('tab');
	}		  
 }