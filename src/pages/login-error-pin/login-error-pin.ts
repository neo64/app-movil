import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";

// Para abrir la aplicación de llamadas nativa.
import { CallNumber } from "@ionic-native/call-number";

@IonicPage()
@Component({
  selector: "page-login-error-pin",
  templateUrl: "login-error-pin.html"
})
export class LoginErrorPinPage {
  tituloSubtitulo = { titulo: "", subtitulo: "" };
  bLLamar = {
    name: "Llamar a Ferrus & Bratos",
    svg: "",
    openPage: "PedirCita",
    class: "active login",
    tipo: "page",
    gradiente: ""
  };

  constructor(
    private callNumber: CallNumber,
    public navCtrl: NavController,
    public navParams: NavParams,
    private translate: TranslateService
  ) {
    this.tituloSubtitulo.titulo = this.translate.instant("LOGIN_ERROR_PIN.TITULO");
    this.tituloSubtitulo.subtitulo = this.translate.instant("LOGIN_ERROR_PIN.SUBTITULO");
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
