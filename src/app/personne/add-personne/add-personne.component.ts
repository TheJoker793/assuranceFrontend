import { Component, OnInit } from '@angular/core';
import { Structure } from '../../structure/model.structure';
import { StructureService } from '../../structure/structureService/structure.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PersonneService } from '../servicePersonne/personne.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrl: './add-personne.component.css'
})
export class AddPersonneComponent implements OnInit{
  structures:Structure[]=[];
  cinControl:FormControl;
  prenomControl:FormControl;
  nomControl:FormControl;
  dateNassanceControl:FormControl;
  structureId:FormControl;
  personneForm:FormGroup;
  constructor(private structureService:StructureService,fb:FormBuilder,private personneService:PersonneService,private router:Router){
    this.cinControl=fb.control('');
    this.prenomControl=fb.control('');
    this.nomControl=fb.control('');
    this.dateNassanceControl=fb.control('')
    this.structureId=fb.control('');
    this.personneForm=fb.group({
      cin:this.cinControl,
      prenom:this.prenomControl,
      nom:this.nomControl,
      dateNaissance:this.dateNassanceControl,
      structureId:this.structureId
    })

  }
  ngOnInit(): void {
    this.structureService.allStructure().subscribe(
      (data:Structure[])=>this.structures=data
    )
  }
  addPersonne(){
    this.personneService.addClient(this.personneForm.value).subscribe(
      ()=>{
        this.router.navigate(['personnes/list'])
      }
    )
  }


}
