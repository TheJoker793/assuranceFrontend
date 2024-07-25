import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ArticleService } from '../articleService/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrl: './update-article.component.css'
})
export class UpdateArticleComponent implements OnInit{
  @Output() articleId!:number;
  articleForm!:FormGroup;
  constructor(private articleService:ArticleService,private router:Router,
    private activatedRouter:ActivatedRoute,private fb:FormBuilder
  ){
    this.articleForm=this.fb.group({
      id:new FormControl(null), 
      libelle:new FormControl(''),
      reference:new FormControl(''),
      prix:new FormControl(0)
    })
  }
  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      (params)=>{
        this.articleId=params['id'];
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
    )
  }
  confirmUpdate(){
    this.articleService.updateArticle(this.articleId,this.articleForm.value).subscribe(
      ()=>{
        this.router.navigate(['articles/list'])
      }
    )
  }

}
