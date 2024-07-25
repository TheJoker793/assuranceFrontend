import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuittanceprimeRoutingModule } from './quittanceprime-routing.module';
import { UpdateQuittancePrimeComponent } from './update-quittance-prime/update-quittance-prime.component';
import { ListQuittancePrimeComponent } from './list-quittance-prime/list-quittance-prime.component';
import { DashboardQuittancePrimeComponent } from './dashboard-quittance-prime/dashboard-quittance-prime.component';
import { AddQuittancePrimeComponent } from './add-quittance-prime/add-quittance-prime.component';
import { MainQuittancePrimeComponent } from './main-quittance-prime/main-quittance-prime.component';
import { DetailQuittancePrimeComponent } from './detail-quittance-prime/detail-quittance-prime.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdateQuittancePrimeComponent,
    ListQuittancePrimeComponent,
    DashboardQuittancePrimeComponent,
    AddQuittancePrimeComponent,
    MainQuittancePrimeComponent,
    DetailQuittancePrimeComponent
    
  ],
  imports: [
    CommonModule,
    QuittanceprimeRoutingModule,
    ReactiveFormsModule
  ]
})
export class QuittanceprimeModule { }
