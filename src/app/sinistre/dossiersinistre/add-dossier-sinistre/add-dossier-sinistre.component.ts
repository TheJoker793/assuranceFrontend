import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SinistreService } from '../../serviceSinistre/sinistre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-dossier-sinistre',
  templateUrl: './add-dossier-sinistre.component.html',
  styleUrl: './add-dossier-sinistre.component.css'
})
export class AddDossierSinistreComponent {
  dossierId!:number;
  sinistreId!:number;
  dateAjoutControl:FormControl;
  montantAssuranceControl:FormControl;
  montantSinistreControl:FormControl;
  observationControl:FormControl;
  formDossierSinistre:FormGroup;
  formDossier:FormGroup;
  formSinistre:FormGroup;
  constructor(private fb:FormBuilder,private dsService:SinistreService,
    private router:Router,
  ){
    this.dateAjoutControl=this.fb.control('');
    this.montantAssuranceControl=this.fb.control('');
    this.montantSinistreControl=this.fb.control('');
    this.observationControl=this.fb.control('');
    this.formDossierSinistre=this.fb.group({
      dateAjout:this.dateAjoutControl,
      montantAssurance:this.montantAssuranceControl,
      montantSinistre:this.montantSinistreControl,
      observation:this.observationControl,
      sinistreId:this.sinistreId,
      dossierId:this.dossierId
    });
    this.formDossier=this.fb.group({
      id:new FormControl(null),
      libelle:new FormControl(''),
      dateDeclaration:new FormControl(''),
      motif:new FormControl(''),
      dateAjout:new FormControl(''),
      montantExpertise:new FormControl(null),
      montantIdemniser:new FormControl(null)

    });
    this.formSinistre=this.fb.group({
      id:new FormControl(null),
      libelle:new FormControl(''),
      reference:new FormControl(''),
      description:new FormControl(''),
      montantExpertise:new FormControl(null),
      montantIndemniser:new FormControl(null),
      dateSinistre:new FormControl(''),
      dateAjout:new FormControl(''),
      degatMateriel:new FormControl(''),
      cause:new FormControl(''),
      lieux:new FormControl(''),
      objet:new FormControl(''),
      dateValidation:new FormControl('')
    })

  }
  addDossierSinistre(){
    console.log(this.formDossierSinistre.value);
    
    this.dsService.addDossiersSinistre(this.formDossierSinistre.value).subscribe(
      ()=>{
        this.router.navigate(['sinistres/dossierSinitres/list']); 
      }
    )
  }
  onChangeDossier(event:any){
    this.dossierId=event.target.value;

    this.formDossierSinistre.patchValue({
      dossierId:this.dossierId
    });
    this.loadDossierById();
    
  }
  onChangeSinistre(event:any){
    this.sinistreId=event.target.value;
    console.log("dossier Id "+ this.sinistreId);
    
    this.formDossierSinistre.patchValue({
      sinistreId:this.sinistreId
    });
    this.loadSinistreById();

  }
  loadSinistreById(){
    this.dsService.getSinistreById(this.sinistreId).subscribe(
      (data)=>{
        this.formSinistre=this.fb.group({
          libelle:new FormControl(data.libelle),
          reference:new FormControl(data.reference),
          description:new FormControl(data.description),
          montantExpertise:new FormControl(data.montantExpertise),
          montantIndemniser:new FormControl(data.montantIndemniser),
          dateSinistre:new FormControl(data.dateSinistre),
          dateAjout:new FormControl(data.dateAjout),
          degatMateriel:new FormControl(data.degatMateriel),
          cause:new FormControl(data.cause),
          lieux:new FormControl(data.lieux),
          objet:new FormControl(data.objet),
          dateValidation:new FormControl(data.dateValidation)

        })
      }
    )
  }
  loadDossierById(){
    this.dsService.getDossierById(this.dossierId).subscribe(
      (data)=>{
        this.formDossier=this.fb.group({
          libelle:new FormControl(data.libelle),
          reference:new FormControl(data.reference),
          dateDeclaration:new FormControl(data.dateDeclaration),
          motif:new FormControl(data.motif),
          dateAjout:new FormControl(data.dateAjout),
          montantExpertise:new FormControl(data.montantExpertise),
          montantIdemniser:new FormControl(data.montantIdemniser),
        })
      }

    )
  }

}
