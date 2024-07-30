import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BienService } from '../serviceBien/bien.service';
import { Router } from '@angular/router';
import { Structure } from '../../structure/model.structure';
import { TypeBien } from '../serviceBien/Bien.model';
import { StructureService } from '../../structure/structureService/structure.service';

@Component({
  selector: 'app-add-bien',
  templateUrl: './add-bien.component.html',
  styleUrl: './add-bien.component.css'
})
export class AddBienComponent implements OnInit{
  structures:Structure[]=[];
  types:TypeBien[]=[]
  codeControl:FormControl;
  daeAcquisation:FormControl;
  TypeBienIdControl:FormControl;
  structureIdControl:FormControl;
  bienForm:FormGroup;
  constructor(fb:FormBuilder,private bienService:BienService,private router:Router,
    private structureService:StructureService
  ){
    this.codeControl=fb.control('');
    this.daeAcquisation=fb.control('');
    this.TypeBienIdControl=fb.control('');
    this.structureIdControl=fb.control('');
    this.bienForm=fb.group({
      code:this.codeControl,
      daeAcquisation:this.daeAcquisation,
      TypeBienId:this.TypeBienIdControl,
      structureId:this.structureIdControl
    })
  }
  ngOnInit(): void {
    this.loadStructure();
    this.loadTypes();
  }
  loadStructure(){
    this.structureService.allStructure().subscribe(
      (data)=>{this.structures=data}
    )
  }
  loadTypes(){
    this.bienService.AllTypeBien().subscribe(
      (data)=>{this.types=data}
    )
  }
  ajouterBien(){
    this.bienService.addBien(this.bienForm.value).subscribe(
      ()=>{
        this.router.navigate(['biens/list'])
      }
    )
  }

}
