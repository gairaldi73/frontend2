import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

const url = 'http://localhost:4444/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(username:string, password: string): Observable<string>{
    const user = new User(username, password);
    
    return this.http.post<string>(url,user);
  }
}
