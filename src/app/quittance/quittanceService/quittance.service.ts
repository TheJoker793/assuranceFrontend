import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Devis, Quittance } from '../Quittance.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuittanceService {

  constructor(private http:HttpClient) { }
  getAllQuittance():Observable<Quittance[]>{
    return this.http.get<Quittance[]>(environment.apiUrl+'Quittances')
  }
  getQuittanceById(id:number):Observable<Quittance>{
    return this.http.get<Quittance>(environment.apiUrl+`Quittances/${id}`)
  }
  addQuittance(quittance:Quittance):Observable<Quittance>{
    return this.http.post<Quittance>(environment.apiUrl+'Quittances',quittance)

  }
  updateQuittance(id:number,quittance:Quittance):Observable<Quittance>{
    return this.http.put<Quittance>(environment.apiUrl+`Quittances/${id}`,quittance)
  }
  deleteQuittance(id:number){
    return this.http.delete(environment.apiUrl+`Quittances/${id}`)
  }

  AllDevises():Observable<Devis[]>{
    return this.http.get<Devis[]>(environment.apiUrl+'Devis')
  }
  AddDevises(devis:Devis):Observable<Devis>{
    return this.http.post<Devis>(environment.apiUrl+'Devis',devis)
  }
  deleteDevis(id:number){
    return this.http.delete(environment.apiUrl+'Devis/'+id)
 
  }
}
