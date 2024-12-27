import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
apiUsuarios = 'http://localhost:4444/usuarios';

  constructor(private http: HttpClient){ }
  getAll(): Observable <Usuario[]>{
    return this.http.get<Usuario[]>(this.apiUsuarios);
  }
  obtenerUsuario(id: number): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('$(this.apiUsuarios)/$(id)');
  }
  guardarUsuario(usuario: Usuario): Observable<Usuario>{
      return this.http.post<Usuario>(this.apiUsuarios, usuario);
  }
  borrarUsuario(id: number){
      return this.http.delete<Usuario>('$(this.apiUsuarios)/$(id)');
  }
}
