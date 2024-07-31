import { Component, OnInit } from '@angular/core';
import { DossierSinistre } from '../../Sinistre.model';
import { SinistreService } from '../../serviceSinistre/sinistre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-dossiers-sinistres',
  templateUrl: './all-dossiers-sinistres.component.html',
  styleUrl: './all-dossiers-sinistres.component.css'
})
export class AllDossiersSinistresComponent implements OnInit{
  dossierSinistres:DossierSinistre[]=[];
  constructor(private dsService:SinistreService,private router:Router){

  }
  ngOnInit(): void {
    this.refresh()
  }
  refresh(){
    this.dsService.getAllDossiersSinistre().subscribe(
      (data)=>this.dossierSinistres=data,
    )
  }
  deleteDs(ds:any){
    this.dsService.deleteDossierSinistre(ds.id).subscribe(
      ()=>{
        this.refresh();
      }
    )
  }
  goUpdate(ds:DossierSinistre){
    this.router.navigate(['sinistres/dossierSinitres/update',ds.id])
  }

}
