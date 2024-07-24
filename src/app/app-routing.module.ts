import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'personnes',
    loadChildren:()=>import('./personne/personne.module').then(p=>p.PersonneModule)
  },
  {
    path:'comptes',
    loadChildren:()=>import('./compte/compte.module').then(c=>c.CompteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
