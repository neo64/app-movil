import { Component } from "@angular/core";
import {
  App,
  IonicPage,
  NavController,
  NavParams,
  Events,
  Loading,
  LoadingController,
  AlertController,
  Platform
} from "ionic-angular";

import { RestProvider } from "../../providers/rest/rest";

import { HomePage } from "../../pages/home/home";

import { LoginOlvidoPage } from "../../pages/login-olvido/login-olvido";
import { FCM } from "@ionic-native/fcm";
import { TranslateService } from "@ngx-translate/core";

/**
 * Generated class for the LoginInputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login-input",
  templateUrl: "login-input.html"
})
export class LoginInputPage {
  loading: Loading;
  tituloSubtitulo = { titulo: "", subtitulo: "" };
  bIniciar = {
    name: "Iniciar sesión",
    svg: "",
    openPage: "PedirCita",
    class: "active login",
    tipo: "page",
    gradiente: ""
  };
  registerCredentials = { email: "", password: "" }; // Array con los campos del formulario

  constructor(
    public platform: Platform,
    private fcm: FCM,
    private app: App,
    public events: Events,
    public nav: NavController,
    public navParams: NavParams,
    public restProvider: RestProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private translate: TranslateService
  ) {
    this.tituloSubtitulo.titulo = this.translate.instant("LOGIN_INPUT.TITULO");
    this.tituloSubtitulo.subtitulo = this.translate.instant("LOGIN_INPUT.SUBTITULO");
  }

  goToOlvido() {
    this.app.getRootNav().push(LoginOlvidoPage);
  }

  goTab(n) {
    this.nav.parent.select(n);
  }

  /**
     * 	Función que almacena el token de Firebase para las notificaciones.
     *
     * 	@param None
     *
     * 	@author Jesús Río <jesusriobarrilero@gmail.com>
     * 	@return None
     */
  enviarTokenNotifications(token) {
    this.restProvider.enviarTokenNotifications(token).then(data => {
      if (typeof data != "undefined" && data["status"] == 1) {
      } else if (data.status == 401) {
      } else {
        this.showError(this.translate.instant("GENERICAS.ERROR"), data["message"]);
      }
    });
  }

  /**
	* 	Función que comprueba si el usuario y la contraseña
	*	son correctos.
	*
	* 	@param None
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None
	*/

  login() {
    var user = this.registerCredentials.email;
    var pass = this.registerCredentials.password;

    if (user == "" || pass == "") return;

    this.showLoading();
    this.restProvider.login(user, pass).then(data => {
      if (typeof data != "undefined" && data["status"] == 1) {
        this.loading.dismiss();

        window.localStorage.setItem("idPac", data["idPac"]);
        window.localStorage.setItem("token", data["token"]);
        window.localStorage.setItem("expires", data["expires"]);

        this.events.publish("user:logged");

        //Notifications
        if (this.platform.is("cordova")) {
          this.fcm.getToken().then(token => {
            //alert(token);
            //Compruebo si el token esta en la bbdd y si no lo guarda
            this.enviarTokenNotifications(token);
          });
          this.fcm.onTokenRefresh().subscribe(token => {
            this.enviarTokenNotifications(token);
          });
        }

        this.app.getRootNav().setRoot(HomePage);
      } else {
        if (typeof data["code"] != "undefined")
          this.showError(
            this.translate.instant("GENERICAS.ERROR") + data["code"],
            this.translate.instant("LOGIN_INPUT.ACCESO_DENEGADO")
          );
        else
          this.showError(
            this.translate.instant("GENERICAS.ERROR"),
            this.translate.instant("LOGIN_INPUT.ACCESO_DENEGADO")
          );
      }
    });
  }

  /**
	* 	Función que muestra el ProgressBar cuando alguna acción
	*	se está ejecutando en primer plano.
	*
	* 	@param None
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None
	*/

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: this.translate.instant("GENERICAS.CARGANDO_INFORMACION"),
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  /**
	* 	Función que muestra una alerta con el titulo
	*	y el texto pasado por parámetro.
	*
	* 	@param String Titulo de la alerta.
	* 	@param String Texto de la alerta.
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	*
	*/
  showError(title, text) {
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: ["OK"]
    });
    alert.present();
  }
}
