import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DossiersinistreRoutingModule } from './dossiersinistre-routing.module';
import { AllDossiersSinistresComponent } from './all-dossiers-sinistres/all-dossiers-sinistres.component';
import { MainDossierSinistreComponent } from './main-dossier-sinistre/main-dossier-sinistre.component';
import { UpdateDossierSinistreComponent } from './update-dossier-sinistre/update-dossier-sinistre.component';
import { DetailDossierSinistreComponent } from './detail-dossier-sinistre/detail-dossier-sinistre.component';
import { DashboardDossierSinistreComponent } from './dashboard-dossier-sinistre/dashboard-dossier-sinistre.component';
import { AddDossierSinistreComponent } from './add-dossier-sinistre/add-dossier-sinistre.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllDossiersSinistresComponent,
    MainDossierSinistreComponent,
    UpdateDossierSinistreComponent,
    DetailDossierSinistreComponent,
    DashboardDossierSinistreComponent,
    AddDossierSinistreComponent
  ],
  imports: [
    CommonModule,
    DossiersinistreRoutingModule,
    ReactiveFormsModule
  ]
})
export class DossiersinistreModule { }
