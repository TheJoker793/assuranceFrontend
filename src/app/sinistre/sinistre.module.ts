import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinistreRoutingModule } from './sinistre-routing.module';
import { MainSinistreComponent } from './main-sinistre/main-sinistre.component';
import { ListSinistresComponent } from './list-sinistres/list-sinistres.component';
import { AddSinistreComponent } from './add-sinistre/add-sinistre.component';
import { UpdateSinistreComponent } from './update-sinistre/update-sinistre.component';
import { DetailSinistreComponent } from './detail-sinistre/detail-sinistre.component';
import { DashboardSinistreComponent } from './dashboard-sinistre/dashboard-sinistre.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainSinistreComponent,
    ListSinistresComponent,
    AddSinistreComponent,
    UpdateSinistreComponent,
    DetailSinistreComponent,
    DashboardSinistreComponent
  ],
  imports: [
    CommonModule,
    SinistreRoutingModule,
    ReactiveFormsModule
  ]
})
export class SinistreModule { }
