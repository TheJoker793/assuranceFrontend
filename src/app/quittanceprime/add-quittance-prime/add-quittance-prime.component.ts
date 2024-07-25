import { Component } from '@angular/core';
import { QuittanceprimeService } from '../serviceQuittancePrime/quittanceprime.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-quittance-prime',
  templateUrl: './add-quittance-prime.component.html',
  styleUrl: './add-quittance-prime.component.css'
})
export class AddQuittancePrimeComponent {
  libelleControl:FormControl;
  montantControl:FormControl;
  dateAjoutControl:FormControl;
  qpForm:FormGroup
  constructor(private quittancePrimeService:QuittanceprimeService,private router:Router,fb:FormBuilder)
  {
    this.libelleControl=fb.control('');
    this.montantControl=fb.control('');
    this.dateAjoutControl=fb.control('');
    this.qpForm=fb.group({
      libelle:this.libelleControl,
      montant:this.montantControl,
      dateAjout:this.dateAjoutControl
    });

  }
  addQp(){
    this.quittancePrimeService.addQuittancePrime(this.qpForm.value).subscribe(
      ()=>{
        this.router.navigate(['quittancePrimes/list'])
      }
    )
  }

  
}
