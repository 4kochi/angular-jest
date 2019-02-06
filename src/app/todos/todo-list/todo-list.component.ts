import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  currentStatus = '';

  constructor(private todoStore: TodosService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.pipe(pluck('status')).subscribe(status => {
      this.currentStatus = status;
    });
  }

  remove(uid) {
    this.todoStore.remove(uid);
  }

  update() {
    this.todoStore.persist();
  }

  getTodos() {
    if (this.currentStatus === 'completed') {
      return this.todoStore.getCompleted();
    } else if (this.currentStatus === 'active') {
      return this.todoStore.getRemaining();
    } else {
      return this.todoStore.todos;
    }
  }

  allCompleted() {
    return this.todoStore.allCompleted();
  }

  setAllTo(toggleAll) {
    this.todoStore.setAllTo(toggleAll.checked);
  }
}
