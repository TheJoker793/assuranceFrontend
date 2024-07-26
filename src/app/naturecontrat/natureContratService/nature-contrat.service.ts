import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NatureContrat } from '../NatureContrat.model';
import {environment} from '../../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class NatureContratService {

  constructor(private http:HttpClient) { }
  getAllNature(){
   return this.http.get<NatureContrat[]>(environment.apiUrl+'NatureContrats')
  }
}
