import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, private launchNavigator: LaunchNavigator) {
  }

  ionViewDidLoad() {
    //Capturo la página anterior
    var PagePrevious = this.navCtrl.last();
    //Abro la App de navegación del dispositivo
    this.navigate();
    //Retorno a la página anterior
    this.navCtrl.pop(PagePrevious);
    console.log('ionViewDidLoad ComollegarPage');
  }

  navigate() {
    let options: LaunchNavigatorOptions = {
      start: "",
    };

    this.launchNavigator.navigate("Caleruega 102, Madrid, ES")
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator: ' + error)
      );
  }



}
