import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Todo[] = [];
  remainingTodos: Todo[] = [];
  completedTodos: Todo[] = [];

  constructor() {
    const persistedTodos = JSON.parse(localStorage.getItem('angular2-todos')) || [];

    this.todos = persistedTodos.map(todo => {
      const ret = new Todo(todo.title);
      ret.completed = todo.completed;
      ret.uid = todo.uid;
      return ret;
    });
  }

  get(state) {
    return this.todos.filter(todo => todo.completed === state.completed);
  }

  allCompleted() {
    return this.todos.length === this.getCompleted().length;
  }

  setAllTo(completed: boolean) {
    this.todos.forEach(todo => (todo.completed = completed));
    this.persist();
  }

  removeCompleted() {
    this.todos = this.get({ completed: false });
    this.persist();
  }

  getRemaining() {
    if (!this.remainingTodos) {
      this.remainingTodos = this.get({ completed: false });
    }

    return this.remainingTodos;
  }

  getCompleted() {
    if (!this.completedTodos) {
      this.completedTodos = this.get({ completed: true });
    }

    return this.completedTodos;
  }

  toggleCompletion(uid: string) {
    const todo = this.findByUid(uid);

    if (todo) {
      todo.completed = !todo.completed;
      this.persist();
    }
  }

  remove(uid: string) {
    const todo = this.findByUid(uid);

    if (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
      this.persist();
    }
  }

  add(title: string) {
    this.todos.push(new Todo(title));
    this.persist();
  }

  persist() {
    this.clearCache();
    localStorage.setItem('angular2-todos', JSON.stringify(this.todos));
  }

  private findByUid(uid) {
    return this.todos.find(todo => todo.uid === uid);
  }

  private clearCache() {
    this.completedTodos = null;
    this.remainingTodos = null;
  }
}
