import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import{ AssureurService } from '../ServiceAssureur/assureur.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-assureur',
  templateUrl: './add-assureur.component.html',
  styleUrl: './add-assureur.component.css'
})
export class AddAssureurComponent {
  designationControl:FormControl;
  addressControl:FormControl;
  assureurForm:FormGroup;
  constructor(fb:FormBuilder,private assureurService:AssureurService,private router:Router){
    this.designationControl=fb.control('');
    this.addressControl=fb.control('');
    this.assureurForm=fb.group({
      designation:this.designationControl,
      address:this.addressControl
    });
  }
  addAssureur(){
    this.assureurService.addAssureur(this.assureurForm.value).subscribe(
      ()=>{
        console.log(this.assureurForm.value);
        
        this.router.navigate(['assureurs/list'])
      }
    )
  }
  

}
