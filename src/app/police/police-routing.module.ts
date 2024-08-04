import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPoliceComponent } from './main-police/main-police.component';
import { AllPolicesComponent } from './all-polices/all-polices.component';
import { AddPoliceComponent } from './add-police/add-police.component';
import { DashboardPoliceComponent } from './dashboard-police/dashboard-police.component';
import { UpdatePoliceComponent } from './update-police/update-police.component';
import { DetailPoliceComponent } from './detail-police/detail-police.component';

const routes: Routes = [{
  path:'',
  component:MainPoliceComponent,
  children:[
    {
      path:'list',
      component:AllPolicesComponent
    },
    {
      path:'add',
      component:AddPoliceComponent
    },
    {
      path:'dashboard',
      component:DashboardPoliceComponent
    },
    {
      path:'update/:id',
      component:UpdatePoliceComponent
    },
    {
      path:':id',
      component:DetailPoliceComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliceRoutingModule { }
