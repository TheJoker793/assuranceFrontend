import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ArticleService } from '../articleService/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {
libelleControl:FormControl;
referenceControl:FormControl;
prixControl:FormControl;
ArticleForm:FormGroup
constructor(fb:FormBuilder,private articleService:ArticleService,private router:Router){
  this.libelleControl=fb.control('');
  this.referenceControl=fb.control('');
  this.prixControl=fb.control(0);
  this.ArticleForm=fb.group({
    libelle:this.libelleControl,
    reference:this.referenceControl,
    prix:this.prixControl
  });
}
addArticle(){
  this.articleService.addArticle(this.ArticleForm.value).subscribe(
    ()=>{
      this.router.navigate(['articles/list'])
    }
  )
}

}
