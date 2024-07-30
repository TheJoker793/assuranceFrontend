import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComptebancaireRoutingModule } from './comptebancaire-routing.module';
import { AllComptesBancairesComponent } from './all-comptes-bancaires/all-comptes-bancaires.component';
import { AddComptesBancaireComponent } from './add-comptes-bancaire/add-comptes-bancaire.component';
import { MainComptesBancaireComponent } from './main-comptes-bancaire/main-comptes-bancaire.component';
import { UpdateComptesBancaireComponent } from './update-comptes-bancaire/update-comptes-bancaire.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllComptesBancairesComponent,
    AddComptesBancaireComponent,
    MainComptesBancaireComponent,
    UpdateComptesBancaireComponent
  ],
  imports: [
    CommonModule,
    ComptebancaireRoutingModule,
    ReactiveFormsModule
  ]
})
export class ComptebancaireModule { }
