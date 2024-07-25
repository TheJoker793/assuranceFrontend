import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { MainArticleComponent } from './main-article/main-article.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { DashboardArticleComponent } from './dashboard-article/dashboard-article.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainArticleComponent,
    ListArticlesComponent,
    AddArticleComponent,
    DetailArticleComponent,
    UpdateArticleComponent,
    DashboardArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    ReactiveFormsModule
  ]
})
export class ArticleModule { }
