import { Component, OnInit } from '@angular/core';
import{ Sinistre} from '../Sinistre.model';
import {SinistreService} from '../serviceSinistre/sinistre.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-sinistres',
  templateUrl: './list-sinistres.component.html',
  styleUrl: './list-sinistres.component.css'
})
export class ListSinistresComponent implements OnInit{
  sinistres:Sinistre[]=[];
  constructor(private sinistreService:SinistreService,private router:Router){}
  ngOnInit(): void {
    this.refresh();
  }
  refresh(){
    this.sinistreService.getAllSinistres().subscribe(
      (data)=>{
        this.sinistres=data;
      }
    )
  }
  goUpdate(sinistre:Sinistre){
    this.router.navigate(['sinistres/update',sinistre.id])
  }
  deleteSinistre(sinistre:any){
    const id=sinistre.id;
    this.sinistreService.deleteSinistre(id).subscribe(
      ()=>{
        this.refresh()
      }
    )

  }

}

