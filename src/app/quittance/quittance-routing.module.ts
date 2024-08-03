import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainQuittanceComponent } from './main-quittance/main-quittance.component';
import { AllQuittancesComponent } from './all-quittances/all-quittances.component';
import { AddQuittanceComponent } from './add-quittance/add-quittance.component';
import { DashboardQuittanceComponent } from './dashboard-quittance/dashboard-quittance.component';
import { UpdateQuittanceComponent } from './update-quittance/update-quittance.component';
import { DetailQuittanceComponent } from './detail-quittance/detail-quittance.component';
import{DeviseComponent} from './devise/devise.component'
const routes: Routes = [
  {
    path:'',
    component:MainQuittanceComponent,
    children:[
      {
        path:'list',
        component:AllQuittancesComponent
      },
      {
        path:'add',
        component:AddQuittanceComponent
      },
      {
        path:'dashboard',
        component:DashboardQuittanceComponent
      },
      {
        path:'devises',
        component:DeviseComponent
      },
      
      {
        path:'update/:id',
        component:UpdateQuittanceComponent
      },
      {
        path:':id',
        component:DetailQuittanceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuittanceRoutingModule { }
