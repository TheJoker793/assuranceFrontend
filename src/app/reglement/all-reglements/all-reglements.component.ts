import { Component, OnInit } from '@angular/core';
import { Reglement } from '../Reglement.model';
import { ReglementService } from '../reglementService/reglement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-reglements',
  templateUrl: './all-reglements.component.html',
  styleUrl: './all-reglements.component.css'
})
export class AllReglementsComponent implements OnInit{
  reglements:Reglement[]=[];
  constructor(private reglementService:ReglementService,private router:Router){}
  ngOnInit(): void {
    this.loadReglements();
  }
  loadReglements(){
    this.reglementService.allReglements().subscribe(
      (data:Reglement[])=>{
        this.reglements=data
      }
    )
  }  
  goUpdate(reglement:Reglement){
    this.router.navigate(['reglements/update',reglement.id])
  }
  deleteReglement(reglement:any){
    this.reglementService.deleteReglement(reglement.id).subscribe(
      ()=>{
        this.loadReglements();
      }
    )
  }

}
