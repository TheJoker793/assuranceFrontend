import { Component, OnInit } from '@angular/core';
import { Compte } from '../Compte.model';
import { CompteService } from '../compteService/compte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-comptes',
  templateUrl: './list-comptes.component.html',
  styleUrl: './list-comptes.component.css'
})
export class ListComptesComponent implements OnInit{
  comptes:Compte[]=[];
  constructor(private compteService:CompteService,private router:Router ){
    
  }
  ngOnInit(): void {
    this.refresh()
  }
  refresh(){
    this.compteService.allComptes().subscribe(
      (data:Compte[])=>{
        this.comptes=data
      }
    )
  }
  deleteCompte(compte:any){
    this.compteService.deleteCompte(compte.id).subscribe(
      ()=>{
        this.refresh()
      }
    )

  }
  goUpdate(compte:Compte){
    this.router.navigate(['comptes/update',compte.id])
  }
  

}
