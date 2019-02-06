import { Todo } from '../todo.model';
import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;

  beforeEach(() => {
    component = new TodoItemComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger the event to remove an item', done => {
    component.todo = new Todo('demo');
    expect.assertions(1);

    component.itemRemoved.subscribe(id => {
      expect(id).toBe(component.todo.uid);
      done();
    });

    component.remove();
  });
});
