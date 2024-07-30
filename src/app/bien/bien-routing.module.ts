import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBienComponent } from './main-bien/main-bien.component';
import { ListBiensComponent } from './list-biens/list-biens.component';
import { AddBienComponent } from './add-bien/add-bien.component';
import { UpdateBienComponent } from './update-bien/update-bien.component';
import { DashboardBienComponent } from './dashboard-bien/dashboard-bien.component';
import { DetailBienComponent } from './detail-bien/detail-bien.component';

const routes: Routes = [
  {
    path:'',
    component:MainBienComponent,
    children:[
      {
        path:'list',
        component:ListBiensComponent
      },
      {
        path:'add',
        component:AddBienComponent
      },
      {
        path:'dashboard',
        component:DashboardBienComponent
      },
      {
        path:'types',
        loadChildren:()=>import('../bien/typebien/typebien.module').then(tb=>tb.TypebienModule)
      },
      {
        path:'update/:id',
        component:UpdateBienComponent
      },
      {
        path:':id',
        component:DetailBienComponent
      }
    ]
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BienRoutingModule { }
