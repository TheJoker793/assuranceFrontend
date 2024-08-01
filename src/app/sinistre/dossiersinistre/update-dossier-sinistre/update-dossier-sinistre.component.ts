import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SinistreService } from '../../serviceSinistre/sinistre.service';

@Component({
  selector: 'app-update-dossier-sinistre',
  templateUrl: './update-dossier-sinistre.component.html',
  styleUrl: './update-dossier-sinistre.component.css'
})
export class UpdateDossierSinistreComponent implements OnInit{
  
  dossierSinistreId!:number;
  dossierId!:number;
  sinistreId!:number;
  formDossierSinistre!:FormGroup;
  formDossier!:FormGroup;
  formSinistre!:FormGroup;
  constructor(private fb:FormBuilder,private activateRoute:ActivatedRoute,
    private dsService:SinistreService,private router:Router
  ){
    /**form dossier sinistre */
    this.formDossierSinistre=this.fb.group({
      id:new FormControl(null),
      dateAjout:new FormControl(''),
      montantAssurance:new FormControl(null),
      montantSinistre:new FormControl(null),
      observation:new FormControl(''),
      sinistreId:new FormControl(null),
      dossierId:new FormControl(null),
    });
    /** form dossier */
    this.formDossier=this.fb.group({
      id:new FormControl(null),
      libelle:new FormControl(''),
      dateDeclaration:new FormControl(''),
      motif:new FormControl(''),
      dateAjout:new FormControl(''),
      montantExpertise:new FormControl(null),
      montantIdemniser:new FormControl(null)

    });
    /**form sinistre */
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
  ngOnInit(): void {
   this.loadingData();
  }

  loadingData(){
    this.activateRoute.params.subscribe((params)=>{
      this.dossierSinistreId=params['id'];
      const id=this.dossierSinistreId;
      this.dsService.getDossiersSinistreById(id).subscribe(
        (data)=>{
          this.formDossierSinistre=this.fb.group({
            id:new FormControl(data.id),
            dateAjout:new FormControl(data.dateAjout),
            montantAssurance:new FormControl(data.montantAssurance),
            montantSinistre:new FormControl(data.montantSinistre),
            observation:new FormControl(data.observation),
            dossierId:new FormControl(data.dossierId),
            sinistreId:new FormControl(data.sinistreId)
          });
          
          this.dsService.getDossierById(data.dossierId).subscribe(
            (data)=>{
              this.formDossier=this.fb.group({
                libelle:new FormControl(data.libelle),
                dateDeclaration:new FormControl(data.dateDeclaration),
                motif:new FormControl(data.motif),
                montantExpertise:new FormControl(data.montantExpertise),
                montantIdemniser:new FormControl(data.montantIdemniser),
                dateAjout:new FormControl(data.dateAjout)
              })
            }
          );
          this.dsService.getSinistreById(data.sinistreId).subscribe(
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
                cause :new FormControl(data.cause),
                lieux:new FormControl(data.lieux),
                objet:new FormControl(data.objet),
                dateValidation:new FormControl(data.dateValidation),
              })
            }
          )
          
          
        }
      );
      
      
      
      
     })
  }
  onChangeSinistre(event:any){
    this.sinistreId=event.target.value;
    this.formDossierSinistre.patchValue({
      sinistreId:this.sinistreId
    });
    this.loadingData();
  }
  onChangeDossier(event:any){
    this.dossierId=event.target.value;
    this.formDossierSinistre.patchValue({
      dossierId:this.dossierId
    });
    this.loadingData();
  }
  confirmUpdate(){
    this.dsService.updateDossiersSinistreBy(this.dossierSinistreId,this.formDossierSinistre.value).subscribe(
      ()=>{
        this.router.navigate(['sinistres/dossierSinitres/list'])
      }
    )
  }

}
