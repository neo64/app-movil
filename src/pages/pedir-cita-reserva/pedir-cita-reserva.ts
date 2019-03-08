import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { ChatPage } from '../../pages/chat/chat';

// Para aceptar HTML desde la API
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-pedir-cita-reserva',
  templateUrl: 'pedir-cita-reserva.html',
})
export class PedirCitaReservaPage {

	tituloSubtitulo = {titulo : "Cita reservada", subtitulo: ""};
	citasBuscador 	= [];
	bInicio 		= {name : 'Volver a inicio', svg: '', openPage : '', class : 'active login', tipo : '', gradiente: ''};


  	constructor(public navCtrl: NavController, public navParams: NavParams, private domSanitizer: DomSanitizer) {
  		this.citasBuscador.push(this.navParams.get('item'));
  	}

  	inicio(){
  		this.navCtrl.setRoot(HomePage);
  	}
	
	openPage(page,) {

		if(page=="chat")
			this.navCtrl.push(ChatPage);

	}

}
