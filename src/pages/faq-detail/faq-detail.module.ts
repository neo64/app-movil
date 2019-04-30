import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaqDetailPage } from './faq-detail';

@NgModule({
  declarations: [
    FaqDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FaqDetailPage),
  ],
})
export class FaqDetailPageModule {}
