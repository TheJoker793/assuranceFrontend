import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../model.personne';
import { Observable } from 'rxjs';
import {environment} from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor(private http:HttpClient) { }
  
  allClient():Observable<Personne[]>{
    return this.http.get<Personne[]>(environment.apiUrl+'Personnes');
  }
  clientById(id:number):Observable <Personne>{
    return this.http.get<Personne>(environment.apiUrl+`Personnes/${id}`)
  }
  addClient(personne:Personne){
    return this.http.post<Personne>(environment.apiUrl+'Personnes',personne)
  }
  updateClient(id:number,personne:Personne){
    return this.http.put<Personne>(environment.apiUrl+ `Personnes/${id}`,personne)
  }
  deleteClient(id:number){
    return this.http.delete(environment.apiUrl+'Personnes/'+id)
  }
}
