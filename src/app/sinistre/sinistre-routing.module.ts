import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSinistreComponent } from './main-sinistre/main-sinistre.component';
import { ListSinistresComponent } from './list-sinistres/list-sinistres.component';
import { AddSinistreComponent } from './add-sinistre/add-sinistre.component';
import { DashboardSinistreComponent } from './dashboard-sinistre/dashboard-sinistre.component';
import { UpdateSinistreComponent } from './update-sinistre/update-sinistre.component';

const routes: Routes = [
  {
    path:'',
    component:MainSinistreComponent,
    children:[
      {
        path:'list',
        component:ListSinistresComponent
      },
      {
        path:'add',
        component:AddSinistreComponent
      },
      {
        path:'dashboard',
        component:DashboardSinistreComponent
      },
      {
        path:'update/:id',
        component:UpdateSinistreComponent
      },
      {
        path:':id',
        component:DashboardSinistreComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SinistreRoutingModule { }
