import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos!: Todo[];
  constructor(private service: TodoService){}

  ngOnInit(): void {
    this.service.obtenerTodos().subscribe({
      next: (data) => {
      this.todos = data;    
    },
    error: (error) => {
      console.log(error);
    },
    });

    this.service.obtenerTodo().subscribe((data) =>{
      console.log(data.body);
    })
   }
}
