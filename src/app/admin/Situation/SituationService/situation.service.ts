import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Situation } from '../Situation.model'
import { environment } from '../../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SituationService {

  constructor(private http:HttpClient) { }
  getAllSituations():Observable<Situation[]>{
    return this.http.get<Situation[]>(environment.apiUrl+'Situations');
  }
  addSituation(newSituation:Situation):Observable<Situation>{
    return this.http.post<Situation>(environment.apiUrl+'Situations',newSituation);
  }
  deleteSituation(id:number){
    return this.http.delete(environment.apiUrl+`Situations/${id}`)
  }
}
