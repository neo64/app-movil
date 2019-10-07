import { Component } from "@angular/core";
import {
  IonicPage,
  App,
  NavController,
  Loading,
  LoadingController,
  AlertController,
  Events,
  PopoverController
} from "ionic-angular";
import { RestProvider } from "../../providers/rest/rest";
import { LoginPage } from "../../pages/login/login";
import { PedirCitaPage } from "../../pages/pedir-cita/pedir-cita";
import { Calendar } from "@ionic-native/calendar";
import { PopoverPage } from "../../pages/popover/popover";
import { DomSanitizer } from "@angular/platform-browser";
import { TranslateService } from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: "page-recall",
  templateUrl: "recall.html"
})
export class RecallPage {
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
    private calendar: Calendar,
    public popoverCtrl: PopoverController,
    public events: Events,
    public restProvider: RestProvider,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    private translate: TranslateService
  ) {
    this.showLoading();
    this.getRecall();
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
	* 	Función que añade al calendario una cita.
	*
	* 	@param None
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None
	*/
  addEvent(timestampINI, timestampFIN) {
    this.showLoading(this.translate.instant("RECALL.ANADIR_CALENDARIO"));

    let dateINI = new Date(parseInt(timestampINI));
    let dateFIN = new Date(parseInt(timestampFIN));
    let titulo = "Cita en clínica dental Ferrus & Bratos";
    let direccion = "C/ Caleruega 67 3ª Planta. 28033 Madrid";

    let options = {
      calendarId: 1,
      calendarName: "Clínica Ferrus & Bratos",
      url: "http://clinicaferrusbratos.com",
      firstReminderMinutes: 15
    };

    this.calendar
      .createEventInteractivelyWithOptions(titulo, direccion, "", dateINI, dateFIN, options)
      .then(
        res => {
          this.loading.dismiss();
        },
        err => {
          this.loading.dismiss();
        }
      );
  }

  /**
	* 	Función que muestra un pop-up para gestionar la cita.
	*
	* 	@param None
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None
	*/
  presentPopover(myEvent, fecha, hora) {
    let popover = this.popoverCtrl.create(PopoverPage, { fecha: fecha, hora: hora });
    popover.present({
      ev: myEvent
    });
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
  presentConfirm(action, fechaDecimal, horaDecimal) {
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
            this.gestionarCita(action, fechaDecimal, horaDecimal);
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
  gestionarCita(tipo, fechaDecimal, horaDecimal) {
    var textoAlert = "";

    if (tipo == "anular") textoAlert = this.translate.instant("POPOVER.ANULADO");
    else if (tipo == "cambiar") textoAlert = this.translate.instant("POPOVER.CAMBIAR");
    else if (tipo == "confirmar") textoAlert = this.translate.instant("POPOVER.CONFIRMADO");

    this.restProvider
      .gestionarCita(tipo, fechaDecimal, horaDecimal)
      .then(data => {
        if (typeof data != "undefined" && data["status"] == 1) {
          this.showError("Información", textoAlert);
        } else if (data.status == 401) {
          this.showError(
            this.translate.instant("GENERICAS.ATENCION"),
            this.translate.instant("GENERICAS.ERROR_SIN_SESION")
          );
          this.events.publish("user:Unauthorized");
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
	* 	Función que obtiene las higienes y recall
	*	del paciente
	*
	* 	@param None
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None
	*/

  getRecall() {
    this.restProvider
      .getRecall()
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
