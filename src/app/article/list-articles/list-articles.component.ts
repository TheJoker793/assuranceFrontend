import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { ArticleService } from '../articleService/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrl: './list-articles.component.css'
})
export class ListArticlesComponent implements OnInit{
  articles:Article[]=[];
  constructor(private articleService:ArticleService,private router:Router){

  }
  ngOnInit(): void {
    this.refresh();
  }
  refresh(){
    this.articleService.getAllArticles().subscribe(
      (data)=>this.articles=data
    )
  }
  deleteArticle(article:any){
    this.articleService.deleteArticle(article.id).subscribe(
      ()=>{
        this.refresh();
      }
    )

  }
  goUpdate(article:Article){
    this.router.navigate(['articles/update',article.id])
  }


}
