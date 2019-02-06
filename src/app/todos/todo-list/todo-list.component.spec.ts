import { Params } from '@angular/router';
import { Subject } from 'rxjs';
import { Todo } from '../todo.model';
import { TodoListComponent } from './todo-list.component';

let routeStub: any;
let todosServiceStub: any;
const routeParamsListener = new Subject<Params>();
const mockTodos: Todo[] = [new Todo('One'), new Todo('Two'), new Todo('Three')];

function getComponent() {
  return new TodoListComponent(todosServiceStub, routeStub);
}

describe('TodoListComponent', () => {
  let component: TodoListComponent;

  beforeEach(() => {
    routeStub = {
      params: routeParamsListener.asObservable()
    };

    todosServiceStub = {
      getCompleted: jest.fn().mockReturnValue(10),
      getRemaining: jest.fn().mockReturnValue(9),
      todos: [...mockTodos]
    };

    component = getComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return all todos', () => {
    expect(component.getTodos()).toEqual(mockTodos);
  });

  it('should return all completed todos', () => {
    component.currentStatus = 'completed';

    expect(component.getTodos()).toEqual(10);
    expect(todosServiceStub.getCompleted).toHaveBeenCalledTimes(1);
  });
});
