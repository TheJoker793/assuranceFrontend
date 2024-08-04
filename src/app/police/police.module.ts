import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliceRoutingModule } from './police-routing.module';
import { MainPoliceComponent } from './main-police/main-police.component';
import { AllPolicesComponent } from './all-polices/all-polices.component';
import { AddPoliceComponent } from './add-police/add-police.component';
import { UpdatePoliceComponent } from './update-police/update-police.component';
import { DetailPoliceComponent } from './detail-police/detail-police.component';
import { DashboardPoliceComponent } from './dashboard-police/dashboard-police.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainPoliceComponent,
    AllPolicesComponent,
    AddPoliceComponent,
    UpdatePoliceComponent,
    DetailPoliceComponent,
    DashboardPoliceComponent
  ],
  imports: [
    CommonModule,
    PoliceRoutingModule,
    ReactiveFormsModule
  ]
})
export class PoliceModule { }
