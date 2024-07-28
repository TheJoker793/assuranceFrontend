import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAssureurComponent } from './main-assureur/main-assureur.component';
import { ListAssureursComponent } from './list-assureurs/list-assureurs.component';
import { AddAssureurComponent } from './add-assureur/add-assureur.component';
import { UpdateAssureurComponent } from './update-assureur/update-assureur.component';

const routes: Routes = [{
  path:'',
  component:MainAssureurComponent,
  children:[
    {
      path:'list',
      component:ListAssureursComponent
    },
    {
      path:'add',
      component:AddAssureurComponent
    },
    {
      path:'update/:id',
      component:UpdateAssureurComponent
    },
    
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssureurRoutingModule { }
