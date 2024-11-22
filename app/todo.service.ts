import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  obtenerTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  obtenerTodo(): Observable<HttpResponse<Todo>>{
    const id = 3;
    return this.http.get<Todo>('https://jsonplaceholder.typicode.com/todos/$(id)',
    {observe: 'response'}
  );
  }
}
