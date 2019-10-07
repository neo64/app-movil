import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  Events,
  LoadingController,
  AlertController,
  Loading,
  ToastController
} from "ionic-angular";
import { RestProvider } from "../../providers/rest/rest";
import { LoginPage } from "../../pages/login/login";
import { PlanEconomicoDetailPage } from "../../pages/plan-economico-detail/plan-economico-detail";
import { ChatPage } from "../../pages/chat/chat";
import { TranslateService } from "@ngx-translate/core";

/**
 * Generated class for the PlanEconomicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-plan-economico",
  templateUrl: "plan-economico.html"
})
export class PlanEconomicoPage {
  loading: Loading; // Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
  cards = new Array(); // Array donde se almacenan los objetos del tipo card descargados del servidor.
  showCardError = false;
  tituloSubtitulo = { titulo: "", subtitulo: "" };

  constructor(
    private toastCtrl: ToastController,
    public events: Events,
    public restProvider: RestProvider,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    private translate: TranslateService
  ) {
    this.showLoading();
    this.tituloSubtitulo.titulo = this.translate.instant("PLAN_ECONOMICO.TITULO");
    this.tituloSubtitulo.subtitulo = this.translate.instant("PLAN_ECONOMICO.SUBTITULO");
    this.getPlanEconomico();
    this.events.publish("user:logged");
  }

  /**
	* 	Función que abre una página
	*
	* 	@param Pagina Page nombre de la página
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None
	*/

  openPage(info) {
    if (info == "chat") this.navCtrl.push(ChatPage);
    else
      this.navCtrl.push(PlanEconomicoDetailPage, {
        data: info
      });
  }

  /**
	* 	Función que obtiene las tarjetas para la página
	*	de los planes económicos
	*
	* 	@param None
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None
	*/

  getPlanEconomico() {
    this.restProvider
      .getPlanEconomico()
      .then(data => {
        if (typeof data != "undefined" && data["status"] == 1) {
          if (typeof this.cards === "undefined" || this.cards.length <= 0) {
            this.showCardError = true;
          }

          for (var key in data["data"]) {
            this.cards.push(data["data"][key]);
            this.showCardError = false;
          }

          this.loading.dismiss();
        } else if (data.status == 401) {
          this.showError(
            this.translate.instant("GENERICAS.ATENCION"),
            this.translate.instant("GENERICAS.ERROR_SIN_SESION")
          );
          this.navCtrl.setRoot(LoginPage);
          //Bloqueado por muchas peticiones a la api
        } else if (data.status == 429) {
          this.showError(
            this.translate.instant("GENERICAS.ATENCION"),
            this.translate.instant("GENERICAS.EXCESO_PETICIONES")
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

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: this.translate.instant("GENERICAS.CARGANDO_INFORMACION"),
      dismissOnPageChange: false
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

  /**
	* 	Función que muestra un Toast con la información
	*	referente a la acción del usuario.
	*
	* 	@param String Titulo de la alerta.
	* 	@param String Texto de la alerta.
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	*
	*/
  presentToast(txt) {
    let toast = this.toastCtrl.create({
      message: txt,
      duration: 3000,
      position: "bottom",
      showCloseButton: true,
      closeButtonText: "OK"
    });
    toast.present();
  }
}
