import { Component, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PersonneService } from '../../personne/servicePersonne/personne.service';
import { CompteService } from '../compteService/compte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-compte',
  templateUrl: './add-compte.component.html',
  styleUrl: './add-compte.component.css'
})
export class AddCompteComponent {
  @Output() personneId!:number;

  numeroControl:FormControl;
  emailControl:FormControl;
  LoginControl:FormControl;
  passwordControl:FormControl;
  /*cinPersonneControl:FormControl;
  prenomPersonneControl:FormControl;
  nomPersonneControl:FormControl;
  dateNaissancePersonne:FormControl;*/
  perosnneForm:FormGroup;
  compteForm:FormGroup;
  constructor(private fb:FormBuilder,
    private personneService:PersonneService,
    private compteService:CompteService,
    private router:Router
  ){
    this.perosnneForm=fb.group({
      cin:new FormControl(''),
      dateNaissance:new FormControl(''),
      prenom:new FormControl(''),
      nom:new FormControl('') 
    });
    this.numeroControl=fb.control('');
    this.emailControl=fb.control('');
    this.LoginControl=fb.control('');
    this.passwordControl=fb.control('')
    this.compteForm=fb.group({
      numero:this.numeroControl,
      email:this.emailControl,
      login:this.LoginControl,
      password:this.passwordControl,
      personneId:this.personneId

    })
  }
  onChangePersonneId(event:any){
    this.personneId=event.target.value;
    this.refresh();
  }
  refresh(){
    this.personneService.clientById(this.personneId).subscribe(
      (data)=>{
        this.perosnneForm=this.fb.group({
          cin:new FormControl(data.cin),
          prenom:new FormControl(data.prenom),
          nom:new FormControl(data.nom),
          dateNaissance:new FormControl(data.dateNaissance)
        })
      }
    );
    this.compteForm.patchValue({
      personneId:this.personneId
    })
  }
  addCompte(){
    this.compteService.addCompte(this.compteForm.value).subscribe(
      ()=>{
        this.router.navigate(['comptes/list'])
      }
    )
  }

}
