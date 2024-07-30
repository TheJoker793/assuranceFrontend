import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dossier, Sinistre, TypeSinistre } from '../Sinistre.model';
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
  };
  getAllDossiers():Observable<Dossier[]>{
    return this.http.get<Dossier[]>(environment.apiUrl+'Dossiers');
  }
  getDossierById(id:number):Observable<Dossier>{
    return this.http.get<Dossier>(environment.apiUrl+'Dossiers/'+id);
  }
  AddDossier(dossier:Dossier):Observable<Dossier>{
    return this.http.post<Dossier>(environment.apiUrl+'Dossiers',dossier);
  }
  updateDossier(id:number,dossier:Dossier):Observable<Dossier>{
    return this.http.put<Dossier>(environment.apiUrl+'Dossiers/'+id,dossier);
  }
  deleteDossier(id:number):Observable<Dossier>{
    return this.http.delete<Dossier>(environment.apiUrl+'Dossiers/'+id);
  }
}
