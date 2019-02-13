import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo;

  @Output() itemModified = new EventEmitter();

  @Output() itemRemoved = new EventEmitter();

  editing = false;

  cancelEditing() {
    this.editing = false;
  }

  stopEditing(editedTitle) {
    this.todo.setTitle(editedTitle.value);
    this.editing = false;

    if (this.todo.title.length === 0) {
      this.remove();
    } else {
      this.update();
    }
  }

  edit() {
    this.editing = true;
  }

  toggleCompletion() {
    this.todo.completed = !this.todo.completed;
    this.update();
  }

  remove() {
    this.itemRemoved.next(this.todo.uid);
  }

  update() {
    this.itemModified.next(this.todo.uid);
  }
}
