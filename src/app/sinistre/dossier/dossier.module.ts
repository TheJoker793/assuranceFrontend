import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DossierRoutingModule } from './dossier-routing.module';
import { AllDossiersComponent } from './all-dossiers/all-dossiers.component';
import { MainDossierComponent } from './main-dossier/main-dossier.component';
import { AddDossierComponent } from './add-dossier/add-dossier.component';
import { UpdateDossierComponent } from './update-dossier/update-dossier.component';
import { DetailDossierComponent } from './detail-dossier/detail-dossier.component';
import { DashboardDossierComponent } from './dashboard-dossier/dashboard-dossier.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllDossiersComponent,
    MainDossierComponent,
    AddDossierComponent,
    UpdateDossierComponent,
    DetailDossierComponent,
    DashboardDossierComponent
  ],
  imports: [
    CommonModule,
    DossierRoutingModule,
    ReactiveFormsModule
  ]
})
export class DossierModule { }
