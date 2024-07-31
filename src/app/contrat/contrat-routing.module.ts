import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContratComponent } from './main-contrat/main-contrat.component';
import { ListContratsComponent } from './list-contrats/list-contrats.component';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { DashboardContratComponent } from './dashboard-contrat/dashboard-contrat.component';
import { UpdateContratComponent } from './update-contrat/update-contrat.component';
import { DetailContratComponent } from './detail-contrat/detail-contrat.component';
import { NatureContratComponent } from './nature-contrat/nature-contrat.component';

const routes: Routes = [
  {
    path:'',
    component:MainContratComponent,
    children:[
      {
        path:'list',
        component:ListContratsComponent
      },
      {
        path:'add',
        component:AddContratComponent
      },
      {
        path:'dashboard',
        component:DashboardContratComponent
      },
      {
        path:'natures',
        component:NatureContratComponent
      },
      {
        path:'update/:id',
        component:UpdateContratComponent
      },
      {
        path:':id',
        component:DetailContratComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratRoutingModule { }
