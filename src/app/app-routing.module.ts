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
  },
  {
    path:'articles',
    loadChildren:()=>import('./article/article.module').then(a=>a.ArticleModule)
  },
  {
    path:'contrats',
    loadChildren:()=>import('./contrat/contrat.module').then(c=>c.ContratModule)
  },
  {
    path:'quittancePrimes', 
    loadChildren:()=>import('./quittanceprime/quittanceprime.module').then(qp=>qp.QuittanceprimeModule)
  },
  {
    path:'assureurs',
    loadChildren:()=>import('./assureur/assureur.module').then(a=>a.AssureurModule)
  },
  {
    path:'marchandises',
    loadChildren:()=>import('./marchandise/marchandise.module').then(m=>m.MarchandiseModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
