import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComptesBancaireComponent } from './main-comptes-bancaire/main-comptes-bancaire.component';
import { AllComptesBancairesComponent } from './all-comptes-bancaires/all-comptes-bancaires.component';
import { AddComptesBancaireComponent } from './add-comptes-bancaire/add-comptes-bancaire.component';
import { UpdateComptesBancaireComponent } from './update-comptes-bancaire/update-comptes-bancaire.component';

const routes: Routes = [
  {
  path:'',
  component:MainComptesBancaireComponent,
  children:[
    {
      path:'list',
      component:AllComptesBancairesComponent
    },
    {
      path:'add',
      component:AddComptesBancaireComponent
    },
    {
      path:'update/:id',
      component:UpdateComptesBancaireComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComptebancaireRoutingModule { }
