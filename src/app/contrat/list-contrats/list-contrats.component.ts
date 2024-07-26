import { Component, OnInit } from '@angular/core';
import { Contrat } from '../Contrat.model';
import { ContratService } from '../contratService/contrat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-contrats',
  templateUrl: './list-contrats.component.html',
  styleUrl: './list-contrats.component.css'
})
export class ListContratsComponent implements OnInit{
  contrats:Contrat[]=[];
  constructor(private contratService:ContratService,private router:Router){

  }
  
  ngOnInit(): void {
    this.refresh();
  }
  refresh(){
    this.contratService.getAllContrats().subscribe(
      (data)=>this.contrats=data
    )
  }
  goToUpdate(contrat:Contrat){
    this.router.navigate(['contrats/update',contrat.id])
  }
  deleteContrat(contrat:any){
    this.contratService.deleteContrat(contrat.id).subscribe(
      ()=>{
         this.refresh();
      }
    )
  }
  

}
