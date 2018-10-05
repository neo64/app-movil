import { Component, ViewChild } from '@angular/core';
import { Tabs, Events, NavController } from 'ionic-angular';
import { ConsultarCitas } from '../../pages/ConsultarCitas/ConsultarCitas';
import { ConsultarCitasFuturasPage } from '../../pages/consultar-citas-futuras/consultar-citas-futuras';
import { LoginPage } from '../../pages/login/login';

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
	
	/**
	* 	Función que obtiene en que dirección se ha movido
	*	el dedo para seleccionar una Tab u otra.
	*
	* 	@param None
	* 
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None 
	*/ 
	swipe(event) {
		if(event.direction === 2) {
			this.tabs.select(1);			
		}
		 if(event.direction === 4) {
			this.tabs.select(0);
		}
	}	
		  
 }
