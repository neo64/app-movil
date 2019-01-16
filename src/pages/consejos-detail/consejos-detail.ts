import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-consejos-detail',
  templateUrl: 'consejos-detail.html',
})
export class ConsejosDetailPage {

	data 			= Array();
	tituloSubtitulo = Array();
	constructor(private domSanitizer: DomSanitizer, public navParams: NavParams) {
		
	}

	ionViewDidLoad() { 
		this.data = this.navParams.get('data');
		this.domSanitizer.bypassSecurityTrustUrl(this.data['Img']);
		this.tituloSubtitulo = [{titulo : this.data['Doctor'], subtitulo: this.data['Tratamiento']}];
	}
}
