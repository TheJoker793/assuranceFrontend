import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReglementRoutingModule } from './reglement-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AllReglementsComponent } from './all-reglements/all-reglements.component';
import { AddReglementComponent } from './add-reglement/add-reglement.component';
import { MainReglementComponent } from './main-reglement/main-reglement.component';
import { UpdateReglementComponent } from './update-reglement/update-reglement.component';
import { DetailReglementComponent } from './detail-reglement/detail-reglement.component';
import { DashboardReglementComponent } from './dashboard-reglement/dashboard-reglement.component';


@NgModule({
  declarations: [
    AllReglementsComponent,
    AddReglementComponent,
    MainReglementComponent,
    UpdateReglementComponent,
    DetailReglementComponent,
    DashboardReglementComponent
  ],
  imports: [
    CommonModule,
    ReglementRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReglementModule { }
