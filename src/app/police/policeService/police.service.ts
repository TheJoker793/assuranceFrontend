import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Police } from './Police.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PoliceService {

  constructor(private http:HttpClient) { }
  getAllPolices():Observable<Police[]>{
    return this.http.get<Police[]>(environment.apiUrl+'Police')
  }
  getPoliceById(id:number):Observable<Police>{
    return this.http.get<Police>(environment.apiUrl+ `Police/${id}`)
  }
  addPolice(police:Police):Observable<Police>{
    return this.http.post<Police>(environment.apiUrl+ 'Police',police)
  }
  updatePolice(id:number,police:Police):Observable<Police>{
    return this.http.put<Police>(environment.apiUrl+ `Police/${id}`,police)
  }
  deletePolice(id:number):Observable<Police>{
    return this.http.delete<Police>(environment.apiUrl+ `Police/${id}`)
  }

}
