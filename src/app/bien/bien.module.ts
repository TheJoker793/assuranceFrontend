import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BienRoutingModule } from './bien-routing.module';
import { ListBiensComponent } from './list-biens/list-biens.component';
import { AddBienComponent } from './add-bien/add-bien.component';
import { MainBienComponent } from './main-bien/main-bien.component';
import { UpdateBienComponent } from './update-bien/update-bien.component';
import { DetailBienComponent } from './detail-bien/detail-bien.component';
import { DashboardBienComponent } from './dashboard-bien/dashboard-bien.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListBiensComponent,
    AddBienComponent,
    MainBienComponent,
    UpdateBienComponent,
    DetailBienComponent,
    DashboardBienComponent
  ],
  imports: [
    CommonModule,
    BienRoutingModule,
    ReactiveFormsModule
  ]
})
export class BienModule { }
