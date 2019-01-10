import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage';

import { Vibration } from '@ionic-native/vibration';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ConsultarCitas } from '../pages/ConsultarCitas/ConsultarCitas';
import { PedirCitaPage } from '../pages/pedir-cita/pedir-cita';
import { TabConsultarCitas } from '../pages/tabConsultarCitas/tabConsultarCitas';
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

import { RecallPage } from '../pages/recall/recall';
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

import { CallNumber } from '@ionic-native/call-number';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConsultarCitas,
	PedirCitaPage,
    TabConsultarCitas,
	ConsultarCitasFuturasPage,
	ChangePasswordPage,
	PopoverPage,
	LoginPage,
	DocFirmadosPage,
	RecallPage,
	ConsejosPersonalizadosPage,
	ConsejosDetailPage,
	DocumentosContablesPage,
	PresupuestosPage,
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
	FbButtonIconComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	EmojiPickerComponentModule,
	IonicImageViewerModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      backButtonIcon: 'ios-arrow-back',
      iconMode: 'md'
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
	ConsultarCitasFuturasPage,
	ChangePasswordPage,
	PopoverPage,
    TabConsultarCitas,
	DocFirmadosPage,
	MiSaludPage,
	InstruccionesPage,
	MiPerfilPage,
	MisCitasPage,
	MisDocumentosPage,
	SugerenciasPage,
	RecallPage,
	ConsejosPersonalizadosPage,
	ConsejosDetailPage,
	DocumentosContablesPage,
	PresupuestosPage,
	PlanEconomicoPage,
	PlanEconomicoDetailPage,
	ProfilePage,
	ChatPage
  ],
  providers: [
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
