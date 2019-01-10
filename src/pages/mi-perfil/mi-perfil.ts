import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ChangePasswordPage } from '../change-password/change-password';

/**
 * Generated class for the MiPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mi-perfil',
  templateUrl: 'mi-perfil.html',
})
export class MiPerfilPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	openPage(page,) {
		if(page == "perfil")
			this.navCtrl.push(ProfilePage);
		else
			this.navCtrl.push(ChangePasswordPage);		
	}

}
