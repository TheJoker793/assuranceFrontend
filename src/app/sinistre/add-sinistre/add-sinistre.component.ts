import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {PersonneService} from '../../personne/servicePersonne/personne.service'
import { Router } from '@angular/router';
import{Situation} from '../../admin/Situation/Situation.model';
import {SinistreService} from '../serviceSinistre/sinistre.service';
import {SituationService} from '../../admin/Situation/SituationService/situation.service';
import { TypeSinistre } from '../Sinistre.model';

@Component({
  selector: 'app-add-sinistre',
  templateUrl: './add-sinistre.component.html',
  styleUrl: './add-sinistre.component.css'
})
export class AddSinistreComponent implements OnInit{
 @Output() personneId!:number;
  libelleControl:FormControl;
 referenceControl:FormControl;
 descriptionControl:FormControl;
 montantExpertiseControl:FormControl;
 montantIndemniserControl:FormControl;
 dateSinistreControl:FormControl;
 dateAjoutControl:FormControl;
 degatMaterielControl:FormControl;
 causeControl:FormControl;
 lieuxControl:FormControl;
 objetControl:FormControl;
 dateValidation:FormControl;
 typeSinistreId:FormControl;
 situationId:FormControl;
 personneForm:FormGroup;
 sinistreForm:FormGroup;
 situations:Situation[]=[];
 types:TypeSinistre[]=[]



 constructor(private fb:FormBuilder,private personneService:PersonneService,
  private sinistreService:SinistreService,private router:Router,
  private situationService:SituationService,
 ){

  this.personneForm=fb.group({
    cin:new FormControl(''),
    prenom:new FormControl(''),
    nom:new FormControl(''),
    dateNaissance:new FormControl(''),
  });

  this.libelleControl=fb.control('');
  this.referenceControl=fb.control('');
  this.descriptionControl=fb.control('');
  this.montantExpertiseControl=fb.control(null);
  this.montantIndemniserControl=fb.control(null);
  this.dateSinistreControl=fb.control('');
  this.dateAjoutControl=fb.control('');
  this.degatMaterielControl=fb.control('');
  this.causeControl=fb.control('');
  this.objetControl=fb.control('');
  this.lieuxControl=fb.control('');
  this.dateValidation=fb.control('');
  this.typeSinistreId=fb.control(null);
  this.situationId=fb.control(null);



  this.sinistreForm=fb.group({
    libelle:this.libelleControl,
    reference:this.referenceControl,
    description:this.descriptionControl,
    montantExpertise:this.montantExpertiseControl,
    montantIndemniser:this.montantIndemniserControl,
    dateSinistre:this.dateSinistreControl,
    dateAjout:this.dateAjoutControl,
    degatMateriel:this.degatMaterielControl,
    cause:this.causeControl,
    lieux:this.lieuxControl,
    objet:this.objetControl,
    dateValidation:this.dateValidation,
    typeSinistreId:this.typeSinistreId,
    situationId:this.situationId,
    personneId:this.personneId,
  });

 }
  ngOnInit(): void {
    this.situationService.getAllSituations().subscribe(
      (data)=>{
        this.situations=data;
      }
    );
    this.sinistreService.getAllTypeSinistre().subscribe(
      (data)=>{
        this.types=data;
        console.log(this.types);
        
      }
    )
  }
  getInformationPersonne(){
    this.personneService.clientById(this.personneId).subscribe(
     (data)=>{
      this.personneForm=this.fb.group({
        cin:new FormControl(data.cin),
        prenom:new FormControl(data.prenom),
        nom:new FormControl(data.nom),
        dateNaissance:new FormControl(data.dateNaissance)

      })
     } 
    )
  } 
 onchangePersonne(event:any){
  this.personneId=event.target.value;
  
  this.getInformationPersonne();
  this.sinistreForm.patchValue({
    personneId:this.personneId
  })
  
 }

 ajouterSinistre(){

  console.log(this.sinistreForm.value);
   
  this.sinistreService.addSinistre(this.sinistreForm.value).subscribe(
    ()=>{
      console.log(this.sinistreForm.value);
      
      this.router.navigate(['sinistres/list'])
    }
  )
 }


}
