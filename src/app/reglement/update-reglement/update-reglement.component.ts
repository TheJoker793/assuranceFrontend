import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TypeReglement } from '../Reglement.model';
import { Situation } from '../../admin/Situation/Situation.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ReglementService } from '../reglementService/reglement.service';
import { SituationService } from '../../admin/Situation/SituationService/situation.service';

@Component({
  selector: 'app-update-reglement',
  templateUrl: './update-reglement.component.html',
  styleUrl: './update-reglement.component.css'
})
export class UpdateReglementComponent implements OnInit{
  @Output()reglementId!:number
  types:TypeReglement[]=[];
  situations:Situation[]=[];
  reglementForm!:FormGroup;
  constructor(private activeRoute:ActivatedRoute,private router:Router,
    private reglementService:ReglementService,private fb:FormBuilder,
    private situationService:SituationService,
  ){
    this.reglementForm=this.fb.group({
      id:new FormControl(null),
      numero:new FormControl(''),
      dateRemise:new FormControl(''),
      personneId:new FormControl(null),
      cinPersonne:new FormControl(''),
      prenomPersonne:new FormControl(''),
      nomPersonne:new FormControl(null),
      typeReglementId:new FormControl(null),
      situationId:new FormControl(null),
      compteBancaireId:new FormControl(null),
      libelleCompteBancaire:new FormControl(''),
      ribCompteBancaire:new FormControl(''),
      cleCompteBancaire:new FormControl('')
      })
  }
  ngOnInit(): void {
    this.loadSituation();
    this.loadType();
    this.activeRoute.params.subscribe(
      (parame)=>{
        this.reglementId=parame['id'];
        this.reglementService.ReglementById(this.reglementId).subscribe(
          (data)=>{
            this.reglementForm=this.fb.group({
              numero:new FormControl(data.numero),
              dateRemise:new FormControl(data.dateRemise),
              situationId:new FormControl(data.situationId),
              typeReglementId:new FormControl(data.typeReglementId),
              personneId:new FormControl(data.id),
              cinPersonne:new FormControl(data.cinPersonne),
              prenomPersonne:new FormControl(data.prenomPersonne),
              nomPersonne:new FormControl(data.nomPersonne),
              compteBancaireId:new FormControl(data.compteBancaireId),
              libelleCompteBancaire:new FormControl(data.libelleCompteBancaire),
              ribCompteBancaire:new FormControl(data.ribCompteBancaire),
              cleCompteBancaire:new FormControl(data.ribCompteBancaire)
            })
          }
        )
      }
    )
  }
  
  loadSituation(){
    this.situationService.getAllSituations().subscribe(
      (data)=>{
        this.situations=data;
      }
    )
  }
  loadType(){
    this.reglementService.allTypeReglement().subscribe(
      (data)=>{
        this.types=data;
      }
    )
  }
  confirmUpdate(){}

}
