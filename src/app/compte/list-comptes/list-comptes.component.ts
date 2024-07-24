import { Component, OnInit } from '@angular/core';
import { Compte } from '../Compte.model';
import { CompteService } from '../compteService/compte.service';

@Component({
  selector: 'app-list-comptes',
  templateUrl: './list-comptes.component.html',
  styleUrl: './list-comptes.component.css'
})
export class ListComptesComponent implements OnInit{
  comptes:Compte[]=[];
  constructor(private compteService:CompteService){

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
  

}
