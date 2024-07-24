import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonneRoutingModule } from './personne-routing.module';
import { DashboardPersonneComponent } from './dashboard-personne/dashboard-personne.component';
import { DetailPersonneComponent } from './detail-personne/detail-personne.component';
import { AddPersonneComponent } from './add-personne/add-personne.component';
import { UpdatePersonneComponent } from './update-personne/update-personne.component';
import { ListPersonneComponent } from './list-personne/list-personne.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardPersonneComponent,
    DetailPersonneComponent,
    AddPersonneComponent,
    UpdatePersonneComponent,
    ListPersonneComponent
  ],
  imports: [
    CommonModule,
    PersonneRoutingModule,
    ReactiveFormsModule
  ]
})
export class PersonneModule { }
