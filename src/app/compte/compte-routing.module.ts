import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCompteComponent } from './main-compte/main-compte.component';
import { ListComptesComponent } from './list-comptes/list-comptes.component';
import { AddCompteComponent } from './add-compte/add-compte.component';
import { DashboardCompteComponent } from './dashboard-compte/dashboard-compte.component';
import { UpdateCompteComponent } from './update-compte/update-compte.component';
import { DetailCompteComponent } from './detail-compte/detail-compte.component';

const routes: Routes = [
  {
    path:'',
    component:MainCompteComponent,
    children:[
      {
        path:'list',
        component:ListComptesComponent
      },
      {
        path:'add',
        component:AddCompteComponent
      },
      {
        path:'dashboard',
        component:DashboardCompteComponent
      },
      {
        path:'update/:id',
        component:UpdateCompteComponent
      },
      {
        path:':id',
        component:DetailCompteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompteRoutingModule { }
