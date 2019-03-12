import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';


/**
 * Generated class for the ComollegarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comollegar',
  templateUrl: 'comollegar.html',
})
export class ComollegarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private launchNavigator: LaunchNavigator) {
  	this.start="";
  	this.destination = "Caleruega 67, Madrid, ES";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComollegarPage');
  }



	navigate(){
	    let options: LaunchNavigatorOptions = {
	      start: this.start
	    };

	    this.launchNavigator.navigate(this.destination, options)
	        .then(
	            success => alert('Launched navigator'),
	            error => alert('Error launching navigator: ' + error)
	    );
	  }

}
