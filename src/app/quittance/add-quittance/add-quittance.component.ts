import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SinistreService } from '../../sinistre/serviceSinistre/sinistre.service';
import { AssureurService } from '../../assureur/ServiceAssureur/assureur.service';
import { Router } from '@angular/router';
import { Devis } from '../Quittance.model';
import { QuittanceService } from '../quittanceService/quittance.service';

@Component({
  selector: 'app-add-quittance',
  templateUrl: './add-quittance.component.html',
  styleUrl: './add-quittance.component.css'
})
export class AddQuittanceComponent implements OnInit{
  devises:Devis[]=[];
  @Output() assureurId!:number;
  @Output() dossierSinistreId!:number;
  libelleControl:FormControl;
  montantControl:FormControl;
  dateAjoutControl:FormControl;
  dateSignatureControl:FormControl;
  devisIdControl:FormControl;
  quittanceForm:FormGroup;
  assureurForm:FormGroup;
  dossierSinistreForm:FormGroup;
  constructor(private fb:FormBuilder,
    private dossierSinistreService:SinistreService,
    private assureurService:AssureurService,private router:Router,
    private devisService:QuittanceService){
    this.libelleControl=fb.control('');
    this.montantControl=fb.control('');
    this.dateAjoutControl=fb.control('');
    this.dateSignatureControl=fb.control('');
    this.devisIdControl=fb.control('');
    this.quittanceForm=fb.group({
      libelle:this.libelleControl,
      montant:this.montantControl,
      dateAjout:this.dateAjoutControl,
      dateSignature:this.dateSignatureControl,
      devisId:this.devisIdControl,
      assureurId:this.assureurId,
      dossierSinistreId:this.dossierSinistreId
    });
    this.assureurForm=fb.group({
      id:new FormControl(null),
      designation:new FormControl(''),
      address:new FormControl('')  
    });
    this.dossierSinistreForm=fb.group({
      id:new FormControl(null),
      dateAjout:new FormControl(''),
      montantAssurance:new FormControl(null),
      montantSinistre:new FormControl(null),
      observation:new FormControl('')
    })
  }
  ngOnInit(): void {
    this.devisService.AllDevises().subscribe(
      (data)=>this.devises=data
    )

  }
  onChangeDossierSinistre(event:any){
    this.dossierSinistreId=event.target.value;
    this.quittanceForm.patchValue({
      dossierSinistreId:this.dossierSinistreId
    });
    this.loadingDossierSinistre();
  }
  onChangeAssureur(event:any){
    this.assureurId=event.target.value;
    this.quittanceForm.patchValue({
      assureurId:this.assureurId
    });
    this.loadingAssureur()
  }
  loadingDossierSinistre(){
    this.dossierSinistreService.getDossiersSinistreById(this.dossierSinistreId).subscribe(
      (data)=>{
        this.dossierSinistreForm=this.fb.group({
          id:new FormControl(data.id),
          dateAjout:new FormControl(data.dateAjout),
          montantAssurance:new FormControl(data.montantAssurance),
          montantSinistre:new FormControl(data.montantSinistre),
          observation:new FormControl(data.observation)
        });
         
      }
    )
  }
  loadingAssureur(){
    this.assureurService.getAssureurById(this.assureurId).subscribe(
      (data)=>{
        this.assureurForm=this.fb.group({
          id:new FormControl(data.id),
          designation:new FormControl(data.designation),
          address:new FormControl(data.address)  
        });
        console.log(data);
        
      }
    )
  }
  ajouterQuittance(){
    this.devisService.addQuittance(this.quittanceForm.value).subscribe(
      ()=>{this.router.navigate(['quittances/list'])}
    ) 
  }

}
