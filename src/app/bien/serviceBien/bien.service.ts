import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bien, TypeBien } from './Bien.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BienService {

  constructor(private http:HttpClient) { }
  /*Type bien */
  AllTypeBien():Observable<TypeBien[]>{
    return this.http.get<TypeBien[]>(environment.apiUrl+'TypeBiens')
  }
  typeBienById(id:number):Observable<TypeBien>{
    return this.http.get<TypeBien>(environment.apiUrl+`TypeBiens/${id}`)
  }
  AddTypeBien(type:TypeBien):Observable<TypeBien>{
    return this.http.post<TypeBien>(environment.apiUrl+'TypeBiens',type)
  }
  updateTypeBien(id:number,type:TypeBien):Observable<TypeBien>{
    return this.http.put<TypeBien>(environment.apiUrl+`TypeBiens/${id}`,type)
  }
  deleteTypeBien(id:number){
    return this.http.delete(environment.apiUrl+`TypeBiens/${id}`)
  }
  getAllBiens():Observable<Bien[]>{
    return this.http.get<Bien[]>(environment.apiUrl+'Biens')
  }
  getBienById(id:number):Observable<Bien>{
    return this.http.get<Bien>(environment.apiUrl+'Biens/'+id)
  }
  addBien(bien:Bien):Observable<Bien>{
    return this.http.post<Bien>(environment.apiUrl+'Biens/',bien)
  }
  updateBien(id:number,bien:Bien):Observable<Bien>{
    console.log(bien);
    
    return this.http.put<Bien>(environment.apiUrl+'Biens/'+id,bien)
  }
  deleteBien(id:number){
    return this.http.delete(environment.apiUrl+'Biens/'+id)
  }

}
