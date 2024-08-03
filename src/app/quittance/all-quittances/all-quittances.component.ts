import { Component, OnInit } from '@angular/core';
import { Quittance } from '../Quittance.model';
import { QuittanceService } from '../quittanceService/quittance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-quittances',
  templateUrl: './all-quittances.component.html',
  styleUrl: './all-quittances.component.css'
})
export class AllQuittancesComponent implements OnInit{
  quittances:Quittance[]=[];
  constructor(private quittanceService:QuittanceService,private router:Router){}
  ngOnInit(): void {
    this.refresh()
  }
  refresh(){
    this.quittanceService.getAllQuittance().subscribe(
      (data)=>{
        this.quittances=data
      }
    )
  }
  deleteQuittance(q:any){
    this.quittanceService.deleteQuittance(q.id).subscribe(
      ()=>{
        this.refresh();
      }
    )
  }
  goUpdate(q:Quittance){
    this.router.navigate(['quittances/update',q.id])
  }

}
