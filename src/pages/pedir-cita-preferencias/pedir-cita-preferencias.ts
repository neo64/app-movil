import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  Events,
  LoadingController,
  Loading
} from "ionic-angular";

import { RestProvider } from "../../providers/rest/rest";
import { LoginPage } from "../../pages/login/login";
import { PedirCitaPage } from "../../pages/pedir-cita/pedir-cita";
import { PedirCitaElegirPage } from "../../pages/pedir-cita-elegir/pedir-cita-elegir";
import { ChatPage } from "../../pages/chat/chat";
import { TranslateService } from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: "page-pedir-cita-preferencias",
  templateUrl: "pedir-cita-preferencias.html"
})
export class PedirCitaPreferenciasPage {
  loading: Loading; // Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.

  bSiguiente = {
    name: "Siguiente",
    svg: "",
    openPage: "",
    class: "active login",
    tipo: "",
    gradiente: ""
  };
  bAnterior = { name: "Anterior", svg: "", openPage: "", class: "login", tipo: "", gradiente: "" };
  tituloSubtitulo = { titulo: "Elige tus preferencias", subtitulo: "de la cita" };
  doctores = [];
  diasSemana = [
    { dia: "Lunes", class: "" },
    { dia: "Martes", class: "" },
    { dia: "Miércoles", class: "" },
    { dia: "Jueves", class: "" },
    { dia: "Viernes", class: "" }
  ];
  horasDia = [
    { hora: "09:30", class: "" },
    { hora: "10:00", class: "" },
    { hora: "11:00", class: "" },
    { hora: "12:00", class: "" },
    { hora: "13:00", class: "" },
    { hora: "14:00", class: "" },
    { hora: "15:00", class: "" },
    { hora: "16:00", class: "" },
    { hora: "17:00", class: "" },
    { hora: "18:00", class: "" },
    { hora: "19:00", class: "" },
    { hora: "20:00", class: "" }
  ];

  drSelect = "Sin preferencia";
  diaSelect = [];
  horaSelect = "09:30";

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
    this.getDoctors(this.navParams.get("tto"));
    this.events.publish("user:logged");
  }

  selectDr(e) {
    for (var x in this.doctores) {
      if (this.doctores[x].IdUsu == e.IdUsu) this.doctores[x].class = "active";
      else if (this.doctores[x].IdUsu == "Sin preferencia")
        this.doctores[x].class = "sinpreferencia";
      else this.doctores[x].class = "";
      if (this.doctores[x].IdUsu == "Sin preferencia" && this.doctores[x].IdUsu == e.IdUsu)
        this.doctores[x].class = "sinpreferencia active";
    }
    this.drSelect = e.IdUsu;
    console.log(e.IdUsu);
  }

  selectDia(e) {
    for (var x in this.diasSemana) {
      if (this.diasSemana[x].dia == e.dia) {
        if (this.diasSemana[x].class == "active") {
          this.diasSemana[x].class = "";
          var index = this.diaSelect.indexOf(e.dia);
          if (index > -1) {
            this.diaSelect.splice(index, 1);
          }
        } else {
          this.diasSemana[x].class = "active";
          this.diaSelect.push(e.dia);
        }
      }
    }
  }

  selectHora(e) {
    for (var x in this.horasDia) {
      if (this.horasDia[x].hora == e.hora) this.horasDia[x].class = "active";
      else this.horasDia[x].class = "";
    }
    this.horaSelect = e.hora;
  }

  siguiente() {
    this.navCtrl.push(PedirCitaElegirPage, {
      tto: this.navParams.get("tto"),
      dr: this.drSelect,
      dia: this.diaSelect,
      hora: this.horaSelect
    });
  }

  anterior() {
    this.navCtrl.push(PedirCitaPage);
  }

  /**
	* 	Función que obtiene todos los doctores a los que se
	*	les puede asignar una cita desde la aplicación móvil
	*
	* 	@param None
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None
	*/

  getDoctors(e) {
    this.restProvider
      .getDoctors(e)
      .then(data => {
        if (typeof data != "undefined" && data["status"] == 1) {
          this.doctores = data["data"];
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
