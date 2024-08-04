import { Component, OnInit } from '@angular/core';
import { Devis } from '../Quittance.model';
import { ContratService } from '../../contrat/contratService/contrat.service';
import { QuittanceService } from '../quittanceService/quittance.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-devise',
  templateUrl: './devise.component.html',
  styleUrl: './devise.component.css'
})
export class DeviseComponent implements OnInit {
  devises:Devis[]=[];
  libelleControl:FormControl;
  devisForm:FormGroup;
  constructor(private devisService:QuittanceService,private fb:FormBuilder){
    this.libelleControl=fb.control('');
    this.devisForm=fb.group({
      libelle:this.libelleControl
    })
  }
  ngOnInit(): void {
    this.refresh();
  }
  refresh(){
    this.devisService.AllDevises().subscribe(
      (data)=>{
        this.devises=data;
      }
    )
  }
  addDevis(){
    this.devisService.AddDevises(this.devisForm.value).subscribe(
      ()=>{
        this.refresh();
        this.libelleControl=this.fb.control('')
      }
    )
  }
  deleteDevis(devis:any){
    this.devisService.deleteDevis(devis.id).subscribe(
      ()=>{
        this.refresh();
      }
    )

  }

}
