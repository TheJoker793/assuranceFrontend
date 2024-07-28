import { Component, OnInit } from '@angular/core';
import { TypeTransport } from '../Marchandise.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MarchandiseService } from '../ServiceMarchandise/marchandise.service';

@Component({
  selector: 'app-update-marchandises',
  templateUrl: './update-marchandises.component.html',
  styleUrl: './update-marchandises.component.css'
})
export class UpdateMarchandisesComponent implements OnInit{
types:TypeTransport[]=[];
marchandiseId!:number
marchandiseForm!:FormGroup
constructor(private fb:FormBuilder,private activated:ActivatedRoute,
  private marchandiseService:MarchandiseService,private router:Router
){
  this.marchandiseForm=this.fb.group({
    id:new FormControl(null),
    code:new FormControl(''),
    nature:new FormControl(''),
    typeTransportId:new FormControl(null)

  })
}
  ngOnInit(): void {
    this.marchandiseService.getAllTypes().subscribe(
      (data)=>this.types=data
    )
    this.activated.params.subscribe((params)=>{
      this.marchandiseId=params['id'];
      const id=this.marchandiseId;
      this.marchandiseService.getMarchandiseById(id).subscribe(
        (data)=>{
          this.marchandiseForm=this.fb.group({
            id:new FormControl(data.id),
            code:new FormControl(data.code),
            nature:new FormControl(data.nature),
            typeTransportId:new FormControl(data.typeTransportId)
          })
        }
      )
    })
  }

confirmUpdate(){
  const id=this.marchandiseId;
  const marchandise=this.marchandiseForm.value;
  this.marchandiseService.updateMarchandise(id,marchandise).subscribe(
    ()=>{
      this.router.navigate(['marchandises/list'])
    }
  )
}
}
