import { Component } from "@angular/core";
import {
  App,
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  LoadingController,
  Loading
} from "ionic-angular";

import { RestProvider } from "../../providers/rest/rest";

import { LoginRecibirPinPage } from "../../pages/login-recibir-pin/login-recibir-pin";
import { LoginErrorPinPage } from "../../pages/login-error-pin/login-error-pin";
import { TranslateService } from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: "page-login-olvido",
  templateUrl: "login-olvido.html"
})
export class LoginOlvidoPage {
  loading: Loading;
  tituloSubtitulo = { titulo: "", subtitulo: "" };
  bCrear = {
    name: "Siguiente",
    svg: "",
    openPage: "PedirCita",
    class: "active login",
    tipo: "page",
    gradiente: ""
  };
  registerCredentials = { dni: "" }; // Array con los campos del formulario

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restProvider: RestProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private translate: TranslateService
  ) {
    this.tituloSubtitulo.titulo = this.translate.instant("LOGIN_OLVIDO.TITULO");
    this.tituloSubtitulo.subtitulo = this.translate.instant("LOGIN_OLVIDO.SUBTITULO");
  }

  siguiente() {
    var dni = this.registerCredentials.dni;

    if (dni == "") {
      alert(this.translate.instant("LOGIN_OLVIDO.RELLENAR_DNI"));
      return;
    }

    this.showLoading();
    this.restProvider.checkDNI(dni).then(data => {
      if (typeof data != "undefined" && (data["status"] == 1 || data["status"] == 3)) {
        this.navCtrl.push(LoginRecibirPinPage, { dni: dni });
        this.loading.dismiss();
      } else if (typeof data != "undefined" && data["status"] == 2) {
        this.navCtrl.push(LoginErrorPinPage);
        this.loading.dismiss();
      } else {
        if (typeof data["code"] != "undefined")
          this.showError(
            this.translate.instant("GENERICAS.ERROR") + data["code"],
            this.translate.instant("GENERICAS.ACCESO_DENEGADO")
          );
        else
          this.showError(
            this.translate.instant("GENERICAS.ERROR"),
            this.translate.instant("GENERICAS.ACCESO_DENEGADO")
          );
      }
    });
  }

  /**
   * 	Funci??n que muestra el ProgressBar cuando alguna acci??n
   *	se est?? ejecutando en primer plano.
   *
   * 	@param None
   *
   * 	@author Jes??s R??o <jesusriobarrilero@gmail.com>
   * 	@return None
   */

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: this.translate.instant("GENERICAS.CARGANDO_INFORMACION"),
      dismissOnPageChange: false
    });
    this.loading.present();
  }

  /**
   * 	Funci??n que muestra una alerta con el titulo
   *	y el texto pasado por par??metro.
   *
   * 	@param String Titulo de la alerta.
   * 	@param String Texto de la alerta.
   *
   * 	@author Jes??s R??o <jesusriobarrilero@gmail.com>
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
