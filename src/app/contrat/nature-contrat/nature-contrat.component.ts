import { Component, OnInit } from '@angular/core';
import { NatureContrat } from '../Contrat.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContratService } from '../contratService/contrat.service';

@Component({
  selector: 'app-nature-contrat',
  templateUrl: './nature-contrat.component.html',
  styleUrl: './nature-contrat.component.css'
})
export class NatureContratComponent implements OnInit{
  natures:NatureContrat[]=[];
  libelleControl:FormControl;
  natureForm:FormGroup;
  constructor(private natureService:ContratService,private fb:FormBuilder){
    this.libelleControl=fb.control('',Validators.required);
    this.natureForm=fb.group({
      libelle:this.libelleControl
    })
  }
  ngOnInit(): void {
    this.loadNatures();
  }
  loadNatures(){
    this.natureService.allNatureContrats().subscribe(
      (data)=>{
        this.natures=data;
      }
    )
  }
  addNature(){
    this.natureService.addNature(this.natureForm.value).subscribe(
      ()=>{
        this.loadNatures();
        this.libelleControl=this.fb.control('')
      }
    )
  }
  deleteNature(nature:any){
    this.natureService.deleteNature(nature.id).subscribe(
      ()=>{
        this.loadNatures();
      }
    )
  }

}
