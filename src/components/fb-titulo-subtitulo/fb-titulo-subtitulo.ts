import { Component, Input } from '@angular/core';

/**
 * Generated class for the FbTituloSubtituloComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fb-titulo-subtitulo',
  templateUrl: 'fb-titulo-subtitulo.html'
})
export class FbTituloSubtituloComponent {

  	@Input('info') object;

	constructor() {
		
	}

}
