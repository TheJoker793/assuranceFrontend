import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ReglementService } from '../../reglementService/reglement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-comptes-bancaire',
  templateUrl: './add-comptes-bancaire.component.html',
  styleUrl: './add-comptes-bancaire.component.css'
})
export class AddComptesBancaireComponent {
  libelleControl:FormControl;
  ribControl:FormControl;
  cleControl:FormControl;
  cbForm:FormGroup;
  constructor(fb:FormBuilder,private cbService:ReglementService,private router:Router){
    this.libelleControl=fb.control('');
    this.ribControl=fb.control('');
    this.cleControl=fb.control('');
    this.cbForm=fb.group({
      libelle:this.libelleControl,
      rib:this.ribControl,
      cle:this.cleControl
    })
  }
  addCompte(){
    this.cbService.addCompteBancaire(this.cbForm.value).subscribe(
      ()=>{
        this.router.navigate(['reglements/compteBancaires/list'])
      }
    )
  }

}
