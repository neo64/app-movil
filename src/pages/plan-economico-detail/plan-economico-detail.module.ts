import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanEconomicoDetailPage } from './plan-economico-detail';

@NgModule({
  declarations: [
    PlanEconomicoDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanEconomicoDetailPage),
  ],
})
export class PlanEconomicoDetailPageModule {}
