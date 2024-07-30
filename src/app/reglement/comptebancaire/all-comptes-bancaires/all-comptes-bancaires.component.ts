import { Component, OnInit } from '@angular/core';
import { CompteBancaire } from '../../Reglement.model';
import {ReglementService} from '../../reglementService/reglement.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-comptes-bancaires',
  templateUrl: './all-comptes-bancaires.component.html',
  styleUrl: './all-comptes-bancaires.component.css'
})
export class AllComptesBancairesComponent implements OnInit{
  comptes:CompteBancaire[]=[];
  constructor(private cbService:ReglementService,private router :Router){

  }
  ngOnInit(): void {
    this.loadCb();
  }
  loadCb(){
    this.cbService.getAllCompteBancaires().subscribe(
      (data)=>{
        this.comptes=data;
      }
    )
  }
  deleteCompte(cb:any){
    this.cbService.deleteCompteBancaire(cb.id).subscribe(
      ()=>{
        this.loadCb();
      }
    )
  }
  goUpdate(cb:CompteBancaire){
    this.router.navigate(['reglements/compteBancaires/update',cb.id]);

  }

}
