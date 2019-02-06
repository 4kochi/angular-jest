import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  currentStatus = '';

  constructor(private todosService: TodosService, private route: ActivatedRoute) {
    this.currentStatus = '';
  }

  ngOnInit() {
    this.route.params.pipe(pluck('status')).subscribe(status => {
      this.currentStatus = status || '';
    });
  }

  removeCompleted() {
    this.todosService.removeCompleted();
  }

  getCount() {
    return this.todosService.todos.length;
  }

  getRemainingCount() {
    return this.todosService.getRemaining().length;
  }

  hasCompleted() {
    return this.todosService.getCompleted().length > 0;
  }
}
