import { Component, Input } from '@angular/core';

/**
 * Generated class for the FbButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'fb-button',
  templateUrl: 'fb-button.html'
})
export class FbButtonComponent {

  @Input('name') name; 

  constructor() {

  }

}
