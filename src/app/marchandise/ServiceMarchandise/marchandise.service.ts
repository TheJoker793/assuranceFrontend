import { Injectable } from '@angular/core';
import { Marchandise, TypeTransport } from '../Marchandise.model';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarchandiseService {

  constructor(private http:HttpClient) { }
  getAllMarchandise():Observable<Marchandise[]>{
    return this.http.get<Marchandise[]>(environment.apiUrl+'Marchandises');
  }
  getMarchandiseById(id:number):Observable<Marchandise>{
    return this.http.get<Marchandise>(environment.apiUrl+'Marchandises/'+id);
  }
  addMarchandise(newMarchadise:Marchandise):Observable<Marchandise>{
    console.log('new marchandise =',newMarchadise);
    
    return this.http.post<Marchandise>(environment.apiUrl+'Marchandises',newMarchadise)
  }
  updateMarchandise(id:number,marchandise:Marchandise):Observable<Marchandise>{
    return this.http.put<Marchandise>(environment.apiUrl+'Marchandises/'+id,marchandise)
  }
  deleteMarchandise(id:number){
    return this.http.delete<Marchandise>(environment.apiUrl+'Marchandises/'+id);

  }

  getAllTypes():Observable<TypeTransport[]>{
    return this.http.get<TypeTransport[]>(environment.apiUrl+'TypeTransports')
  }
}
