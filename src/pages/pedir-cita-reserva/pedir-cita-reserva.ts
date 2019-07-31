import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HomePage } from "../../pages/home/home";
import { ChatPage } from "../../pages/chat/chat";
import { TranslateService } from "@ngx-translate/core";

// Para aceptar HTML desde la API
import { DomSanitizer } from "@angular/platform-browser";

@IonicPage()
@Component({
  selector: "page-pedir-cita-reserva",
  templateUrl: "pedir-cita-reserva.html"
})
export class PedirCitaReservaPage {
  tituloSubtitulo = { titulo: "", subtitulo: "" };
  citasBuscador = [];
  bInicio = {
    name: "Volver a inicio",
    svg: "",
    openPage: "",
    class: "active login",
    tipo: "",
    gradiente: ""
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private domSanitizer: DomSanitizer,
    private translate: TranslateService
  ) {
    this.tituloSubtitulo.titulo = this.translate.instant("PEDIR_CITA_RESERVA.TITULO");
    this.tituloSubtitulo.subtitulo = this.translate.instant("PEDIR_CITA_RESERVA.SUBTITULO");
    this.citasBuscador.push(this.navParams.get("item"));
  }

  inicio() {
    this.navCtrl.setRoot(HomePage);
  }

  openPage(page) {
    if (page == "chat") this.navCtrl.push(ChatPage);
  }
}
