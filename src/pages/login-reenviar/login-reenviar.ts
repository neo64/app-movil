import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { LoginRecibirPinPage } from "../../pages/login-recibir-pin/login-recibir-pin";

// Para abrir la aplicación de llamadas nativa.
import { CallNumber } from "@ionic-native/call-number";
import { TranslateService } from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: "page-login-reenviar",
  templateUrl: "login-reenviar.html"
})
export class LoginReenviarPage {
  tituloSubtitulo = { titulo: "", subtitulo: "" };
  data = Array();
  bReenviar = {
    name: "Volver a enviar",
    svg: "",
    openPage: "PedirCita",
    class: "active login",
    tipo: "page",
    gradiente: ""
  };

  constructor(
    private callNumber: CallNumber,
    public navCtrl: NavController,
    public nav: NavParams,
    private translate: TranslateService
  ) {
    this.data = this.nav.get("data");
    3;
    this.tituloSubtitulo.titulo = this.translate.instant("LOGIN_REENVIAR.TITULO");
    this.tituloSubtitulo.subtitulo = this.translate.instant("LOGIN_REENVIAR.SUBTITULO");
  }

  reenviar() {
    this.navCtrl.push(LoginRecibirPinPage, { dni: this.data["dni"] });
  }

  /**
  *   Función que abre la aplicación de llamadas para
  * efectuar una llamada a la clínica
  *
  *   @author Jesús Río <jesusriobarrilero@gmail.com>
  *
  */
  callClinica() {
    this.callNumber
      .callNumber("+34917681812", true)
      .catch(err => console.log("Error launching dialer", err));
  }
}
