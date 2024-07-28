import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {AssureurService}from '../ServiceAssureur/assureur.service'
@Component({
  selector: 'app-update-assureur',
  templateUrl: './update-assureur.component.html',
  styleUrl: './update-assureur.component.css'
})
export class UpdateAssureurComponent implements OnInit {
  assureurId!:number;
  assureurForm:FormGroup;

  constructor(private assureurService:AssureurService,private router:Router,
    private activatedRouter:ActivatedRoute,private fb:FormBuilder){
    this.assureurForm=this.fb.group({
      id:new FormControl(null),
      designation:new FormControl(''),
      address:new FormControl('')
    })
  }
  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      (params)=>{
        this.assureurId=params['id'];
        this.assureurService.getAssureurById(this.assureurId).subscribe(
          (data)=>{
            this.assureurForm=this.fb.group({
              id:new FormControl(data.id),
              designation:new FormControl(data.designation),
              address:new FormControl(data.address)
            })
          }
        )
      }
    )
  }


  
  
  
  confirmUpdate(){
    const id=this.assureurId;
    const assureur=this.assureurForm.value
    this.assureurService.updateAssureur(id,assureur).subscribe(
      ()=>{
        this.router.navigate(['assureurs/list'])
      }
    )
  }

}
