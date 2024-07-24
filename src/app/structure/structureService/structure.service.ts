import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Structure } from '../model.structure';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StructureService {

  constructor(private http:HttpClient) { }
  allStructure():Observable<Structure[]>{
    return this.http.get<Structure[]>(environment.apiUrl+'Structures') 
  }
}
