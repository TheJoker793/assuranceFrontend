import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDossierComponent } from './main-dossier/main-dossier.component';
import { AllDossiersComponent } from './all-dossiers/all-dossiers.component';
import { AddDossierComponent } from './add-dossier/add-dossier.component';
import { DashboardDossierComponent } from './dashboard-dossier/dashboard-dossier.component';
import { UpdateDossierComponent } from './update-dossier/update-dossier.component';
import { DetailDossierComponent } from './detail-dossier/detail-dossier.component';

const routes: Routes = [
  {
    path:'',
    component:MainDossierComponent,
    children:[
      {
        path:'list',
        component:AllDossiersComponent
      },
      {
        path:'add',
        component:AddDossierComponent
      },
      {
        path:'dhashboard',
        component:DashboardDossierComponent
      },
      {
        path:'update/:id',
        component:UpdateDossierComponent
      },
      {
        path:':id',
        component:DetailDossierComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DossierRoutingModule { }
