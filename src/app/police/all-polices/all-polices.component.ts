import { Component, OnInit } from '@angular/core';
import { Police } from '../policeService/Police.model';
import { PoliceService } from '../policeService/police.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-polices',
  templateUrl: './all-polices.component.html',
  styleUrl: './all-polices.component.css'
})
export class AllPolicesComponent implements OnInit{
  polices:Police[]=[];
  constructor(private policeService:PoliceService,private router:Router){

  }
  ngOnInit(): void {
    this.refresh();
  }
  refresh(){
    this.policeService.getAllPolices().subscribe(
      (data)=>{
        this.polices=data;
      }
    )
  }
  goUpdate(police:Police){
    this.router.navigate(['polices/update',police.id])
  }
  deletePolice(police:any){
    this.policeService.deletePolice(police.id).subscribe(
      ()=>{
        this.refresh();
      }
    )

  }

}
