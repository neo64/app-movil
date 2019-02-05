import { Component, ViewChild } from '@angular/core';
import { Tabs, Events, NavController, NavParams } from 'ionic-angular';

import { LoginInputPage } from '../../pages/login-input/login-input';
import { LoginRegistroPage } from '../../pages/login-registro/login-registro';
import { LoginPage } from '../../pages/login/login';


@IonicPage()
@Component({
  selector: 'page-login-tab',
  templateUrl: 'login-tab.html',
})
export class LoginTabPage {

	tabRegistro: any 	= LoginRegistroPage; 	// Página de registro
	tabLogin: any 		= LoginInputPage;		// Página de login
	pageDefault 		= 0;

	@ViewChild("myTab") tabs: Tabs;

	

	constructor(public events: Events,  public navCtrl: NavController, public navParams: NavParams) {
		events.subscribe("user:Unauthorized", () => {
			this.navCtrl.setRoot(LoginPage);
		});
		
		this.pageDefault = this.navParams.get("pageDefault");
	}	

}
