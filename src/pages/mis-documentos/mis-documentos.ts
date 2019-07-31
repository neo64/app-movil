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
import { PlanEconomicoPage } from "../../pages/plan-economico/plan-economico";
import { LoginPage } from "../../pages/login/login";
import { PresupuestosPage } from "../../pages/presupuestos/presupuestos";
import { DocumentosContablesPage } from "../../pages/documentos-contables/documentos-contables";
import { ChatPage } from "../../pages/chat/chat";

import { FileOpener } from "@ionic-native/file-opener";
import { File } from "@ionic-native/file";

// Para aceptar HTML desde la API
import { DomSanitizer } from "@angular/platform-browser";
import { TranslateService } from "@ngx-translate/core";

declare var cordova: any;

@IonicPage()
@Component({
  selector: "page-mis-documentos",
  templateUrl: "mis-documentos.html"
})
export class MisDocumentosPage {
  loading: Loading; // Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
  cards = new Array(); // Array donde se almacenan los objetos del tipo card descargados del servidor.
  cardsMenu = new Array(); // Array donde se descargan los elementos del menú
  cardsPresup = new Array(); // Array donde se guardan los presupuestos en html para las cards

  constructor(
    private file: File,
    private fileOpener: FileOpener,
    private domSanitizer: DomSanitizer,
    private toastCtrl: ToastController,
    public events: Events,
    public restProvider: RestProvider,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    private translate: TranslateService
  ) {
    this.showLoading();
    this.getCardsMisDocumentos();
    this.events.publish("user:logged");
  }

  /**
	* 	Función que crea un PDF a partir de un HTML y lo muestra.
	*
	* 	@param None
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None
	*/

  createAndOpenPDF(html, numDoc) {
    document.addEventListener("deviceready", () => {
      cordova.plugins.pdf.htmlToPDF(
        {
          data: html,
          documentSize: "A4",
          landscape: "portrait",
          type: "base64"
        },
        sucess => this.openPdf(sucess, numDoc),
        error => console.log("error:", error)
      );
    });
  }

  /**
	* 	Función que almacena el archivo PDF en el sistema,
	*	y a continuación abre el visor para verlo.
	*
	* 	@param None
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None
	*/

  openPdf(base64, numDoc) {
    if (base64 == "") {
      this.presentToast(this.translate.instant("MIS_DOCUMENTOS.ERROR_ABRIR_DOC"));
    } else {
      this.showLoading();
      var blob = this.b64toBlob(base64, "application/pdf");
      var name = window.localStorage.getItem("idPac") + "_Presupuesto" + numDoc + ".pdf";
      let directory = this.file.dataDirectory;

      // Guardo el fichero en la memoria del dispositivo
      this.file
        .writeFile(directory, name, blob)
        .then(_ => {
          // Leo el fichero desde la memoria del dispositivo
          this.fileOpener
            .open(directory + name, "application/pdf")
            .then(() => {
              this.loading.dismiss();
            })
            .catch(e => {
              alert(this.translate.instant("MIS_DOCUMENTOS.ERROR_ABRIR_DOC"));
              this.loading.dismiss();
            });
        })
        .catch(err => {
          // Si ocurre que el fichero ya existe, lo leo de la memoria del dispositivo
          if (err.code == 12) {
            this.fileOpener
              .open(directory + name, "application/pdf")
              .then(() => {
                this.loading.dismiss();
              })
              .catch(e => {
                alert(this.translate.instant("MIS_DOCUMENTOS.ERROR_ABRIR_DOC"));
                this.loading.dismiss();
              });
          } else {
            this.showError("ERROR " + err.code, err.message);
          }
        });
    }
  }

  /**
	* 	Función que convierte a Blob una cadena en Base64
	*
	* 	@param None
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None
	*/

  b64toBlob(b64Data, contentType, sliceSize = 512) {
    contentType = contentType || "";
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);
      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      var byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  openPage(page, tipo) {
    if (tipo == "page") {
      if (page == "Presupuestos") this.navCtrl.push(PresupuestosPage);
      else if (page == "Contables") this.navCtrl.push(DocumentosContablesPage);
      else if (page == "Domiciliaciones") this.navCtrl.push(PlanEconomicoPage);
      else if (page == "chat") this.navCtrl.push(ChatPage);
      else this.presentToast("La página " + page + " no está disponible.");
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

  getCardsMisDocumentos() {
    this.restProvider
      .getCardsMisDocumentos()
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

          this.restProvider
            .getPresupuestos()
            .then(data => {
              if (typeof data != "undefined" && data["status"] == 1) {
                for (var key in data["data"]) {
                  this.cardsPresup.push(data["data"][key]);
                }

                //Uno los 2 cards
                for (var i in this.cards) {
                  for (var j in this.cardsPresup) {
                    if (this.cards[i].NumPre == this.cardsPresup[j].NumPre) {
                      this.cards[i].html = this.cardsPresup[j].html;
                    }
                  }
                  console.log(this.cards[i]);
                }

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

          console.log(this);
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
