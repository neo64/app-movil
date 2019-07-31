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
import { ChatPage } from "../../pages/chat/chat";
import { PedirCitaPreferenciasPage } from "../../pages/pedir-cita-preferencias/pedir-cita-preferencias";
import { TranslateService } from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: "page-pedir-cita",
  templateUrl: "pedir-cita.html"
})
export class PedirCitaPage {
  loading: Loading; // Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
  tratamientos = []; // Array donde se almacenan todos los tratamientos asociados a ese doctor.
  ttoSelect = "HIGREC"; // String donde se almacena el tratamiento seleccionado.

  bSiguiente = {
    name: "Siguiente",
    svg: "",
    openPage: "",
    class: "active login",
    tipo: "",
    gradiente: ""
  };
  tituloSubtitulo = { titulo: "Elige el tratamiento", subtitulo: "de la cita" };

  constructor(
    private alertCtrl: AlertController,
    public events: Events,
    private loadingCtrl: LoadingController,
    public restProvider: RestProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    private translate: TranslateService
  ) {
    this.showLoading();
    this.getTratamientos();
    this.events.publish("user:logged");
  }

  selectTto(e) {
    if (e.IdOpc == "OTRO") {
      this.navCtrl.push(ChatPage, {
        message: this.translate.instant("PEDIR_CITA.ESCRIBENOS")
      });
      return;
    }

    for (var x in this.tratamientos) {
      if (this.tratamientos[x].IdOpc == e.IdOpc)
        //this.tratamientos[x].class = "active";
        this.navCtrl.push(PedirCitaPreferenciasPage, {
          tto: this.ttoSelect
        });
      else this.tratamientos[x].class = "";
    }
    this.ttoSelect = e.IdOpc;
  }

  siguiente() {
    this.navCtrl.push(PedirCitaPreferenciasPage, {
      tto: this.ttoSelect
    });
  }

  /**
	* 	Función que obtiene todos los tratamientos asignados
	*	al doctor seleccionado.
	*
	* 	@param None
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None
	*/

  getTratamientos() {
    this.restProvider
      .getTratamientos()
      .then(data => {
        if (typeof data != "undefined" && data["status"] == 1) {
          this.tratamientos = data["data"];
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
  }

  /**
	* 	Función que envía un E-mail a recepción para que estas
	*	inserten la cita desde el buscador.
	*
	* 	@param None
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None
	*/

  solicitarCita(fecha, hora, doctor, tratamiento) {
    this.showLoading(this.translate.instant("PEDIR_CITA.SOLICITANDO_CITA"));
    this.restProvider
      .solicitarCita(fecha, hora, doctor, tratamiento)
      .then(data => {
        if (typeof data != "undefined" && data["status"] == 1) {
          this.showError(this.translate.instant("GENERICAS.ATENCION"), data["message"]);
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

  openPage(page) {
    if (page == "chat") this.navCtrl.push(ChatPage);
  }
}
