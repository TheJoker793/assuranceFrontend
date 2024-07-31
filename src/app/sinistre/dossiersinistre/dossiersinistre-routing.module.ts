import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDossierSinistreComponent } from './main-dossier-sinistre/main-dossier-sinistre.component';
import { AllDossiersSinistresComponent } from './all-dossiers-sinistres/all-dossiers-sinistres.component';
import { AddDossierSinistreComponent } from './add-dossier-sinistre/add-dossier-sinistre.component';
import { DashboardDossierSinistreComponent } from './dashboard-dossier-sinistre/dashboard-dossier-sinistre.component';
import { UpdateDossierSinistreComponent } from './update-dossier-sinistre/update-dossier-sinistre.component';
import { DetailDossierSinistreComponent } from './detail-dossier-sinistre/detail-dossier-sinistre.component';

const routes: Routes = [
  {
    path:'',
    component:MainDossierSinistreComponent,
    children:[
      {
        path:'list',
        component:AllDossiersSinistresComponent
      },
      {
        path:'add',
        component:AddDossierSinistreComponent
      },
      {
        path:'dashboard',
        component:DashboardDossierSinistreComponent
      },
      {
        path:'update/:id',
        component:UpdateDossierSinistreComponent
      },
      {
        path:':id',
        component:DetailDossierSinistreComponent
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DossiersinistreRoutingModule { }
