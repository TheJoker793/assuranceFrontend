import { Component, OnInit } from '@angular/core';
import { Bien } from '../serviceBien/Bien.model';
import { BienService } from '../serviceBien/bien.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-biens',
  templateUrl: './list-biens.component.html',
  styleUrl: './list-biens.component.css'
})
export class ListBiensComponent implements OnInit{
  biens:Bien[]=[]
  constructor(private bienService:BienService,private router:Router){}
  ngOnInit(): void {
    this.refresh();  
  }
  refresh(){
    this.bienService.getAllBiens().subscribe(
      (data)=>this.biens=data
    )
  }
  deleteBien(bien:any){
    this.bienService.deleteBien(bien.id).subscribe(
      ()=>{
        this.refresh();
      }

    )
  }
  goUpdate(bien:Bien){
    this.router.navigate(['biens/update',bien.id])
  }

}
