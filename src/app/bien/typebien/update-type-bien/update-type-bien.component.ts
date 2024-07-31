import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BienService } from '../../serviceBien/bien.service';

@Component({
  selector: 'app-update-type-bien',
  templateUrl: './update-type-bien.component.html',
  styleUrl: './update-type-bien.component.css'
})
export class UpdateTypeBienComponent implements OnInit{
  typeId!:number;
  typeForm!:FormGroup;
  constructor(private fb:FormBuilder,private activeRoute:ActivatedRoute,
    private typeService:BienService,private router:Router){
    this.typeForm=fb.group({
      id:new FormControl(null),
      libelle:new FormControl(''),
      dureeVie:new FormControl(null)
    })
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      (params)=>{
        this.typeId=params['id'];
        const id=this.typeId;
        this.typeService.typeBienById(id).subscribe(
          (data)=>{
            this.typeForm=this.fb.group({
              id:new FormControl(data.id),
              libelle:new FormControl(data.libelle),
              dureeVie:new FormControl(data.dureeVie)
            })
          }
        )
      }
    )
  }
  confirmUpdate(){
    const id=this.typeId;
    const typeBien=this.typeForm.value;
    this.typeService.updateTypeBien(id,typeBien).subscribe(
      ()=>{
        this.router.navigate(['biens/types/list'])
      }
    )
  }

}
