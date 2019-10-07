import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  App,
  Events,
  LoadingController,
  AlertController,
  Loading
} from "ionic-angular";
import { RestProvider } from "../../providers/rest/rest";
import { LoginPage } from "../../pages/login/login";
import { PedirCitaPage } from "../../pages/pedir-cita/pedir-cita";
import { DomSanitizer } from "@angular/platform-browser";
import { TranslateService } from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: "page-recall-pasadas",
  templateUrl: "recall-pasadas.html"
})
export class RecallPasadasPage {
  loading: Loading; // Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
  recall = Array();
  infoR = { fechaFutura: false };
  botonPedirCita = {
    name: "PEDIR CITA DE HIGIENE",
    svg: "citas",
    openPage: "PedirCita",
    tipo: "page",
    gradiente: "",
    class: "active"
  };

  constructor(
    private app: App,
    private domSanitizer: DomSanitizer,
    public events: Events,
    public restProvider: RestProvider,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    private translate: TranslateService
  ) {
    this.showLoading();
    this.getRecallPasadas();
    this.events.publish("user:logged");
  }

  openPage(page, tipo) {
    if (tipo == "page") {
      if (page == "PedirCita") this.app.getRootNav().push(PedirCitaPage);
    } else if (tipo == "web") {
      window.open(page, "_system", "location=yes");
    }
  }

  /**
	* 	Función que obtiene las higienes y recall
	*	del paciente
	*
	* 	@param None
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None
	*/

  getRecallPasadas() {
    this.restProvider
      .getRecallPasadas()
      .then(data => {
        if (typeof data != "undefined" && data["status"] == 1) {
          this.recall = data["data"]["data"];
          this.infoR = data["data"];
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
          console.log(data["message"]);
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

  showLoading(txt = "Cargando información...") {
    this.loading = this.loadingCtrl.create({
      content: txt,
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
}
