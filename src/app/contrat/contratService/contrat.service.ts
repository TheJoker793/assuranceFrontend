import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contrat, NatureContrat } from '../Contrat.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  constructor(private http:HttpClient) { }

  getAllContrats():Observable<Contrat[]>{
    return this.http.get<Contrat[]>(environment.apiUrl+'Contrats');
  }
  getById(id:number):Observable<Contrat>{
    return this.http.get<Contrat>(environment.apiUrl+`Contrats/${id}`);
  }
  addContrat(newContrat:Contrat):Observable<Contrat>{
    return this.http.post<Contrat>(environment.apiUrl+'Contrats',newContrat);
  }
  updateContrat(id:number,contrat:Contrat):Observable<Contrat>{
    return this.http.put<Contrat>(environment.apiUrl+`Contrats/${id}`,contrat);
  }
  deleteContrat(id:number){
    return this.http.delete(environment.apiUrl+`Contrats/${id}`)
  }
  allNatureContrats():Observable<NatureContrat[]>{
    return this.http.get<NatureContrat[]>(environment.apiUrl+'NatureContrats')
  }
  addNature(newNature:NatureContrat):Observable<NatureContrat>{
    return this.http.post<NatureContrat>(environment.apiUrl+'NatureContrats',newNature)
  }
  deleteNature(id:number){
    
    return this.http.delete<NatureContrat>(environment.apiUrl+'NatureContrats/'+id)
  }

}
