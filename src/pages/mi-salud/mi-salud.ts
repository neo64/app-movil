import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  Loading,
  ToastController,
  LoadingController,
  AlertController,
  Events
} from "ionic-angular";
import { RestProvider } from "../../providers/rest/rest";
import { TabHigienesPage } from "../../pages/tab-higienes/tab-higienes";
import { LoginPage } from "../../pages/login/login";
import { InstruccionesPage } from "../../pages/instrucciones/instrucciones";
import { ConsejosPersonalizadosPage } from "../../pages/consejos-personalizados/consejos-personalizados";
import { ChatPage } from "../../pages/chat/chat";
import { TranslateService } from "@ngx-translate/core";

// Para aceptar HTML desde la API
import { DomSanitizer } from "@angular/platform-browser";

@IonicPage()
@Component({
  selector: "page-mi-salud",
  templateUrl: "mi-salud.html"
})
export class MiSaludPage {
  loading: Loading; // Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
  cards = new Array(); // Array donde se almacenan los objetos del tipo card descargados del servidor.
  cardsMenu = new Array(); // Array donde se descargan los elementos del menú

  constructor(
    private domSanitizer: DomSanitizer,
    private toastCtrl: ToastController,
    public events: Events,
    public restProvider: RestProvider,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    private translate: TranslateService
  ) {
    this.events.publish("user:logged");
  }

  /*
    * Función que se ejecuta cada vez que la página entra en
    * primer plano, entonces tengo que actualizar por si las notificaciones
    * ya han sido leidas.
    */
  ionViewWillEnter() {
    this.cardsMenu = new Array();
    this.cards = new Array();
    this.showLoading();
    this.getCardsMiSalud();
  }

  openPage(page, tipo) {
    if (tipo == "page") {
      if (page == "Recall") this.navCtrl.push(TabHigienesPage);
      else if (page == "ConsejosPersonalizados") this.navCtrl.push(ConsejosPersonalizadosPage);
      else if (page == "Instrucciones") this.navCtrl.push(InstruccionesPage);
      else if (page == "chat") this.navCtrl.push(ChatPage);
      else this.presentToast(this.translate.instant("MI_SALUD.ERROR_PAG_NO_DISPONIBLE"));
    } else if (tipo == "web") {
      window.open(page, "_system", "location=yes");
    }
  }

  /**
	* 	Función que obtiene las tarjetas para la página
	*	Mi salud.
	*
	* 	@param None
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None
	*/

  getCardsMiSalud() {
    this.restProvider
      .getCardsMiSalud()
      .then(data => {
        if (typeof data != "undefined" && data["status"] == 1) {
          if (data["data"]["cards"]) {
            for (var i in data["data"]["cards"]) {
              this.cards.push(data["data"]["cards"][i]);
            }
          }
          for (var j in data["data"]["menu"]) {
            this.cardsMenu.push(data["data"]["menu"][j]);
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
}
