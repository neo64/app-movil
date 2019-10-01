import { Component } from "@angular/core";
import {
  IonicPage,
  ViewController,
  NavParams,
  AlertController,
  Loading,
  LoadingController,
  NavController,
  Events
} from "ionic-angular";
import { RestProvider } from "../../providers/rest/rest";
import { LoginPage } from "../../pages/login/login";
import { TranslateService } from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: "page-popover",
  templateUrl: "popover.html"
})
export class PopoverPage {
  loading: Loading; // Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
  fecha = ""; // Fecha que será obtenida por parámetro
  hora = ""; // Hora que será obtenida por parámetro

  constructor(
    public events: Events,
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    public restProvider: RestProvider,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private translate: TranslateService
  ) {
    this.fecha = this.navParams.get("fecha");
    this.hora = this.navParams.get("hora");
    this.events.publish("user:logged");
  }

  /**
	* 	Función que muestra una alerta para confirmar o
	*	anular la acción requerida.
	*
	* 	@param String Accion de gestión de la cita (Anulada, Cambio o Confirmada)
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	*
	*/
  presentConfirm(action) {
    let alert = this.alertCtrl.create({
      title: this.translate.instant("POPOVER.CONFIRMACION_REQUERIDA"),
      message:
        this.translate.instant("POPOVER.QUIERES") +
        action +
        this.translate.instant("POPOVER.LA_CITA"),
      buttons: [
        { text: "CANCELAR", role: "cancel" },
        {
          text: action,
          handler: () => {
            this.showLoading(this.translate.instant("POPOVER.GESTIONANDO_CITA"));
            this.gestionarCita(action);
          }
        }
      ]
    });
    alert.present();
  }

  /**
	* 	Función que muestra gestiona la cita haciendo
	*	uso de la API del sistema
	*
	* 	@param String Tipo de gestión de la cita (Anulada, Cambio o Confirmada)
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	*
	*/
  gestionarCita(tipo) {
    this.viewCtrl.dismiss(); // Para cerrar el popup
    var textoAlert = "";

    if (tipo == "anular") textoAlert = this.translate.instant("POPOVER.ANULADO");
    else if (tipo == "cambiar") textoAlert = this.translate.instant("POPOVER.CAMBIAR");
    else if (tipo == "confirmar") textoAlert = this.translate.instant("POPOVER.CONFIRMADO");

    this.restProvider
      .gestionarCita(tipo, this.fecha, this.hora)
      .then(data => {
        if (typeof data != "undefined" && data["status"] == 1) {
          this.showError("Información", textoAlert);
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
        this.showError(
          this.translate.instant("GENERICAS.ERROR"),
          this.translate.instant("POPOVER.ERROR_CITA")
        );
      });
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
}
