import { Component, OnInit, Output } from '@angular/core';
import { Structure } from '../../structure/model.structure';
import { TypeBien } from '../serviceBien/Bien.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BienService } from '../serviceBien/bien.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StructureService } from '../../structure/structureService/structure.service';

@Component({
  selector: 'app-update-bien',
  templateUrl: './update-bien.component.html',
  styleUrl: './update-bien.component.css'
})
export class UpdateBienComponent implements OnInit {
  structures: Structure[] = [];
  types: TypeBien[] = [];
  @Output() bienId!: number;
  bienForm!: FormGroup;
  constructor(private bienService: BienService, private fb: FormBuilder,
    private router: Router, private activateRoute: ActivatedRoute,
    private sturctureService:StructureService
  ) {
    this.bienForm = this.fb.group({
      id: new FormControl(null),
      code: new FormControl(''),
      daeAcquisation: new FormControl(''),
      typeBienId: new FormControl(null),
      structureId: new FormControl(null)
    })
  }
  ngOnInit(): void {
    this.loadStructures();
    this.loadTypes();
    this.activateRoute.params.subscribe(
      (params) => {
        this.bienId = params['id'];
        const id = this.bienId;
        this.bienService.getBienById(id).subscribe(
          (data) => {
            this.bienForm = this.fb.group({
              id: new FormControl(data.id),
              code: new FormControl(data.code),
              daeAcquisation: new FormControl(data.daeAcquisation),
              typeBienId: new FormControl(data.typeBienId),
              structureId: new FormControl(data.structureId)
            })
          }
        )
      }
    );
    console.log(this.bienForm.value);
    
  }
  loadTypes(){
    this.bienService.AllTypeBien().subscribe(
      (data)=>{
        this.types=data
      }
    )
  }
  loadStructures(){
    this.sturctureService.allStructure().subscribe(
      (data)=>{
        this.structures=data
      }
    )
  }

  confirmUpdate() {
    console.log(this.bienForm.value);
    
    this.bienService.updateBien(this.bienId,this.bienForm.value).subscribe(
      ()=>{
        this.router.navigate(['biens/list'])
      }
    )
  }

}
