import { UUID } from 'angular2-uuid';

export class Todo {
  completed: boolean;
  title: string;
  uid: string;

  setTitle(title: string) {
    this.title = title.trim();
  }

  constructor(title = '') {
    this.uid = UUID.UUID();
    this.completed = false;

    this.setTitle(title);
  }
}
