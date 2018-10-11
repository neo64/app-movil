import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MiSaludPage } from './mi-salud';

@NgModule({
  declarations: [
    MiSaludPage,
  ],
  imports: [
    IonicPageModule.forChild(MiSaludPage),
  ],
})
export class MiSaludPageModule {}
