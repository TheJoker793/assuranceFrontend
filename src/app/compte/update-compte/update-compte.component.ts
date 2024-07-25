import { Component, OnInit } from '@angular/core';
import { CompteService } from '../compteService/compte.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-compte',
  templateUrl: './update-compte.component.html',
  styleUrl: './update-compte.component.css'
})
export class UpdateCompteComponent implements OnInit {
  compteId!:number;
  compteForm!:FormGroup;
    constructor(private compteService:CompteService,
      private activatedRoute:ActivatedRoute,
    private router:Router,
  private fb:FormBuilder){
    this.compteForm=this.fb.group({
      id:new FormControl(null),
      numero:new FormControl(''),
      email:new FormControl(''),
      login:new FormControl(''),
      password:new FormControl(''),
      personneId:new FormControl(null),
      cinPersonne:new FormControl(''),
      prenomPersonne:new FormControl(''),
      nomPersonne:new FormControl(''),
      dateNaissancePersonne:new FormControl('')
    })


}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.compteId=params['id'];
      this.compteService.getCompteById(this.compteId).subscribe(
        (data)=>{
          this.compteForm=this.fb.group({
            id:new FormControl(data.id),
            prenomPersonne :new FormControl(data.prenomPersonne),
            nomPersonne:new FormControl(data.nomPersonne),
            cinPersonne:new FormControl(data.cinPersonne),
            dateNaissancePersonne:new FormControl(data.dateNaissancePersonne),
            numero:new FormControl(data.numero),
            email:new FormControl(data.email),
            login:new FormControl(data.login),
            password:new FormControl(data.password)
          })
        }
      );
      console.log(this.compteForm.value);
      
    })
  }
  confirmUpdate(){
    this.compteService.updateCompte(this.compteId,this.compteForm.value).subscribe(
      ()=>{
        this.router.navigate(['comptes/list'])
      }
    )
  }



}
