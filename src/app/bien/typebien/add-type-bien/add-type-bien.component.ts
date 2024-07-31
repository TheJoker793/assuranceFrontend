import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BienService } from '../../serviceBien/bien.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-type-bien',
  templateUrl: './add-type-bien.component.html',
  styleUrl: './add-type-bien.component.css'
})
export class AddTypeBienComponent {
  libelleControl:FormControl;
  dureeVieControl:FormControl;
  typeForm:FormGroup;
  constructor(fb:FormBuilder,private typeService:BienService,private router:Router){
    this.libelleControl=fb.control('');
    this.dureeVieControl=fb.control(null);
    this.typeForm=fb.group({
      libelle:this.libelleControl,
      dureeVie:this.dureeVieControl
    })
  }
  addNewType(){
    this.typeService.AddTypeBien(this.typeForm.value).subscribe(
      ()=>{
        this.router.navigate(['biens/types/list'])
      }
    )
  }


}
