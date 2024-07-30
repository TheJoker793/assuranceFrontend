import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypebienRoutingModule } from './typebien-routing.module';

import { MainTypeBienComponent } from './main-type-bien/main-type-bien.component';
import { DashboardTypeBienComponent } from './dashboard-type-bien/dashboard-type-bien.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AllTypeBiensComponent } from './all-type-biens/all-type-biens.component';
import { UpdateTypeBienComponent } from './update-type-bien/update-type-bien.component';
import { AddTypeBienComponent } from './add-type-bien/add-type-bien.component';


@NgModule({
  declarations: [
    AllTypeBiensComponent,
    MainTypeBienComponent,
    DashboardTypeBienComponent,
    UpdateTypeBienComponent,
    AddTypeBienComponent
    
  ],
  imports: [
    CommonModule,
    TypebienRoutingModule,
    ReactiveFormsModule
  ]
})
export class TypebienModule { }
