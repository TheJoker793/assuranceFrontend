import { Component, OnInit } from '@angular/core';
import { BienService } from '../../serviceBien/bien.service';
import { Router } from '@angular/router';
import { TypeBien } from '../../serviceBien/Bien.model';

@Component({
  selector: 'app-all-type-biens',
  templateUrl: './all-type-biens.component.html',
  styleUrl: './all-type-biens.component.css'
})
export class AllTypeBiensComponent implements OnInit{
  types:TypeBien[]=[];
  constructor(private typeService:BienService,private router:Router){}
  ngOnInit(): void {
    this.refresh()
  }
  refresh(){
    this.typeService.AllTypeBien().subscribe(
      (data)=>this.types=data
    )
  }
  goUpdate(type:TypeBien){
    this.router.navigate(['biens/types/update',type.id])
  }
  deleteType(type:any){
    this.typeService.deleteTypeBien(type.id).subscribe(
      ()=>{
        this.refresh();
      }
    )
  }


}
