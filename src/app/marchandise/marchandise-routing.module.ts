import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMarchandiseComponent } from './main-marchandise/main-marchandise.component';
import { ListMarchandisesComponent } from './list-marchandises/list-marchandises.component';
import { AddMarchandiseComponent } from './add-marchandise/add-marchandise.component';
import { DashboardMarchandisesComponent } from './dashboard-marchandises/dashboard-marchandises.component';
import { UpdateMarchandisesComponent } from './update-marchandises/update-marchandises.component';

const routes: Routes = [{
  path:'',
  component:MainMarchandiseComponent,
  children:[
    {
      path:'list',
      component:ListMarchandisesComponent
    },
    {
      path:'add',
      component:AddMarchandiseComponent
    },
    {
      path:'dashboard',
      component:DashboardMarchandisesComponent
    },
    {
      path:':id',
      component:UpdateMarchandisesComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarchandiseRoutingModule { }
