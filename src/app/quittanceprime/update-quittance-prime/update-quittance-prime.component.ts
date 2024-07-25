import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { QuittanceprimeService } from '../serviceQuittancePrime/quittanceprime.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-quittance-prime',
  templateUrl: './update-quittance-prime.component.html',
  styleUrl: './update-quittance-prime.component.css'
})
export class UpdateQuittancePrimeComponent implements OnInit{
  @Output() quittancePrimeId!:number
  qpForm!:FormGroup
  constructor(private fb:FormBuilder,private qpService:QuittanceprimeService,
    private router:Router,private activatedRoute:ActivatedRoute
  ){
    this.qpForm=this.fb.group({
      id:new FormControl(null),
      libelle:new FormControl(''),
      montant:new FormControl(null),
      dateAjout:new FormControl('')
    })
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.quittancePrimeId=params['id'];
        var id=this.quittancePrimeId=params['id'];
        this.qpService.getQuittancePrimeById(id).subscribe((data)=>{
          this.qpForm=this.fb.group({
            id:new FormControl(data.id),
            libelle:new FormControl(data.libelle),
            montant:new FormControl(data.montant),
            dateAjout:new FormControl(data.dateAjout )
          })
        })
      }
    )
  }
  updateQp(){
    this.qpService.updateQuittancePrime(this.quittancePrimeId,this.qpForm.value).subscribe(
      ()=>{
        this.router.navigate(['quittancePrimes/list'])
      }
    )
  }

}
