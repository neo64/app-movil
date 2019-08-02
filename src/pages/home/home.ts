import { Component, ViewChild } from "@angular/core";
import {
  NavController,
  Loading,
  ToastController,
  LoadingController,
  AlertController,
  Events,
  Slides
} from "ionic-angular";
import { LoginPage } from "../login/login";
// Páginas del menú
import { MiSaludPage } from "../mi-salud/mi-salud";
import { MiPerfilPage } from "../mi-perfil/mi-perfil";
import { MisDocumentosPage } from "../mis-documentos/mis-documentos";
import { MisCitasPage } from "../mis-citas/mis-citas";
import { ChatPage } from "../chat/chat";
import { SugerenciasPage } from "../sugerencias/sugerencias";
// Páginas de navegación
import { ChangePasswordPage } from "../change-password/change-password";
import { ProfilePage } from "../profile/profile";
import { TabConsultarCitas } from "../tabConsultarCitas/tabConsultarCitas";
import { PedirCitaPage } from "../pedir-cita/pedir-cita";
import { DocumentosContablesPage } from "../documentos-contables/documentos-contables";
import { PresupuestosPage } from "../presupuestos/presupuestos";
import { RecallPage } from "../recall/recall";
import { ConsejosPersonalizadosPage } from "../consejos-personalizados/consejos-personalizados";
import { InstruccionesPage } from "../instrucciones/instrucciones";
import { FaqPage } from "../faq/faq";
import { ComollegarPage } from "../comollegar/comollegar";
// Proveedor de API
import { RestProvider } from "../../providers/rest/rest";
// Para aceptar HTML desde la API
import { DomSanitizer } from "@angular/platform-browser";
// Para abrir la aplicación de llamadas nativa.
import { CallNumber } from "@ionic-native/call-number";
import { Badge } from "@ionic-native/badge";

import { TranslateService } from "@ngx-translate/core";
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";
import { StatusBar } from "@ionic-native/status-bar";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  @ViewChild("slides") slides: Slides;
  loading: Loading; // Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
  cards = new Array(); // Array donde se almacenan los objetos del tipo card descargados del servidor.
  cardsMenu = new Array(); // Array donde se descargan los elementos del menú
  bPedirCita = {
    name: "PEDIR CITA",
    svg: "",
    openPage: "PedirCita",
    class: "active",
    tipo: "page",
    gradiente: ""
  };
  constructor(
    private badge: Badge,
    private callNumber: CallNumber,
    private domSanitizer: DomSanitizer,
    private toastCtrl: ToastController,
    public events: Events,
    public restProvider: RestProvider,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    private translate: TranslateService,
    private inAppBrowser: InAppBrowser,
    private statusBar: StatusBar
  ) {
    this.events.publish("user:logged");
    //Seteo el formato de la barra de estado
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString("#81a8d9");
    this.statusBar.show();
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
    this.getCardsHome();
  }

  /**
     * 	Función que abre la aplicación de llamadas para
     *	efectuar una llamada a la clínica
     *
     * 	@author Jesús Río <jesusriobarrilero@gmail.com>
     *
     */
  callClinica() {
    this.callNumber
      .callNumber("+34917681812", true)
      .catch(err => console.log("Error launching dialer", err));
  }
  /**
     * 	Función que mueve los elementos del menú en forma
     *	de slider para poder albergar más elementos
     *
     * 	@author Jesús Río <jesusriobarrilero@gmail.com>
     *
     */
  next() {
    if (this.slides.isEnd()) this.slides.slidePrev();
    else this.slides.slideNext();
  }

  goToCitas(i) {
    this.navCtrl.push(TabConsultarCitas, {
      tab: i
    });
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
      if (page == "MiSalud") this.navCtrl.push(MiSaludPage);
      else if (page == "MiPerfil") this.navCtrl.push(MiPerfilPage);
      else if (page == "MisDocumentos") this.navCtrl.push(MisDocumentosPage);
      else if (page == "MisCitas") this.navCtrl.push(MisCitasPage);
      else if (page == "Chat") this.navCtrl.push(ChatPage);
      else if (page == "Sugerencias") this.navCtrl.push(SugerenciasPage);
      else if (page == "Higiene") this.navCtrl.push(RecallPage);
      else if (page == "Perfil") this.navCtrl.push(ProfilePage);
      else if (page == "Password") this.navCtrl.push(ChangePasswordPage);
      else if (page == "DocContables") this.navCtrl.push(DocumentosContablesPage);
      else if (page == "DocPresupuestos") this.navCtrl.push(PresupuestosPage);
      else if (page == "Citas") this.navCtrl.push(TabConsultarCitas);
      else if (page == "PedirCita") this.navCtrl.push(PedirCitaPage);
      else if (page == "ConsejosPersonalizados") this.navCtrl.push(ConsejosPersonalizadosPage);
      else if (page == "Instrucciones") this.navCtrl.push(InstruccionesPage);
      else if (page == "PreguntasFrecuentes") this.navCtrl.push(FaqPage);
      else if (page == "Comollegar") this.navCtrl.push(ComollegarPage);
      else this.presentToast(this.translate.instant("HOME.ERROR_PAG_NO_DISPONIBLE"));
    } else if (tipo == "web") {
      //window.open(page, "_system", "location=yes");
      this.openWebPage(page);
    } else {
      this.presentToast("La página '" + page + "' de tipo '" + tipo + "' no está disponible.");
    }
  }

  openWebPage(url: string) {
    const options: InAppBrowserOptions = {
      location: "yes"
    };

    const browser = this.inAppBrowser.create(url, "_system", options);
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
     * 	Función que obtiene las tarjetas para la página
     *	principal de la aplicación.
     *
     * 	@param None
     *
     * 	@author Jesús Río <jesusriobarrilero@gmail.com>
     * 	@return None
     */
  getCardsHome() {
    this.restProvider
      .getCardsHome()
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
          this.badge.set(data["badge"]);
          this.loading.dismiss();
        } else if (data.status == 401) {
          this.showError(
            this.translate.instant("GENERICAS.ATENCION"),
            this.translate.instant("GENERICAS.ERROR_SIN_SESION")
          );
          /*this.translate.get("HOME.ERROR_SIN_SESION").subscribe((res: string) => {
            this.loading.dismiss();
            this.showError("", res);
          });*/
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
