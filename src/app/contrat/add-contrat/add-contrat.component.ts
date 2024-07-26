import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { QuittanceprimeService } from '../../quittanceprime/serviceQuittancePrime/quittanceprime.service';
import { NatureContratService } from '../../naturecontrat/natureContratService/nature-contrat.service';
import { Router } from '@angular/router';
import { NatureContrat } from '../../naturecontrat/NatureContrat.model';
import { ContratService } from '../contratService/contrat.service';

@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrl: './add-contrat.component.css'
})
export class AddContratComponent implements OnInit{
  natures:NatureContrat[]=[];
  @Output() quittancePrimeId!:number;
  natureContratId!:number;
  dateEffetControl:FormControl;
  dateEcheanceControl:FormControl;
  dateSignatureControl:FormControl;
  exerciceControle:FormControl;
  contratForme:FormGroup;
  qpForm!:FormGroup;

  constructor(private fb:FormBuilder,private qpService:QuittanceprimeService,
    private natureContratService:NatureContratService,private router:Router,
    private contratService:ContratService
  ){
    
    this.dateEcheanceControl=this.fb.control('');
    this.dateEffetControl=this.fb.control('');
    this.dateSignatureControl=this.fb.control('');
    this.exerciceControle=this.fb.control(null);
    this.contratForme= this.fb.group({
      dateEffet:this.dateEffetControl,
      dateEcheance:this.dateEcheanceControl,
      dateSignature:this.dateSignatureControl,
      exercice:this.exerciceControle,
      natureContratId:this.natureContratId,
      quittancePrimeId:this.quittancePrimeId
    })
    this.qpForm=this.fb.group({
      id:new FormControl(null),
      libelle:new FormControl(''),
      montant:new FormControl(null),
      dateAjout:new FormControl('')
    })
  } 
  ngOnInit(): void {
    this.loadNatures();
    
  }
  onChangeQuittanceId(event:any){
    console.log(event.target.value);
    
    this.quittancePrimeId=event.target.value;
    this.loadQuittncePrime();
    

  }
  loadNatures(){
    this.natureContratService.getAllNature().subscribe((data)=>{
      this.natures=data
    })
  }
  loadQuittncePrime(){
    this.qpService.getQuittancePrimeById(this.quittancePrimeId).subscribe(
      (data)=>{
        this.qpForm=this.fb.group({
          id:new FormControl(data.id),
          libelle:new FormControl(data.libelle),
          montant:new FormControl(data.montant),
          dateAjout:new FormControl(data.dateAjout)
        })
      }
    );
    this.contratForme.patchValue({
      quittancePrimeId:this.quittancePrimeId
    })
  }
  ajouterContrat(){
    this.contratService.addContrat(this.contratForme.value).subscribe(
      ()=>{
        console.log(this.contratForme.value);
        
        this.router.navigate(['contrats/list'])
      }
    )
  }
  
  
}
