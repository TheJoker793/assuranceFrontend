import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuittancePrime } from '../QuittancePrime.model';
import{environment} from '../../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class QuittanceprimeService {

  constructor(private http:HttpClient) { }

  getAllQuittancePrime():Observable<QuittancePrime[]>{
    return this.http.get<QuittancePrime[]>(environment.apiUrl+'QuittancePrimes')
  }
  getQuittancePrimeById(id:number):Observable<QuittancePrime>{
    return this.http.get<QuittancePrime>(environment.apiUrl+`QuittancePrimes/${id}` )
  }
  addQuittancePrime(qp:QuittancePrime):Observable<QuittancePrime>{
    return this.http.post<QuittancePrime>(environment.apiUrl+'QuittancePrimes',qp);
  }
  updateQuittancePrime(id:number,qp:QuittancePrime):Observable<QuittancePrime>{
    return this.http.put<QuittancePrime>(environment.apiUrl+`QuittancePrimes/${id}`,qp);
  }
  deleteQuittancePrime(id:number){
    return this.http.delete(environment.apiUrl+`QuittancePrimes/${id}`)
  }
}
