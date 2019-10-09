import { Component } from "@angular/core";
import {
  IonicPage,
  Platform,
  NavController,
  NavParams,
  Events,
  Loading,
  LoadingController,
  AlertController
} from "ionic-angular";

import { RestProvider } from "../../providers/rest/rest";

import { LoginErrorPinPage } from "../../pages/login-error-pin/login-error-pin";
import { LoginPage } from "../../pages/login/login";
import { LoginYaRegistradoPage } from "../../pages/login-ya-registrado/login-ya-registrado";
import { LoginReenviarPage } from "../../pages/login-reenviar/login-reenviar";

import { ChangePasswordPage } from "../../pages/change-password/change-password";
import { TranslateService } from "@ngx-translate/core";

declare var SMS: any;

@IonicPage()
@Component({
  selector: "page-login-recibir-pin",
  templateUrl: "login-recibir-pin.html"
})
export class LoginRecibirPinPage {
  loading: Loading;
  registerCredentials = { digitos: "" }; // Array con los campos del formulario
  data = Array();
  bCrear = {
    name: "Siguiente",
    svg: "",
    openPage: "PedirCita",
    class: "active login",
    tipo: "page",
    gradiente: ""
  };
  interval: any;
  tituloSubtitulo = { titulo: "", subtitulo: "" };

  constructor(
    public platform: Platform,
    public events: Events,
    public navCtrl: NavController,
    public nav: NavParams,
    public restProvider: RestProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private translate: TranslateService
  ) {
    this.enviarPIN(this.nav.get("dni"));
    this.tituloSubtitulo.titulo = this.translate.instant("LOGIN_RECIBIR_PIN.TITULO");
    this.tituloSubtitulo.subtitulo = this.translate.instant("LOGIN_RECIBIR_PIN.SUBTITULO");
  }

  /** Comento la funcionalidad de leer SMS automaticamente por problemas de permisos y la aprobacion de la app por parte de Google
  ReadListSMS() {
    let filter = {
      box: "inbox", // 'inbox' (default), 'sent', 'draft'
      indexFrom: 0, // start from index 0
      maxCount: 10, // count of SMS to return each time
      address: "Clinica F&B",
      body: "verificacion"
    };

    if (SMS) {
      SMS.listSMS(
        filter,
        ListSms => {
          this.detectCode(ListSms);
        },
        error => {
          console.log("error list sms: " + error);
        }
      );
    }
  }*/

  detectCode(ListSms) {
    for (let data of ListSms) {
      var pin = data.body.substr(data.body.indexOf(": ") + 2, 6);
      this.checkPIN(this.nav.get("dni"), pin, true);
    }
  }

  checkPIN(dni, pin, auto = false) {
    if (!pin) pin = this.registerCredentials.digitos;

    this.restProvider.checkPIN(dni, pin).then(d => {
      if (typeof d != "undefined" && d["status"] == 1) {
        console.log(d);

        this.registerCredentials.digitos = pin;
        this.showLoading(true);
        clearInterval(this.interval);

        window.localStorage.setItem("idPac", d["data"]["idPac"]);
        window.localStorage.setItem("token", d["data"]["token"]);
        window.localStorage.setItem("expires", d["data"]["expires"]);

        this.events.publish("user:logged");

        this.navCtrl.push(ChangePasswordPage, {
          first: true
        });
      } else if (typeof d != "undefined" && d["status"] == 2) {
        if (!auto)
          this.showError(
            this.translate.instant("GENERICAS.ERROR") + d["code"],
            this.translate.instant("LOGIN_RECIBIR_PIN.ERROR_CODIGO")
          );
      } else {
        if (typeof d["code"] != "undefined" && !auto)
          this.showError(
            this.translate.instant("GENERICAS.ERROR") + d["code"],
            this.translate.instant("GENERICAS.ACCESO_DENEGADO")
          );
        else if (!auto)
          this.showError(
            this.translate.instant("GENERICAS.ERROR"),
            this.translate.instant("GENERICAS.ACCESO_DENEGADO")
          );
      }
    });
  }

  reEnviarPIN() {
    this.navCtrl.push(LoginReenviarPage, { data: this.data });
  }

  enviarPIN(dni) {
    this.showLoading();

    this.restProvider.sendPIN(dni).then(d => {
      console.log(d);
      if (typeof d != "undefined" && d["status"] == 1) {
        this.data = d["data"];
        this.loading.dismiss();

        /*this.ReadListSMS();
        this.interval = setInterval(() => {
          this.ReadListSMS();
        }, 3000);*/
      } else if (typeof d != "undefined" && d["status"] == 2) {
        this.navCtrl.push(LoginErrorPinPage).then(() => {
          const startIndex = this.navCtrl.getActive().index - 1;
          this.navCtrl.remove(startIndex);
        });
        this.loading.dismiss();
      } else if (typeof d != "undefined" && d["status"] == 3) {
        this.navCtrl.push(LoginYaRegistradoPage, { dni: this.nav.get("dni") }).then(() => {
          const startIndex = this.navCtrl.getActive().index - 1;
          this.navCtrl.remove(startIndex);
        });
        this.loading.dismiss();
      } else if (typeof d != "undefined" && d["status"] == 4) {
        //Si el nº de pins se ha superado
        this.data = d["data"];
        /*this.navCtrl.push(LoginPage).then(() => {
          const startIndex = this.navCtrl.getActive().index - 1;
          this.navCtrl.remove(startIndex);
        });*/
        this.showError(
          this.translate.instant("GENERICAS.ERROR") + d["code"],
          this.translate.instant("LOGIN_RECIBIR_PIN.ERROR_PIN")
        );
        this.loading.dismiss();
      } else {
        if (typeof d["code"] != "undefined")
          this.showError(
            this.translate.instant("GENERICAS.ERROR") + d["code"],
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
   * 	Función que muestra el ProgressBar cuando alguna acción
   *	se está ejecutando en primer plano.
   *
   * 	@param None
   *
   * 	@author Jesús Río <jesusriobarrilero@gmail.com>
   * 	@return None
   */

  showLoading(dismiss = false) {
    this.loading = this.loadingCtrl.create({
      content: this.translate.instant("GENERICAS.CARGANDO_INFORMACION"),
      dismissOnPageChange: dismiss
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
