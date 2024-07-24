import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from '../Compte.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http:HttpClient) { }
  allComptes():Observable<Compte[]>{
    return this.http.get<Compte[]>(environment.apiUrl+'Comptes');
  }
  getCompteById(id:number):Observable<Compte>{
    return this.http.get<Compte>(environment.apiUrl+`Comptes/${id}`)
  }
  addCompte(compte:Compte):Observable<Compte>{
    return this.http.post<Compte>(environment.apiUrl+'Comptes',compte)
  }
  updateCompte(id:number,compte:Compte):Observable<Compte>{
    return this.http.put<Compte>(environment.apiUrl+`Comptes/${id}`,compte)
  }
  deleteCompte(id:any){
    return this.http.delete(environment.apiUrl+`Comptes/${id}`)
  }
}
