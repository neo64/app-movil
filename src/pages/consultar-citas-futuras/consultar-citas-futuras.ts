import { Component, ViewChild } from "@angular/core";
import {
  App,
  NavController,
  Loading,
  ToastController,
  NavParams,
  LoadingController,
  Platform,
  PopoverController,
  AlertController,
  Events,
  Slides
} from "ionic-angular";
import { RestProvider } from "../../providers/rest/rest";
import { PopoverPage } from "../../pages/popover/popover";
import { Calendar } from "@ionic-native/calendar";

import { TabHigienesPage } from "../tab-higienes/tab-higienes";
import { PedirCitaPage } from "../pedir-cita/pedir-cita";
import { ComollegarPage } from "../comollegar/comollegar";

// Para aceptar HTML desde la API
import { DomSanitizer } from "@angular/platform-browser";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "page-list",
  templateUrl: "consultar-citas-futuras.html"
})
export class ConsultarCitasFuturasPage {
  loading: Loading; // Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
  citas = new Array(); // Array con todas las citas futuras del paciente.
  calendars = []; // Array con la información de la cita para almacenar en el calendario.
  showMessage = false;
  fecha = ""; // Fecha que será obtenida por parámetro
  hora = ""; // Hora que será obtenida por parámetro

  @ViewChild("slidesCitas") slides: Slides;

  bHigienes = {
    name: "MIS HIGIENES",
    svg: "",
    openPage: "Higiene",
    class: "",
    tipo: "page",
    gradiente: ""
  };
  bPedirCita = {
    name: "PEDIR CITA",
    svg: "",
    openPage: "PedirCita",
    class: "active",
    tipo: "page",
    gradiente: ""
  };

  constructor(
    public navParams: NavParams,
    private app: App,
    private toastCtrl: ToastController,
    private domSanitizer: DomSanitizer,
    public events: Events,
    private alertCtrl: AlertController,
    public popoverCtrl: PopoverController,
    private calendar: Calendar,
    public navCtrl: NavController,
    public restProvider: RestProvider,
    private loadingCtrl: LoadingController,
    private plt: Platform,
    private translate: TranslateService
  ) {
    this.showLoading();
    this.getCitas();

    if (this.plt.is("cordova")) {
      this.plt.ready().then(() => {
        this.calendar.listCalendars().then(data => {
          this.calendars = data;
        });
      });
    }

    this.events.publish("user:logged");
  }

  goToSlide() {
    setTimeout(() => {
      this.slides.slideTo(this.navParams.data);
    }, 500);
  }

  /**
	* 	Función que abre una página o una web dependiendo
	*	de los parámetros que se les introduzca.
	*
	* 	@param String page a la que redirigir.
	* 	@param String tipo si es pagina o web.
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	*
	*/

  openPage(page, tipo) {
    if (tipo === "page") {
      if (page == "Higiene") this.app.getRootNav().push(TabHigienesPage);
      else if (page == "PedirCita") this.app.getRootNav().push(PedirCitaPage);
      else if (page == "Comollegar") this.app.getRootNav().push(ComollegarPage);
      else
        this.presentToast(this.translate.instant("CONSULTAR_CITAS_FUTURAS.PAGINA_NO_DISPONIBLE"));
    } else if (tipo == "web") {
      window.open(page, "_system", "location=yes");
    } else {
      this.presentToast("La página '" + page + "' de tipo '" + tipo + "' no está disponible.");
    }
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
      title: this.translate.instant("CONSULTAR_CITAS_FUTURAS.CONFIRMACION_REQUERIDA"),
      message:
        this.translate.instant("CONSULTAR_CITAS_FUTURAS.QUIERES") +
        action +
        this.translate.instant("CONSULTAR_CITAS_FUTURAS.LA_CITA"),
      buttons: [
        { text: "CANCELAR", role: "cancel" },
        {
          text: action,
          handler: () => {
            this.showLoading(this.translate.instant("CONSULTAR_CITAS_FUTURAS.GESTIONANDO_CITA"));
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

    if (tipo == "anular")
      textoAlert = this.translate.instant("CONSULTAR_CITAS_FUTURAS.ANULADO_CITA");
    else if (tipo == "cambiar")
      textoAlert = this.translate.instant("CONSULTAR_CITAS_FUTURAS.CAMBIADO_CITA");
    else if (tipo == "confirmar")
      textoAlert = this.translate.instant("CONSULTAR_CITAS_FUTURAS.CONFIRMADO_CITA");

    this.restProvider
      .gestionarCita(tipo, fechaDecimal, horaDecimal)
      .then(data => {
        if (typeof data != "undefined" && data["status"] == 1) {
          this.showError(this.translate.instant("CONSULTAR_CITAS_FUTURAS.INFORMACION"), textoAlert);
        } else if (data.status == 401) {
          this.showError(
            this.translate.instant("GENERICAS.ATENCION"),
            this.translate.instant("GENERICAS.ERROR_SIN_SESION")
          );
          this.events.publish("user:Unauthorized");
        } else {
          this.showError(
            this.translate.instant("GENERICAS.ATENCION"),
            "<p>" + data["message"] + "<br/><br/>[Code: " + data["code"] + "]</p>"
          );
        }
      })
      .catch(e => {
        this.showError(
          this.translate.instant("CONSULTAR_CITAS_FUTURAS.ERROR"),
          this.translate.instant("CONSULTAR_CITAS_FUTURAS.ERROR_CITA")
        );
      });
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
	* 	Función que añade al calendario una cita.
	*
	* 	@param None
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None
	*/
  addEvent(timestampINI, timestampFIN) {
    let dateINI = new Date(parseInt(timestampINI));
    let dateFIN = new Date(parseInt(timestampFIN));
    let titulo = "Cita en Clínica Dental Ferrus&Bratos";
    let direccion = "C/ Caleruega 67 3ª Planta. 28033 Madrid";

    let options = {
      calendarId: 1,
      url: "http://clinicaferrusbratos.com",
      firstReminderMinutes: 15
    };

    this.calendar
      .createEventInteractivelyWithOptions(titulo, direccion, "", dateINI, dateFIN, options)
      .then(
        res => {
          //this.showError("¡Bien!", "La cita ha sido añadida al calendario." + res);
        },
        err => {
          this.showError(
            this.translate.instant("CONSULTAR_CITAS_FUTURAS.ERROR"),
            this.translate.instant("CONSULTAR_CITAS_FUTURAS.ERROR_CALENDARIO")
          );
        }
      )
      .catch(e => {
        this.showError(
          this.translate.instant("CONSULTAR_CITAS_FUTURAS.ERROR"),
          this.translate.instant("CONSULTAR_CITAS_FUTURAS.ERROR_CALENDARIO")
        );
      });
  }

  /**
	* 	Función que convierte los numeros a dos digitos
	*
	* 	@param Integer Número a convertir
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return Número de dos digitos
	*/
  pad(a) {
    return (a < 10 ? "0" : "") + a;
  }

  /**
	* 	Función que obtiene las citas futuras del paciente
	*
	* 	@param None
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None
	*/
  getCitas() {
    this.restProvider
      .getCitasFuturas()
      .then(data => {
        if (typeof data != "undefined" && data["status"] == 1) {
          if (data["code"] == "105260") {
            this.showMessage = true;
            this.citas = data["data"];
          } else {
            for (var key in data["data"]) {
              this.citas.push(data["data"][key]);
            }
          }
          this.goToSlide();
          this.loading.dismiss();
        } else if (data.status == 401) {
          this.showError(
            this.translate.instant("CONSULTAR_CITAS_FUTURAS.ATENCION"),
            this.translate.instant("CONSULTAR_CITAS_FUTURAS.ERROR_SIN_SESION")
          );
          this.events.publish("user:Unauthorized");
        } else {
          this.showError(
            this.translate.instant("CONSULTAR_CITAS_FUTURAS.ATENCION"),
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

  showLoading(text = "Cargando información....") {
    this.loading = this.loadingCtrl.create({
      content: text,
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
	* 	Función que detecta el movimiento del gesto y pasa
	*	de una página a otra.
	*
	* 	@param String Titulo de la alerta.
	* 	@param String Texto de la alerta.
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	*
	*/
  swipe(e) {
    if (e.direction == "2") {
      this.app.getRootNav().parent.select(1);
    } else if (e.direction == "4") {
      this.app.getRootNav().parent.select(0);
    } else if (e.direction == "1") {
      this.getCitas();
    }
  }
}
