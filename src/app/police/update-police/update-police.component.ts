import { Component, OnInit, Output } from '@angular/core';
import { TypeBien } from '../../bien/serviceBien/Bien.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliceService } from '../policeService/police.service';
import { PersonneService } from '../../personne/servicePersonne/personne.service';
import { AssureurService } from '../../assureur/ServiceAssureur/assureur.service';
import { ContratService } from '../../contrat/contratService/contrat.service';
import { MarchandiseService } from '../../marchandise/ServiceMarchandise/marchandise.service';
import { ArticleService } from '../../article/articleService/article.service';
import { BienService } from '../../bien/serviceBien/bien.service';

@Component({
  selector: 'app-update-police',
  templateUrl: './update-police.component.html',
  styleUrl: './update-police.component.css'
})
export class UpdatePoliceComponent implements OnInit{
  types:TypeBien[]=[];
  
  @Output() personneId!:number;
  @Output() assureurId!:number;
  @Output() contratId!:number;
  @Output() marchandiseId!:number;
  @Output() articleId!:number;


  policeId!:number; 
  policeForm!:FormGroup;
  personneForm!:FormGroup;
  assureurForm!:FormGroup;
  contratForm!:FormGroup;
  marchandiseForm!:FormGroup;
  articleForm!:FormGroup;
  constructor(private fb:FormBuilder,private activeRoute:ActivatedRoute,
    private policeService:PoliceService,private personneService:PersonneService,
    private assureurService:AssureurService,private contratService:ContratService,
    private marchandiseService:MarchandiseService,private articleService:ArticleService,
  private typeService:BienService,private router:Router){
    this.policeForm=fb.group({
      code:new FormControl(''),
      dateAjout:new FormControl(''),
      personneId:new FormControl(null),
      assureurId:new FormControl(null),
      contratId:new FormControl(null),
      marchandiseId:new FormControl(null),
      articleId:new FormControl(null),
      typeBienId:new FormControl(null),
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
      id:new FormControl(null),
      code:new FormControl(''),
      nature:new FormControl('')
    });
    this.articleForm=this.fb.group({
          id:new FormControl(null),
          libelle:new FormControl(''),
          reference:new FormControl(''),
          prix:new FormControl(null)
    })
  }
  
  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      (params)=>{
        this.policeId=params['id'];
        const id=this.policeId;
        this.policeService.getPoliceById(id).subscribe(
          (data)=>{
            this.policeForm=this.fb.group({
              id:new FormControl(data.id),
              code:new FormControl(data.code),
              dateAjout:new FormControl(data.dateAjout),
              personneId:new FormControl(data.personneId),
              assureurId:new FormControl(data.assureurId),
              contratId:new FormControl(data.contratId),
              marchandiseId:new FormControl(data.marchandiseId),
              articleId:new FormControl(data.articleId),
              typeBienId:new FormControl(data.typeBienId)
            });
            this.personneService.clientById(data.personneId).subscribe(
              (dataPersonne)=>{
                this.personneForm=this.fb.group({
                  id:new FormControl(dataPersonne.id),
                  cin:new FormControl(dataPersonne.cin),
                  prenom:new FormControl(dataPersonne.prenom),
                  nom:new FormControl(dataPersonne.nom)
                })
              }
            );
            this.assureurService.getAssureurById(data.assureurId).subscribe(
              (dataAssureur)=>{
                this.assureurForm=this.fb.group({
                  id:new FormControl(dataAssureur.id),
                  designation:new FormControl(dataAssureur.designation),
                  address:new FormControl(dataAssureur.address)

                })
              }
            );
            this.contratService.getById(data.contratId).subscribe(
              (data)=>{
                this.contratForm=this.fb.group({
                  id:new FormControl(data.id),
                  dateEffet:new FormControl(data.dateEffet),
                  dateEcheance:new FormControl(data.dateEcheance),
                  dateSignature:new FormControl(data.dateSignature),
                  exercice:new FormControl(data.exercice)
                })
              }
            );
            this.marchandiseService.getMarchandiseById(data.marchandiseId).subscribe(
              (data)=>{
                this.marchandiseForm=this.fb.group({
                  id:new FormControl(data.id),
                  code:new FormControl(data.code),
                  nature:new FormControl(data.nature)
                })
              }
            );
            this.articleService.getArticleById(data.articleId).subscribe(
              (data)=>{
                this.articleForm=this.fb.group({
                  id:new FormControl(data.id),
                  libelle:new FormControl(data.libelle),
                  reference:new FormControl(data.reference),
                  prix:new FormControl(data.prix)
                })

              }
            );


            

          }
        );
        
      }
    );
    this.typeService.AllTypeBien().subscribe(
      (data)=>this.types=data
    )
  }
  confirmUpdate(){
    this.policeService.updatePolice(this.policeId,this.policeForm.value).subscribe(
      ()=>{
        this.router.navigate(['polices/list'])
      }
    )
  }
  onchangePersonne(event:any){
    this.personneId=event.target.value;
    this.policeForm.patchValue({
      personneId:this.personneId
    });
    this.personneService.clientById(this.personneId).subscribe(
      (dataPersonne)=>{
        this.personneForm=this.fb.group({
          id:new FormControl(dataPersonne.id),
          cin:new FormControl(dataPersonne.cin),
          prenom:new FormControl(dataPersonne.prenom),
          nom:new FormControl(dataPersonne.nom)
        })
      }
    );
    
  }
  onChangeAssureur(event:any){
    this.assureurId=event.target.value;
    this.policeForm.patchValue({
      assureurId:this.assureurId      
    });
    this.assureurService.getAssureurById(this.assureurId).subscribe(
      (dataAssureur)=>{
        this.assureurForm=this.fb.group({
          id:new FormControl(dataAssureur.id),
          designation:new FormControl(dataAssureur.designation),
          address:new FormControl(dataAssureur.address)

        })
      }
    );
    
  }
  onChangeContrat(event:any){
    this.contratId=event.target.value;
    this.policeForm.patchValue({
      contratId:this.contratId
    });
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
    );
    
  }
  onChangeMarchandise(event:any){
    this.marchandiseId=event.target.value;
    this.policeForm.patchValue({
      marchandiseId:this.marchandiseId
    });
    this.marchandiseService.getMarchandiseById(this.marchandiseId).subscribe(
      (data)=>{
        this.marchandiseForm=this.fb.group({
          id:new FormControl(data.id),
          code:new FormControl(data.code),
          nature:new FormControl(data.nature)
        })
      }
    );
    
  }
  onChangeArticle(event:any){
    this.articleId=event.target.value;
    this.policeForm.patchValue({
      articleId:this.articleId
    });
    this.articleService.getArticleById(this.articleId).subscribe(
      (data)=>{
        this.articleForm=this.fb.group({
          id:new FormControl(data.id),
          libelle:new FormControl(data.libelle),
          reference:new FormControl(data.reference),
          prix:new FormControl(data.prix)
        })

      }
    );

    
  }


}
