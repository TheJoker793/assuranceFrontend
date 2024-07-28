import { Component, OnInit } from '@angular/core';
import { MarchandiseService } from '../ServiceMarchandise/marchandise.service';
import { Router } from '@angular/router';
import { Marchandise } from '../Marchandise.model';

@Component({
  selector: 'app-list-marchandises',
  templateUrl: './list-marchandises.component.html',
  styleUrl: './list-marchandises.component.css'
})
export class ListMarchandisesComponent implements OnInit{
  marchandises:Marchandise[]
  constructor(private marchandiseService:MarchandiseService,private router:Router){
    this.marchandises=[]
  }
  ngOnInit(): void {
    this.refresh();
  }
  refresh(){
    this.marchandiseService.getAllMarchandise().subscribe(
      (data)=>{
        this.marchandises=data
      }
    )
  }
  gotoUpdate(marchandise:Marchandise){
    this.router.navigate(['marchandises',marchandise.id])
  }
  deleteMarchandise(marchandise:any){
    this.marchandiseService.deleteMarchandise(marchandise.id).subscribe(
      ()=>{
        this.refresh();
      }
    )
  }

}
