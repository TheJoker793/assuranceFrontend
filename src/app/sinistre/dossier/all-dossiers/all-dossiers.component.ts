import { Component, OnInit } from '@angular/core';
import { Dossier } from '../../Sinistre.model';
import { SinistreService } from '../../serviceSinistre/sinistre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-dossiers',
  templateUrl: './all-dossiers.component.html',
  styleUrl: './all-dossiers.component.css'
})
export class AllDossiersComponent implements OnInit{
  dossiers:Dossier[]=[];
  constructor(private dossierService:SinistreService,private router:Router){}
  ngOnInit(): void {
    this.refresh()
  }
  refresh(){
    this.dossierService.getAllDossiers().subscribe(
      (data)=>{
        this.dossiers=data

      }
    )
  }
  deleteDossier(dossier:any){
    this.dossierService.deleteDossier(dossier.id).subscribe(
      ()=>{
        this.refresh();
      }
    )
  }
  goUpdate(dossier:Dossier){
    this.router.navigate(['sinistres/dossiers/update',dossier.id])
  }
  

}
