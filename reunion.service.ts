import { Injectable } from '@angular/core';
import { Reunion } from './reunion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const url = 'http://localhost:4444/reuniones';

@Injectable({
  providedIn: 'root',
})
export class ReunionService {
  constructor(private http: HttpClient) {}

  getReuniones(): Observable<Reunion[]> {
    return this.http.get<Reunion[]>(url);
  }

  getReunion(id: string | null) {
    return this.http.get<Reunion>('${url}/${id}'); 
    
  }
}
