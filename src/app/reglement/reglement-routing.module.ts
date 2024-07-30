import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainReglementComponent } from './main-reglement/main-reglement.component';
import { AllReglementsComponent } from './all-reglements/all-reglements.component';
import { AddReglementComponent } from './add-reglement/add-reglement.component';
import { DashboardReglementComponent } from './dashboard-reglement/dashboard-reglement.component';
import { UpdateReglementComponent } from './update-reglement/update-reglement.component';
import { DetailReglementComponent } from './detail-reglement/detail-reglement.component';

const routes: Routes = [
  {
    path:'',
    component:MainReglementComponent,
    children:[
      {
        path:'list',
        component:AllReglementsComponent
      },
      {
        path:'add',
        component:AddReglementComponent
      },
      {
        path:'dashboard',
        component:DashboardReglementComponent
      },
      {
        path:'update/:id',
        component:UpdateReglementComponent
      },
      {
        path:':id',
        component:DetailReglementComponent
      }
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReglementRoutingModule { }
