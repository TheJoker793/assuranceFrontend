import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sinistre, TypeSinistre } from '../Sinistre.model';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SinistreService {

  constructor(private http:HttpClient) { }
  getAllSinistres():Observable<Sinistre[]>{
    return this.http.get<Sinistre[]>(environment.apiUrl + 'Sinistres');
  }
  getSinistreById(id:number):Observable<Sinistre>{
    return this.http.get<Sinistre>(environment.apiUrl+'Sinistres/'+id)
  }
  addSinistre(newSinistre:Sinistre):Observable<Sinistre>{
    return this.http.post<Sinistre>(environment.apiUrl+'Sinistres',newSinistre)
  }
  updateSinistre(id:number,sinistre:Sinistre):Observable<Sinistre>{
    return this.http.put<Sinistre>(environment+'Sinistres/'+id,sinistre);
  }
  deleteSinistre(id:number){
    return this.http.delete(environment.apiUrl+'Sinistres/'+id)
  }
  getAllTypeSinistre():Observable<TypeSinistre[]>
  {
    return this.http.get<TypeSinistre[]>(environment.apiUrl+'TypeSinistres');
  }
  addTypeSinistre(type:TypeSinistre):Observable<TypeSinistre>
  {
    return this.http.post<TypeSinistre>(environment.apiUrl+'TypeSinistres',type)
  }
  deleteTypeSinistre(id:number){
    return this.http.delete(environment.apiUrl+'TypeSinistres/'+id)
  }
}
