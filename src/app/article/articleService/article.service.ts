import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../article.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) { }
getAllArticles():Observable<Article[]>{
  return this.http.get<Article[]>(environment.apiUrl+'Articles');
}
getArticleById(id:number):Observable<Article>{
  return this.http.get<Article>(environment.apiUrl+`Articles/${id}`);
}
addArticle(article:Article):Observable<Article>{
  return this.http.post<Article>(environment.apiUrl+'Articles',article);
}
updateArticle(id:number,article:Article):Observable<Article>{
  return this.http.put<Article>(environment.apiUrl+`Articles/${id}`,article);
}
deleteArticle(id:number){
  return this.http.delete(environment.apiUrl+`Articles/${id}`)
}
}
