import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {ReglementService} from '../reglementService/reglement.service';
import {SituationService} from '../../admin/Situation/SituationService/situation.service';
import {PersonneService} from '../../personne/servicePersonne/personne.service'
import { Situation } from '../../admin/Situation/Situation.model';
import { TypeReglement } from '../Reglement.model';

@Component({
  selector: 'app-add-reglement',
  templateUrl: './add-reglement.component.html',
  styleUrl: './add-reglement.component.css'
})
export class AddReglementComponent implements OnInit{
  @Output() personneId!:number;
  @Output() compteBancaireId!:number;

  situations:Situation[]=[];
  types:TypeReglement[]=[];
  numeroControl:FormControl;
  dateRemiseControl:FormControl;
  situationIdControl:FormControl;
  typeReglementIdContol:FormControl;
  reglementForm:FormGroup;
  personneForm:FormGroup;
  compteBancaireForm:FormGroup;
  constructor(private fb:FormBuilder,private router:Router,
    private reglementService:ReglementService,
    private situationService:SituationService,
    private personneService:PersonneService,
  ){
    this.numeroControl=fb.control('');
    this.dateRemiseControl=fb.control('');
    this.situationIdControl=fb.control('');
    this.typeReglementIdContol=fb.control('');
    this.reglementForm=fb.group({
      numero:this.numeroControl,
      dateRemise:this.dateRemiseControl,
      situationId:this.situationIdControl,
      typeReglementId:this.typeReglementIdContol,
      personneId:this.personneId,
      compteBancaireId:this.compteBancaireId,

    });
    this.personneForm=fb.group({
      id:new FormControl(null),
      cin:new FormControl(''),
      prenom:new FormControl(''),
      nom:new FormControl('')
    });
    this.compteBancaireForm=fb.group({
      id:new FormControl(null),
      libelle:new FormControl(''),
      rib:new FormControl(''),
      cle:new FormControl('')
    })





  }
  ngOnInit(): void {
    this.loadSituation();
    this.loadTypeReglements();

  }
  loadSituation(){
    this.situationService.getAllSituations().subscribe(
      (data)=>{
        this.situations=data
      }
    )
  }
  loadTypeReglements(){
    this.reglementService.allTypeReglement().subscribe(
      (data)=>{
        this.types=data
      }
    )
  }
  loadPersone(){
  
    this.personneService.clientById(this.personneId).subscribe(
      (data)=>{
        
        this.personneForm=this.fb.group({
          id:new FormControl(data.id),
          cin:new FormControl(data.cin),
          prenom:new FormControl(data.prenom),
          nom:new FormControl(data.nom)
        })
      }
    )
  }
  loadCompteBancaire(){
    this.reglementService.getCompteBancaireById(this.compteBancaireId).subscribe(
      (data)=>{
        this.compteBancaireForm=this.fb.group({
          id:new FormControl(data.id),
          libelle:new FormControl(data.libelle),
          rib:new FormControl(data.rib),
          cle:new FormControl(data.cle)
        })
      }
    )
  }
  onChangePersonne(event:any){
    this.personneId=event.target.value;
    this.loadPersone();

    this.reglementForm.patchValue({
      personneId:this.personneId
    })
  }
  onChangeCompteBancaire(event:any){
    this.compteBancaireId=event.target.value;
    this.loadCompteBancaire();
    this.reglementForm.patchValue({
      compteBancaireId:this.compteBancaireId
    })
  }
  ajouterReglement(){
    console.log(this.reglementForm.value);
    
    this.reglementService.addReglement(this.reglementForm.value).subscribe(
      ()=>{
        this.router.navigate(['reglements/list'])
      }
    )
  }

}
