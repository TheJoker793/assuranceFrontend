import { Component, OnInit } from '@angular/core';
import{Assureur} from '../Assureur.model';
import {AssureurService} from '../ServiceAssureur/assureur.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-assureurs',
  templateUrl: './list-assureurs.component.html',
  styleUrl: './list-assureurs.component.css'
})
export class ListAssureursComponent implements OnInit{
  assureurs:Assureur[]=[];
  constructor(private assureurService:AssureurService,private router:Router){

  }
  ngOnInit(): void {
    this.refresh();
  }
  refresh(){
    this.assureurService.getAllAssureurs().subscribe((data)=>{
      this.assureurs=data;
      

    }) 
  }
  goUpdate(assureur:Assureur){
    this.router.navigate(['assureurs/update',assureur.id]);
  }
  deleteAssureur(assureur:any){
    this.assureurService.deleteAssureur(assureur.id).subscribe(
      ()=>{
        this.refresh()
      }
    )
    
    
  }

}
