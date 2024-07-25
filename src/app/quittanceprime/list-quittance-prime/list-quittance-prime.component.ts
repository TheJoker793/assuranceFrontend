import { Component, OnInit } from '@angular/core';
import { QuittancePrime } from '../QuittancePrime.model';
import { QuittanceprimeService } from '../serviceQuittancePrime/quittanceprime.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-quittance-prime',
  templateUrl: './list-quittance-prime.component.html',
  styleUrl: './list-quittance-prime.component.css'
})
export class ListQuittancePrimeComponent implements OnInit{
  quittancesPrimes:QuittancePrime[]=[]
  constructor(private quittancePrimeService:QuittanceprimeService,private router:Router){}
  ngOnInit(): void {
    this.refresh();
  }
  refresh(){
    this.quittancePrimeService.getAllQuittancePrime().subscribe(
      (data)=>this.quittancesPrimes=data
    )
  }
  deleteQp(qp:any){
    this.quittancePrimeService.deleteQuittancePrime(qp.id).subscribe(
      ()=>{
        this.refresh();
      }
    )
  }
  goUpdate(qp:QuittancePrime){
    this.router.navigate(['quittancePrimes/update',qp.id])
  }

}
