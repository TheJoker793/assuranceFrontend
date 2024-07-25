import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainArticleComponent } from './main-article/main-article.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { DashboardArticleComponent } from './dashboard-article/dashboard-article.component';

const routes: Routes = [
  {
    path:'',
    component:MainArticleComponent,
    children:[
      {
        path:'list',
        component:ListArticlesComponent
      },
      {
        path:'add',
        component:AddArticleComponent
      },
      {
        path:'dashboard',
        component:DashboardArticleComponent
      },
      {
        path:'update/:id',
        component:UpdateArticleComponent
      },
      {
        path:':id',
        component:DetailArticleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
