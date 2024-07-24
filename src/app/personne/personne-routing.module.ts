import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPersonneComponent } from './dashboard-personne/dashboard-personne.component';
import { ListPersonneComponent } from './list-personne/list-personne.component';
import { UpdatePersonneComponent } from './update-personne/update-personne.component';
import { AddPersonneComponent } from './add-personne/add-personne.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardPersonneComponent,
    
    children:[
      
      {
        path:'list',
        component:ListPersonneComponent,
      },
      {
        path:'update/:id',
        component:UpdatePersonneComponent
      },
      {
        path:'add',
        component:AddPersonneComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonneRoutingModule { }
