import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompteRoutingModule } from './compte-routing.module';
import { ListComptesComponent } from './list-comptes/list-comptes.component';
import { AddCompteComponent } from './add-compte/add-compte.component';
import { UpdateCompteComponent } from './update-compte/update-compte.component';
import { DetailCompteComponent } from './detail-compte/detail-compte.component';
import { MainCompteComponent } from './main-compte/main-compte.component';
import { DashboardCompteComponent } from './dashboard-compte/dashboard-compte.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComptesComponent,
    AddCompteComponent,
    UpdateCompteComponent,
    DetailCompteComponent,
    MainCompteComponent,
    DashboardCompteComponent
  ],
  imports: [
    CommonModule,
    CompteRoutingModule,
    ReactiveFormsModule
  ]
})
export class CompteModule { }
