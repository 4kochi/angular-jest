import { Component } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent {
  newTodo = '';

  constructor(private todosService: TodosService) {}

  addTodo() {
    if (this.newTodo.trim().length) {
      this.todosService.add(this.newTodo);
      this.newTodo = '';
    }
  }
}
