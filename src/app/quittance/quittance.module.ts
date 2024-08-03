import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuittanceRoutingModule } from './quittance-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MainQuittanceComponent } from './main-quittance/main-quittance.component';
import { AllQuittancesComponent } from './all-quittances/all-quittances.component';
import { AddQuittanceComponent } from './add-quittance/add-quittance.component';
import { DashboardQuittanceComponent } from './dashboard-quittance/dashboard-quittance.component';
import { UpdateQuittanceComponent } from './update-quittance/update-quittance.component';
import { DetailQuittanceComponent } from './detail-quittance/detail-quittance.component';
import { DeviseComponent } from './devise/devise.component';


@NgModule({
  declarations: [
    MainQuittanceComponent,
    AllQuittancesComponent,
    AddQuittanceComponent,
    DashboardQuittanceComponent,
    UpdateQuittanceComponent,
    DetailQuittanceComponent,
    DeviseComponent
  ],
  imports: [
    CommonModule,
    QuittanceRoutingModule,
    ReactiveFormsModule
  ]
})
export class QuittanceModule { }
