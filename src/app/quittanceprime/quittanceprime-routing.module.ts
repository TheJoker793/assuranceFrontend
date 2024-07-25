import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainQuittancePrimeComponent } from './main-quittance-prime/main-quittance-prime.component';
import { ListQuittancePrimeComponent } from './list-quittance-prime/list-quittance-prime.component';
import { AddQuittancePrimeComponent } from './add-quittance-prime/add-quittance-prime.component';
import { DashboardQuittancePrimeComponent } from './dashboard-quittance-prime/dashboard-quittance-prime.component';
import { UpdateQuittancePrimeComponent } from './update-quittance-prime/update-quittance-prime.component';
import { DetailQuittancePrimeComponent } from './detail-quittance-prime/detail-quittance-prime.component';

const routes: Routes = [
  {
    path:'',
    component:MainQuittancePrimeComponent,
    children:[
      {
        path:'list',
        component:ListQuittancePrimeComponent
      },
      {
        path:'add',
        component:AddQuittancePrimeComponent
      },
      {
        path:'dashboard',
        component:DashboardQuittancePrimeComponent
      },
      {
        path:'update/:id',
        component:UpdateQuittancePrimeComponent
      },
      {
        path:':id',
        component:DetailQuittancePrimeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuittanceprimeRoutingModule { }
