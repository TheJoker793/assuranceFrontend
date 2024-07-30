import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SinistreService } from '../../serviceSinistre/sinistre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-dossier',
  templateUrl: './add-dossier.component.html',
  styleUrl: './add-dossier.component.css'
})
export class AddDossierComponent {
  libelleControl: FormControl;
  referenceControl: FormControl;
  dateDeclarationControl: FormControl;
  motifControl: FormControl;
  dateAjoutControl: FormControl;
  montantExpertiseControl: FormControl;
  montantIdemniserControl: FormControl;
  dossierForm:FormGroup;
  constructor(fb:FormBuilder,private dossierService:SinistreService,private router:Router){
    this.libelleControl= fb.control('');
    this.referenceControl= fb.control('');
    this.dateDeclarationControl= fb.control('');
    this.motifControl = fb.control('');
    this.dateAjoutControl= fb.control('');
    this.montantExpertiseControl= fb.control(null);
    this.montantIdemniserControl= fb.control(null);
    this.dossierForm=fb.group({
      libelle:this.libelleControl,
      reference:this.referenceControl,
      dateDeclaration:this.dateDeclarationControl,
      motif:this.motifControl,
      dateAjout:this.dateAjoutControl,
      montantExpertise:this.montantExpertiseControl,
      montantIdemniser:this.montantIdemniserControl

    })

  }
  addDossier(){
    this.dossierService.AddDossier(this.dossierForm.value).subscribe(
      ()=>{
        this.router.navigate(['sinistres/dossiers/list'])
      }
    )
  }

}
