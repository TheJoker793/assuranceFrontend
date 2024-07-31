import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratRoutingModule } from './contrat-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MainContratComponent } from './main-contrat/main-contrat.component';
import { ListContratsComponent } from './list-contrats/list-contrats.component';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { UpdateContratComponent } from './update-contrat/update-contrat.component';
import { DetailContratComponent } from './detail-contrat/detail-contrat.component';
import { DashboardContratComponent } from './dashboard-contrat/dashboard-contrat.component';
import { NatureContratComponent } from './nature-contrat/nature-contrat.component';


@NgModule({
  declarations: [
    MainContratComponent,
    ListContratsComponent,
    AddContratComponent,
    UpdateContratComponent,
    DetailContratComponent,
    DashboardContratComponent,
    NatureContratComponent
  ],
  imports: [
    CommonModule,
    ContratRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContratModule { }
