import { Component, ViewChild } from "@angular/core";
import {
  App,
  NavController,
  Loading,
  ToastController,
  LoadingController,
  AlertController,
  Events
} from "ionic-angular";
import { RestProvider } from "../../providers/rest/rest";

import { TabHigienesPage } from "../tab-higienes/tab-higienes";
import { PedirCitaPage } from "../pedir-cita/pedir-cita";

// Para aceptar HTML desde la API
import { DomSanitizer } from "@angular/platform-browser";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "page-list",
  templateUrl: "ConsultarCitas.html"
})
export class ConsultarCitas {
  loading: Loading; // Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
  citas = new Array(); // Array con todas las citas futuras del paciente.

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
    private app: App,
    private toastCtrl: ToastController,
    private domSanitizer: DomSanitizer,
    public events: Events,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    public restProvider: RestProvider,
    private loadingCtrl: LoadingController,
    private translate: TranslateService
  ) {
    this.showLoading();
    this.getCitas();
    this.events.publish("user:logged");
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
	* 	Función que obtiene las citas pasadas del paciente
	*
	* 	@param None
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None
	*/
  getCitas() {
    this.restProvider
      .getCitasPasadas()
      .then(data => {
        if (typeof data != "undefined" && data["status"] == 1) {
          for (var key in data["data"]) {
            this.citas.push(data["data"][key]);
          }
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

  showLoading(text = "Cargando información...") {
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
      this.navCtrl.parent.select(1);
    } else if (e.direction == "4") {
      this.navCtrl.parent.select(0);
    } else if (e.direction == "1") {
      this.getCitas();
    }
  }
}
