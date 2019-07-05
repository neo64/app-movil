import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsejosDetailPage } from './consejos-detail';

@NgModule({
  declarations: [
    ConsejosDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsejosDetailPage),
  ],
})
export class ConsejosDetailPageModule {}
