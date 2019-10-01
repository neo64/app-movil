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
import { TranslateService } from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: "page-faq-detail",
  templateUrl: "faq-detail.html"
})
export class FaqDetailPage {
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
    this.tituloSubtitulo.titulo =
      this.translate.instant("FAQ_DETAIL.TITULO") +
      this.capitalizeFirstLetter(this.navParams.get("categoria").toLowerCase());
    this.showLoading();
    this.getFaqDetail(this.navParams.get("categoria"));
    this.events.publish("user:logged");
  }

  /**
	* 	Función que pone la primera letra en mayuscula
	*
	* 	@param None
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None
	*/
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
	* 	Función que abre y cierra los cards
	*
	* 	@param None
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None
	*/
  expandItem(item) {
    this.faq.map(listItem => {
      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }

      return listItem;
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

  getFaqDetail(c) {
    this.restProvider
      .getFaqDetail(c)
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
          if (data["message"] === "Http failure response for (unknown url): 0 Unknown Error") {
            data["message"] =
              "Se ha producido un error de conexión. Por favor, disculpa las molestias e inténtalo de nuevo más tarde.";
          }
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
}
