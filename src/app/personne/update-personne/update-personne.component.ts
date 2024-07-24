import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PersonneService } from '../servicePersonne/personne.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Structure } from '../../structure/model.structure';
import { StructureService } from '../../structure/structureService/structure.service';

@Component({
  selector: 'app-update-personne',
  templateUrl: './update-personne.component.html',
  styleUrl: './update-personne.component.css'
})
export class UpdatePersonneComponent implements OnInit{

  structures:Structure[]=[]
  personneId!:number;
  personneForm:FormGroup;
  constructor(private personneService:PersonneService,private fb:FormBuilder,
    private activatedRoute:ActivatedRoute,private route:Router,
  private structureService:StructureService){
    this.personneForm=this.fb.group({
      id:new FormControl(null),
      cin:new FormControl(''),
      prenom:new FormControl(''),
      nom:new FormControl(''),
      dateNaissance:new FormControl(''),
      structureId:new FormControl(null)
    })
  }
  ngOnInit(): void {
    this.structureService.allStructure().subscribe(
      (data)=>this.structures=data
    )
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.personneId=params['id'];
        this.personneService.clientById(this.personneId).subscribe(
          (data)=>{
            this.personneForm=this.fb.group({
              id:new FormControl(data.id), 
              cin:new FormControl(data.cin),
              prenom:new FormControl(data.prenom),
              nom:new FormControl(data.nom),
              dateNaissance:new FormControl(data.dateNaissance),
              structureId:new FormControl(data.structureId)

            })
          }
        )
      }
    )
  }
  confirmUpdate(){
    this.personneService.updateClient(this.personneId,this.personneForm.value).subscribe(
      ()=>{
        this.route.navigate(['personnes/list'])
      }
    )
  }

}
