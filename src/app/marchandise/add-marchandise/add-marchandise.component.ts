import { Component, OnInit } from '@angular/core';
import { TypeTransport } from '../Marchandise.model';
import { MarchandiseService } from '../ServiceMarchandise/marchandise.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-marchandise',
  templateUrl: './add-marchandise.component.html',
  styleUrl: './add-marchandise.component.css'
})
export class AddMarchandiseComponent implements OnInit{
  types:TypeTransport[]=[];
  
  codeControl:FormControl;
  natureControl:FormControl;
  typeTransportIdControl:FormControl
  marchandiseForm:FormGroup;
  constructor(private marchandiseService:MarchandiseService,private router:Router,
    fb:FormBuilder

  ){
    this.codeControl=fb.control('');
    this.natureControl=fb.control('');
    this.typeTransportIdControl=fb.control(null);
    this.marchandiseForm=fb.group({
      code:this.codeControl,
      nature:this.natureControl,
      typeTransportId:this.typeTransportIdControl
    })


  }
  ngOnInit(): void {
    this.marchandiseService.getAllTypes().subscribe(
      (data)=>{
        this.types=data;
      }
    )
  }
  addNewMarchandise(){
    this.marchandiseService.addMarchandise(this.marchandiseForm.value).subscribe(
      ()=>{
        console.log(this.marchandiseForm.value);
        
        this.router.navigate(['marchandises/list']);
      }
    )
  }

}
