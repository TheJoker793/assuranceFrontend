import { Component, OnInit, Output } from '@angular/core';
import { Devis } from '../Quittance.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuittanceService } from '../quittanceService/quittance.service';
import { AssureurService } from '../../assureur/ServiceAssureur/assureur.service';
import { SinistreService } from '../../sinistre/serviceSinistre/sinistre.service';

@Component({
  selector: 'app-update-quittance',
  templateUrl: './update-quittance.component.html',
  styleUrl: './update-quittance.component.css'
})
export class UpdateQuittanceComponent implements OnInit {
  quittanceId!: number;
  devises: Devis[] = [];
  @Output() assureurId!: number;
  @Output() dossierSinistreId!: number;
  quittanceForm: FormGroup;
  dossierSinistreForm: FormGroup;
  assureurForm: FormGroup
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private quittanceService: QuittanceService,
    private assureurService: AssureurService, private dsService: SinistreService,private router:Router
  ) {
    this.assureurForm = fb.group({
      id: new FormControl(null),
      designation: new FormControl(''),
      address: new FormControl('')
    });
    this.dossierSinistreForm = fb.group({
      id: new FormControl(null),
      dateAjout: new FormControl(''),
      montantAssurance: new FormControl(null),
      montantSinistre: new FormControl(null),
      observation: new FormControl('')
    });
    this.quittanceForm = fb.group({
      id: new FormControl(null),
      libelle: new FormControl(''),
      montant: new FormControl(null),
      dateAjout: new FormControl(''),
      dateSignature: new FormControl(''),
      devisId: new FormControl(null),
      assureurId: new FormControl(null),
      dossierSinistreId: new FormControl(null)
    });
  }
  ngOnInit(): void {
    this.quittanceService.AllDevises().subscribe(
      (data)=>this.devises=data
    )
    this.activatedRoute.params.subscribe(
      (params) => {
        this.quittanceId = params['id'];
        this.quittanceService.getQuittanceById(this.quittanceId).subscribe(
          (data) => {
            this.quittanceForm = this.fb.group({
              id: new FormControl(data.id),
              libelle:new FormControl(data.libelle),
              montant: new FormControl(data.montant),
              dateAjout: new FormControl(data.dateAjout),
              dateSignature: new FormControl(data.dateSignature),
              devisId: new FormControl(data.devisId),
              assureurId: new FormControl(data.assureurId),
              dossierSinistreId: new FormControl(data.dossierSinistreId)
            });
            this.dsService.getDossiersSinistreById(data.dossierSinistreId).subscribe(
              (data)=>{
                this.dossierSinistreForm=this.fb.group({
                  id:new FormControl(data.id),
                  dateAjout:new FormControl(data.dateAjout),
                  montantAssurance:new FormControl(data.montantAssurance), 
                  montantSinistre:new FormControl(data.montantSinistre), 
                  observation:new FormControl(data.observation)
                })
              }
            );
            this.assureurService.getAssureurById(data.assureurId).subscribe(
              (data)=>{
                this.assureurForm=this.fb.group({
                  id:new FormControl(data.id),
                  designation:new FormControl(data.designation),
                  address:new FormControl(data.address)
                })
              }
            )
            
          }
        )
      }
    )
  }
  onChangeDossierSinistre(event:any){
    this.dossierSinistreId=event.target.value;
    this.quittanceForm.patchValue({
      dossierSinistreId:this.dossierSinistreId
    });
    this.dsService.getDossiersSinistreById(this.dossierSinistreId).subscribe(
      (data)=>{
        this.dossierSinistreForm=this.fb.group({
          id:new FormControl(data.id),
          dateAjout:new FormControl(data.dateAjout),
          montantAssurance:new FormControl(data.montantAssurance), 
          montantSinistre:new FormControl(data.montantSinistre), 
          observation:new FormControl(data.observation)
        })
      }
    );
    
    }
  onChangeAssureur(event:any){
    this.assureurId=event.target.value;
    this.quittanceForm.patchValue({
      assureurId:this.assureurId
    });
    this.assureurService.getAssureurById(this.assureurId).subscribe(
      (data)=>{
        this.assureurForm=this.fb.group({
          id:new FormControl(data.id),
          designation:new FormControl(data.designation),
          address:new FormControl(data.address)
        })
      }
    )

  }
  confirmUpdate(){
    this.quittanceService.updateQuittance(this.quittanceId,this.quittanceForm.value).subscribe(
      ()=>{
        this.router.navigate(['quittances/list'])
      }
    )
  }
}
