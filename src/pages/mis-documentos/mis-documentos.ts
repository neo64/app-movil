import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocumentosContablesPage } from '../documentos-contables/documentos-contables';
import { PresupuestosPage } from '../presupuestos/presupuestos';
import { DocFirmadosPage } from '../doc-firmados/doc-firmados';
import { PlanEconomicoPage } from '../plan-economico/plan-economico';

/**
 * Generated class for the MisDocumentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mis-documentos',
  templateUrl: 'mis-documentos.html',
})
export class MisDocumentosPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	
	}

	openPage(page) {
		if(page == "contables")
			this.navCtrl.push(DocumentosContablesPage);
		else if(page == "presupuestos")
			this.navCtrl.push(PresupuestosPage);
		else if(page == "planEco")
			this.navCtrl.push(PlanEconomicoPage);
		else
			this.navCtrl.push(DocFirmadosPage);		
	}

}
