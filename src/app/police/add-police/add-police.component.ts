import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TypeBien } from '../../bien/serviceBien/Bien.model';
import { BienService } from '../../bien/serviceBien/bien.service';
import { PersonneService } from '../../personne/servicePersonne/personne.service';
import { AssureurService } from '../../assureur/ServiceAssureur/assureur.service';
import { ContratService } from '../../contrat/contratService/contrat.service';
import { MarchandiseService } from '../../marchandise/ServiceMarchandise/marchandise.service';
import { ArticleService } from '../../article/articleService/article.service';
import { Router } from '@angular/router';
import { PoliceService } from '../policeService/police.service';

@Component({
  selector: 'app-add-police',
  templateUrl: './add-police.component.html',
  styleUrl: './add-police.component.css'
})
export class AddPoliceComponent implements OnInit{
  @Output() personneId!:number;
  @Output() assureurId!:number;
  @Output() contratId!:number;
  @Output() marchandiseId!:number;
  @Output() articleId!:number;

  types:TypeBien[]=[]; 
  
  codeControl:FormControl;
  dateAjoutControl:FormControl;
  typeBienIdControl:FormControl;

  policeForm:FormGroup;
  personneForm!:FormGroup;
  assureurForm!:FormGroup;
  contratForm!:FormGroup;
  marchandiseForm!:FormGroup;
  articleForm:FormGroup;
  
  constructor(private fb:FormBuilder,private typeBienService:BienService,
    private personneService:PersonneService,private assureurService:AssureurService,
    private contratService:ContratService,private marchandiseService:MarchandiseService,
    private articleService:ArticleService, private router:Router,private policeService:PoliceService
  ){
    this.codeControl=this.fb.control('');
    this.dateAjoutControl=this.fb.control('');
    this.typeBienIdControl=this.fb.control('');
    this.articleForm=fb.group({
      code:this.codeControl,
      dateAjout:this.dateAjoutControl,
      typeBien:this.typeBienIdControl,
      personneId:this.personneId,
      assureurId:this.assureurId,
      contratId:this.contratId,
      marchandiseId:this.marchandiseId,
      articleId:this.articleId

    });
    this.personneForm=this.fb.group({
      id:new FormControl(null),
      cin:new FormControl(''),
      prenom:new FormControl(''),
      nom:new FormControl('')
    });
    this.assureurForm=this.fb.group({
      id:new FormControl(null),
      designation:new FormControl(''),
      address:new FormControl('')
    });
    this.contratForm=this.fb.group({
      id:new FormControl(null),
      dateEffet:new FormControl(''),
      dateEcheance:new FormControl(''),
      dateSignature:new FormControl(''),
      exercice:new FormControl(null)
    });
    this.marchandiseForm=this.fb.group({
      code:new FormControl(''),
      nature:new FormControl('')
    });
    this.articleForm=this.fb.group({
      id:new FormControl(null),
      libelle:new FormControl(''),
      reference:new FormControl(''),
      prix:new FormControl(null)
    });
    this.policeForm=fb.group({
      code:this.codeControl,
      dateAjout:this.dateAjoutControl,
      personneId:this.personneId,
      assureurId:this.assureurId,
      contratId:this.contratId,
      marchandiseId:this.marchandiseId,
      articleId:this.articleId,
      typeBienId:this.typeBienIdControl
    })

  }
  ngOnInit(): void {
    this.typeBienService.AllTypeBien().subscribe(
      (data)=>this.types=data
    )
  }
  onchangePersonne(event:any){
    this.personneId=event.target.value;
    this.policeForm.patchValue({
      personneId:this.personneId
    });
    this.loadPersonne();
  }
  onChangeAssureur(event:any){
    this.assureurId=event.target.value;
    this.policeForm.patchValue({
      assureurId:this.assureurId      
    });
    this.loadAssureur();
  }
  onChangeContrat(event:any){
    this.contratId=event.target.value;
    this.policeForm.patchValue({
      contratId:this.contratId
    });
    this.loadContrat();
  }
  onChangeMarchandise(event:any){
    this.marchandiseId=event.target.value;
    this.policeForm.patchValue({
      marchandiseId:this.marchandiseId
    });
    this.loadMarchandise();
  }
  onChangeArticle(event:any){
    this.articleId=event.target.value;
    this.policeForm.patchValue({
      articleId:this.articleId
    });
    this.loadArticle();
  }

  loadPersonne(){
    this.personneService.clientById(this.personneId).subscribe(
      (data)=>{
        this.personneForm=this.fb.group({
          id:new FormControl(data.id),
          cin:new FormControl(data.cin),
          prenom:new FormControl(data.prenom),
          nom:new FormControl(data.nom)
        })
      }
    )
  }
  loadAssureur(){
    this.assureurService.getAssureurById(this.assureurId).subscribe(
      (data)=>{
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
    )
  }
  loadContrat(){
    this.contratService.getById(this.contratId).subscribe(
      (data)=>{
        this.contratForm=this.fb.group({
          id:new FormControl(data.id),
          dateEffet:new FormControl(data.dateEffet),
          dateEcheance:new FormControl(data.dateEcheance),
          dateSignature:new FormControl(data.dateSignature),
          exercice:new FormControl(data.exercice)
        })
      }
    )
  }
  loadMarchandise(){
    this.marchandiseService.getMarchandiseById(this.marchandiseId).subscribe(
      (data)=>{
        this.marchandiseForm=this.fb.group({
          code:new FormControl(data.code),
          nature:new FormControl(data.nature)
        })
      }
    )
  }
  loadArticle(){
    this.articleService.getArticleById(this.articleId).subscribe(
      (data)=>{
        this.articleForm=this.fb.group({
          id:new FormControl(data.id),
          libelle:new FormControl(data.libelle),
          reference:new FormControl(data.reference),
          prix:new FormControl(data.prix)

        })
      }
    )
  }
  
  ajouterPolice(){
    console.log(this.policeForm.value);
    
    this.policeService.addPolice(this.policeForm.value).subscribe(
      ()=>{
        this.router.navigate(['polices/list'])
      }
    )

  }

}
