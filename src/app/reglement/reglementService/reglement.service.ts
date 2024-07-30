import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CompteBancaire, Reglement,TypeReglement} from '../Reglement.model'
import{environment} from '../../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ReglementService {

  constructor(private http:HttpClient) { }
  allReglements():Observable<Reglement[]>{
    return this.http.get<Reglement[]>(environment.apiUrl+'Reglements')
  }
  ReglementById(id:number):Observable<Reglement>{
    return this.http.get<Reglement>(environment.apiUrl+`Reglements/${id}`)
  }
  addReglement(newReglement:Reglement):Observable<Reglement>{
    return this.http.post<Reglement>(environment.apiUrl+'Reglements',newReglement)
  }
  updateReglement(id:number,reglement:Reglement):Observable<Reglement>{
    return this.http.put<Reglement>(environment.apiUrl+`Reglements/${id}`,reglement)
  }
  deleteReglement(id:number){
    return this.http.delete(environment.apiUrl+`Reglements/${id}`)
  }

  allTypeReglement():Observable<TypeReglement[]>{
    return this.http.get<TypeReglement[]>(environment.apiUrl+'TypeReglements')
  }
  addTypeReglement(newType:TypeReglement):Observable<TypeReglement>{
    return this.http.post<TypeReglement>(environment.apiUrl+'TypeReglements',newType)
  }
  deleteTypeReglement(id:number){
    return this.http.delete(environment.apiUrl+`TypeReglements/${id}`)
  }
  getAllCompteBancaires():Observable<CompteBancaire[]>{
    return this.http.get<CompteBancaire[]>(environment.apiUrl+'CompteBancaires')
  }
  getCompteBancaireById(id:number):Observable<CompteBancaire>{
    return this.http.get<CompteBancaire>(environment.apiUrl+`CompteBancaires/${id}`)
  }
  addCompteBancaire(newCompte:CompteBancaire):Observable<CompteBancaire>{
    return this.http.post<CompteBancaire>(environment.apiUrl+'CompteBancaires',newCompte)
  }
  updateCompteBancaire(id:number,cb:CompteBancaire):Observable<CompteBancaire>{
    return this.http.put<CompteBancaire>(environment.apiUrl+'CompteBancaires/'+id,cb)
  }
  deleteCompteBancaire(id:number){
    return this.http.delete(environment.apiUrl+`CompteBancaires/${id}`)
  }

}
