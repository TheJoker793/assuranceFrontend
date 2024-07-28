import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssureurRoutingModule } from './assureur-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListAssureursComponent } from './list-assureurs/list-assureurs.component';
import { MainAssureurComponent } from './main-assureur/main-assureur.component';
import { AddAssureurComponent } from './add-assureur/add-assureur.component';
import { UpdateAssureurComponent } from './update-assureur/update-assureur.component';
import { DetailAssureurComponent } from './detail-assureur/detail-assureur.component';


@NgModule({
  declarations: [
    ListAssureursComponent,
    MainAssureurComponent,
    AddAssureurComponent,
    UpdateAssureurComponent,
    DetailAssureurComponent
  ],
  imports: [
    CommonModule,
    AssureurRoutingModule,
    ReactiveFormsModule
  ]
})
export class AssureurModule { }
