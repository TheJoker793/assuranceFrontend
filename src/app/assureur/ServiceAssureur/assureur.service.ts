import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assureur } from '../Assureur.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssureurService {

  constructor(private http:HttpClient) { }
  getAllAssureurs():Observable<Assureur[]>{
    return this.http.get<Assureur[]>(environment.apiUrl+'Assureurs');
  }
  getAssureurById(id:number):Observable<Assureur>{
    return this.http.get<Assureur>(environment.apiUrl+`Assureurs/${id}`)
  }
  addAssureur(newAssureur:Assureur):Observable<Assureur>{
    return this.http.post<Assureur>(environment.apiUrl+'Assureurs',newAssureur)
  }
  updateAssureur(id:number,assureur:Assureur):Observable<Assureur>{
    return this.http.put<Assureur>(environment.apiUrl+`Assureurs/${id}`,assureur)
  }
  deleteAssureur(id:number){
    return this.http.delete(environment.apiUrl+`Assureurs/${id}`)

  }
}
