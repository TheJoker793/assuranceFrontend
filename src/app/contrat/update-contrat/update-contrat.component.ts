import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContratService } from '../contratService/contrat.service';
import { QuittanceprimeService } from '../../quittanceprime/serviceQuittancePrime/quittanceprime.service';
import { NatureContrat } from '../Contrat.model';

@Component({
  selector: 'app-update-contrat',
  templateUrl: './update-contrat.component.html',
  styleUrl: './update-contrat.component.css'
})
export class UpdateContratComponent implements OnInit{
  @Output() contratId!:number;
  @Output() quittancePrimeId!:number;
  natures:NatureContrat[]=[];

  contratForm:FormGroup;
  quittancePrimeForm:FormGroup;
  constructor(private fb:FormBuilder,private activatedRoute:ActivatedRoute,
  private contratService:ContratService,private qpService:QuittanceprimeService,
  private router:Router  ){
    this.contratForm=this.fb.group({
      id:new FormControl(null),  
      dateEffet:new FormControl(''),
      dateEcheance:new FormControl(''),
      dateSignature:new FormControl(''),
      exercice:new FormControl(''),
      natureContratId:new FormControl(null),
      quittancePrimeId:new FormControl(null)
    });
    this.quittancePrimeForm=this.fb.group({
      id:new FormControl(null),
      libelle:new FormControl(''),
      montant:new FormControl(null),
      dateAjout:new FormControl('')
    });
  }
  ngOnInit(): void {
    this.contratService.allNatureContrats().subscribe(
      (data)=>{this.natures=data}
    )
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.contratId=params['id'];
        this.contratService.getById(this.contratId).subscribe(
          (data)=>{
            this.contratForm=this.fb.group({
              id:new FormControl(data.id),  
              dateEffet:new FormControl(data.dateEffet),
              dateEcheance:new FormControl(data.dateEcheance),
              dateSignature:new FormControl(data.dateSignature),
              exercice:new FormControl(data.exercice),
              natureContratId:new FormControl(data.natureContratId),
              quittancePrimeId:new FormControl(data.quittancePrimeId)
            });
            console.log(data);
            
            this.qpService.getQuittancePrimeById(data.quittancePrimeId).subscribe(
              (data)=>{
                
                
                this.quittancePrimeForm=this.fb.group({
                  id:new FormControl(data.id),
                  libelle:new FormControl(data.libelle),
                  dateAjout:new FormControl(data.dateAjout),
                  montant:new FormControl(data.montant)
                })
              }
            )

          }
        )

      }
    )
  }
  onChangeQuittanceId(event:any){
    this.quittancePrimeId=event.target.value;
    this.contratForm.patchValue({
      quittancePrimeId:this.quittancePrimeId
    });
    this.qpService.getQuittancePrimeById(this.quittancePrimeId).subscribe(
      (data)=>{
        this.quittancePrimeForm=this.fb.group({
          id:new FormControl(data.id),
          libelle:new FormControl(data.libelle),
          dateAjout:new FormControl(data.dateAjout),
          montant:new FormControl(data.montant)


        })
      }
    )

  }
  confirmUpdate(){
    this.contratService.updateContrat(this.contratId,this.contratForm.value).subscribe(
      ()=>{
          this.router.navigate(['contrats/list'])
      }
    )
  }



}
