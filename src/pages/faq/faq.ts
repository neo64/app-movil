import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  Loading,
  AlertController,
  LoadingController,
  NavParams,
  Events
} from "ionic-angular";

import { RestProvider } from "../../providers/rest/rest";
import { LoginPage } from "../../pages/login/login";
import { FaqDetailPage } from "../../pages/faq-detail/faq-detail";
import { ChatPage } from "../../pages/chat/chat";
import { TranslateService } from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: "page-faq",
  templateUrl: "faq.html"
})
export class FaqPage {
  tituloSubtitulo = { titulo: "", subtitulo: "" };
  faq = [];
  loading: Loading; // Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.

  constructor(
    private alertCtrl: AlertController,
    public events: Events,
    private loadingCtrl: LoadingController,
    public restProvider: RestProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    private translate: TranslateService
  ) {
    this.showLoading();
    this.getFaq();
    this.events.publish("user:logged");
    this.tituloSubtitulo.titulo = this.translate.instant("FAQ.TITULO");
    this.tituloSubtitulo.subtitulo = this.translate.instant("FAQ.SUBTITULO");
  }

  /**
	* 	Función que envia los parámetros a
	*	la página que muestra las preguntas de cada categoria
	*
	* 	@param None
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None
	*/

  siguiente(f) {
    this.navCtrl.push(FaqDetailPage, {
      categoria: f.name
    });
  }

  /**
	* 	Función que obtiene todos las categorias
	* 	de las preguntas frecuentes.
	*
	* 	@param None
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None
	*/

  getFaq() {
    this.restProvider
      .getFaq()
      .then(data => {
        if (typeof data != "undefined" && data["status"] == 1) {
          this.faq = data["data"];
          this.loading.dismiss();
        } else if (data.status == 401) {
          this.showError(
            this.translate.instant("GENERICAS.ATENCION"),
            this.translate.instant("GENERICAS.ERROR_SIN_SESION")
          );
          this.navCtrl.setRoot(LoginPage);
        } else {
          this.showError(
            this.translate.instant("GENERICAS.ATENCION"),
            "<p>" + data["message"] + "<br/><br/>[Code: " + data["code"] + "]</p>"
          );
        }
      })
      .catch(e => {
        this.loading.dismiss();
        console.log(e);
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

  showLoading(cont = "Cargando información...") {
    this.loading = this.loadingCtrl.create({
      content: cont
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
      message: text,
      buttons: ["OK"]
    });
    alert.present();
  }

  openPage(page) {
    if (page == "chat") this.navCtrl.push(ChatPage);
  }
}
