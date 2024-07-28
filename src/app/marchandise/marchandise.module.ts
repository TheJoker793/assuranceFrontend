import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarchandiseRoutingModule } from './marchandise-routing.module';
import { MainMarchandiseComponent } from './main-marchandise/main-marchandise.component';
import { AddMarchandiseComponent } from './add-marchandise/add-marchandise.component';
import { ListMarchandisesComponent } from './list-marchandises/list-marchandises.component';
import { UpdateMarchandisesComponent } from './update-marchandises/update-marchandises.component';
import { DashboardMarchandisesComponent } from './dashboard-marchandises/dashboard-marchandises.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainMarchandiseComponent,
    AddMarchandiseComponent,
    ListMarchandisesComponent,
    UpdateMarchandisesComponent,
    DashboardMarchandisesComponent
  ],
  imports: [
    CommonModule,
    MarchandiseRoutingModule,
    ReactiveFormsModule
  ]
})
export class MarchandiseModule { }
