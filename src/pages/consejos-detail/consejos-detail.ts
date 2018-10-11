import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-consejos-detail',
  templateUrl: 'consejos-detail.html',
})
export class ConsejosDetailPage {

	data = Array();
	constructor(private domSanitizer: DomSanitizer, public navCtrl: NavController, public navParams: NavParams) {
		this.data = navParams.get('data');
	}

}
