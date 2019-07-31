import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  Events,
  NavParams,
  LoadingController,
  AlertController,
  Loading,
  ToastController
} from "ionic-angular";
import { RestProvider } from "../../providers/rest/rest";
import { LoginPage } from "../../pages/login/login";
import { ChatPage } from "../../pages/chat/chat";
import { TranslateService } from "@ngx-translate/core";

/**
 * Generated class for the PlanEconomicoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-plan-economico-detail",
  templateUrl: "plan-economico-detail.html"
})
export class PlanEconomicoDetailPage {
  loading: Loading; // Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
  cards = new Array(); // Array donde se almacenan los objetos del tipo card descargados del servidor.
  showCardError = false;
  numPlan = 0;
  tituloSubtitulo = { titulo: "", subtitulo: "" };
  importes = new Array();

  public lineChartDataPagado: Array<any> = [{ data: [12, 19, 3, 5, 2, 3] }];

  public lineChartDataPendiente: Array<any> = [{ data: [20, 18, 12, 5, 4, 3] }];

  public lineChartDataTotal: Array<any> = [{ data: [20, 18, 12, 5, 4, 3] }];

  public lineChartColorsPagado: Array<any> = [
    {
      // white
      backgroundColor: "rgba(243,167,201, 0.8)",
      borderColor: "rgba(237, 122, 173, 1)",
      pointBackgroundColor: "rgba(237, 122, 173, 1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(237, 122, 173, 1)",
      borderWidth: 1
    }
  ];

  public lineChartColorsPendiente: Array<any> = [
    {
      // white
      backgroundColor: "rgba(255,255,255,1)",
      borderColor: "rgba(237, 122, 173, 1)",
      pointBackgroundColor: "rgba(255,255,255,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255,255,255,0)",
      borderWidth: 1
    }
  ];

  public lineChartColorsTotal: Array<any> = [
    {
      // white
      backgroundColor: "rgba(243,167,201, 0.8)",
      borderColor: "rgba(237, 122, 173, 1)",
      pointBackgroundColor: "rgba(237, 122, 173, 1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(237, 122, 173, 1)",
      borderWidth: 1
    }
  ];

  public lineChartOptions: any = {
    legend: false,
    responsive: true,
    maintainAspectRatio: true,
    elements: {
      point: {
        radius: 0,
        hitRadius: 5,
        hoverRadius: 5
      }
    },
    scales: {
      xAxes: [{ display: false }],
      yAxes: [
        {
          display: false,
          ticks: { beginAtZero: true }
        }
      ]
    }
  };

  public lineChartType: string = "line";

  constructor(
    public navParams: NavParams,
    private toastCtrl: ToastController,
    public events: Events,
    public restProvider: RestProvider,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    private translate: TranslateService
  ) {
    this.tituloSubtitulo.titulo = this.translate.instant("PLAN_ECONOMICO_DETAIL.TITULO");
    this.tituloSubtitulo.subtitulo = this.translate.instant("PLAN_ECONOMICO_DETAIL.SUBTITULO");
  }

  ionViewDidLoad() {
    this.showLoading();
    this.numPlan = this.navParams.get("data");
    this.getPlanEconomicoDetail(this.navParams.get("data"));
    this.events.publish("user:logged");
  }

  /**
	* 	Función que obtiene las tarjetas para la página
	*	de los planes económicos
	*
	* 	@param None
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	* 	@return None
	*/

  getPlanEconomicoDetail(n) {
    this.restProvider
      .getPlanEconomicoDetail(n)
      .then(data => {
        if (typeof data != "undefined" && data["status"] == 1) {
          if (typeof this.cards === "undefined" || this.cards.length <= 0) {
            this.showCardError = true;
          }

          for (var key in data["data"]) {
            this.cards.push(data["data"][key]);
            this.showCardError = false;
            this.tituloSubtitulo = {
              titulo: this.translate.instant("PLAN_ECONOMICO_DETAIL.TITULO"),
              subtitulo: data["data"][key]["nombre"]
            };
          }

          this.importes = data["importes"];

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

  openPage(page) {
    if (page == "chat") this.navCtrl.push(ChatPage);
  }
}
