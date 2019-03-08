
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage';

import { Vibration } from '@ionic-native/vibration';

import { AndroidPermissions} from '@ionic-native/android-permissions';


import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ConsultarCitas } from '../pages/ConsultarCitas/ConsultarCitas';

import { FaqPage } from '../pages/faq/faq';
import { FaqDetailPage } from '../pages/faq-detail/faq-detail';

import { PedirCitaPage } from '../pages/pedir-cita/pedir-cita';
import { PedirCitaPreferenciasPage } from '../pages/pedir-cita-preferencias/pedir-cita-preferencias';
import { PedirCitaElegirPage } from '../pages/pedir-cita-elegir/pedir-cita-elegir';
import { PedirCitaReservaPage } from '../pages/pedir-cita-reserva/pedir-cita-reserva';

import { TabConsultarCitas } from '../pages/tabConsultarCitas/tabConsultarCitas';
import { TabHigienesPage } from '../pages/tab-higienes/tab-higienes';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { ConsultarCitasFuturasPage } from '../pages/consultar-citas-futuras/consultar-citas-futuras';
import { Calendar } from '@ionic-native/calendar';
import { PopoverPage } from '../pages/popover/popover';
import { ChatPage } from '../pages/chat/chat';
import { InstruccionesPage } from '../pages/instrucciones/instrucciones';
import { DocFirmadosPage } from '../pages/doc-firmados/doc-firmados';
import { ProfilePage } from '../pages/profile/profile';
import { EmojiProvider } from '../providers/emoji/emoji';
import { EmojiPickerComponentModule } from "../components/emoji-picker/emoji-picker.module";
import { SugerenciasPage } from '../pages/sugerencias/sugerencias';
import { MiSaludPage } from '../pages/mi-salud/mi-salud';
import { MiPerfilPage } from '../pages/mi-perfil/mi-perfil';
import { MisCitasPage } from '../pages/mis-citas/mis-citas';
import { MisDocumentosPage } from '../pages/mis-documentos/mis-documentos';

import { LoginInputPage } from '../pages/login-input/login-input';
import { LoginRegistroPage } from '../pages/login-registro/login-registro';
import { LoginTabPage } from '../pages/login-tab/login-tab';
import { LoginRecibirPinPage } from '../pages/login-recibir-pin/login-recibir-pin';
import { LoginErrorPinPage } from '../pages/login-error-pin/login-error-pin';
import { LoginYaRegistradoPage } from '../pages/login-ya-registrado/login-ya-registrado';
import { LoginReenviarPage } from '../pages/login-reenviar/login-reenviar';
import { LoginOlvidoPage } from '../pages/login-olvido/login-olvido';


import { RecallPage } from '../pages/recall/recall';
import { RecallPasadasPage } from '../pages/recall-pasadas/recall-pasadas';
import { ConsejosPersonalizadosPage } from '../pages/consejos-personalizados/consejos-personalizados';
import { ConsejosDetailPage } from '../pages/consejos-detail/consejos-detail';
import { DocumentosContablesPage } from '../pages/documentos-contables/documentos-contables';
import { PresupuestosPage } from '../pages/presupuestos/presupuestos';
import { PlanEconomicoPage } from '../pages/plan-economico/plan-economico';
import { PlanEconomicoDetailPage } from '../pages/plan-economico-detail/plan-economico-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';

import { FCM } from '@ionic-native/fcm';
import { Camera } from '@ionic-native/camera';

import { IonicImageViewerModule } from 'ionic-img-viewer';

import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';

import { PhotoViewer } from '@ionic-native/photo-viewer';

import { FbButtonIconComponent } from '../components/fb-button-icon/fb-button-icon';
import { FbButtonComponent } from '../components/fb-button/fb-button';
import { FbTituloSubtituloComponent } from '../components/fb-titulo-subtitulo/fb-titulo-subtitulo';
import { ExpandableComponent } from '../components/expandable/expandable';

import { CallNumber } from '@ionic-native/call-number';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConsultarCitas,
	PedirCitaPage,
	PedirCitaPreferenciasPage,
	PedirCitaElegirPage,
	PedirCitaReservaPage,
    TabConsultarCitas,
    TabHigienesPage,
	ConsultarCitasFuturasPage,
	ChangePasswordPage,
	PopoverPage,
	LoginPage,
	DocFirmadosPage,
	RecallPage,
	RecallPasadasPage,
	ConsejosPersonalizadosPage,
	ConsejosDetailPage,
	DocumentosContablesPage,
	PresupuestosPage,
	LoginInputPage,
	LoginTabPage,
	LoginRegistroPage,
	LoginRecibirPinPage,
	LoginErrorPinPage,
	LoginYaRegistradoPage,
	LoginReenviarPage,
	LoginOlvidoPage,
	PlanEconomicoPage,
	PlanEconomicoDetailPage,
	ProfilePage,
	MiSaludPage,
	InstruccionesPage,
	MiPerfilPage,
	MisCitasPage,
	MisDocumentosPage,
	SugerenciasPage,
	ChatPage,
	FbButtonIconComponent,
	FbTituloSubtituloComponent,
	ExpandableComponent,
	FbButtonComponent,
	FaqPage,
	FaqDetailPage
  ],
  imports: [
  	ChartsModule,
    BrowserModule,
	HttpClientModule,
	EmojiPickerComponentModule,
	IonicImageViewerModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      backButtonIcon: 'fb-left',
      iconMode: 'md',
	  mode: 'md',
    }),
	IonicPageModule.forChild (MiSaludPage),	
  ],
  exports: [
    HomePage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
	LoginPage,
    HomePage,
    ConsultarCitas,
	PedirCitaPage,
	PedirCitaPreferenciasPage,
	PedirCitaElegirPage,
	PedirCitaReservaPage,
	ConsultarCitasFuturasPage,
	ChangePasswordPage,
	PopoverPage,
    TabConsultarCitas,
    TabHigienesPage,
	DocFirmadosPage,
	MiSaludPage,
	InstruccionesPage,
	MiPerfilPage,
	MisCitasPage,
	MisDocumentosPage,
	SugerenciasPage,
	RecallPage,
	RecallPasadasPage,
	ConsejosPersonalizadosPage,
	ConsejosDetailPage,
	DocumentosContablesPage,
	PresupuestosPage,
	PlanEconomicoPage,
	LoginInputPage,
	LoginRegistroPage,
	LoginTabPage,
	LoginRecibirPinPage,
	LoginErrorPinPage,
	LoginYaRegistradoPage,
	LoginReenviarPage,
	LoginOlvidoPage,
	PlanEconomicoDetailPage,
	ProfilePage,
	ChatPage,
	FaqPage,
	FaqDetailPage
  ],
  providers: [
  	AndroidPermissions,
	NativeStorage ,
	PhotoViewer,
	FCM,
	EmojiProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
	Calendar,
	Vibration,
	File,
	Camera,
    FileOpener,
    CallNumber
	
  ]
})
export class AppModule {}
