import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


/**
 * Generated class for the FbButtonIconComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fb-button-icon',
  templateUrl: 'fb-button-icon.html'
})
export class FbButtonIconComponent {

  	@Input('name') name; 
  	svg: any;

	constructor(private domSanitizer: DomSanitizer) {

	}

	

	

}
