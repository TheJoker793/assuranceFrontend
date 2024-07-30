import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTypeBienComponent } from './main-type-bien/main-type-bien.component';
import { AllTypeBiensComponent } from './all-type-biens/all-type-biens.component';
import { AddTypeBienComponent } from './add-type-bien/add-type-bien.component';
import { DashboardTypeBienComponent } from './dashboard-type-bien/dashboard-type-bien.component';
import { UpdateTypeBienComponent } from './update-type-bien/update-type-bien.component';

const routes: Routes = [
  {
    path:'',
    component:MainTypeBienComponent,
    children:[
      {
        path:'list',
        component:AllTypeBiensComponent
      },
      {
        path:'add',
        component:AddTypeBienComponent
      },
      {
        path:'dashboard',
        component:DashboardTypeBienComponent
      },
      {
        path:'update/:id',
        component:UpdateTypeBienComponent
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypebienRoutingModule { }
