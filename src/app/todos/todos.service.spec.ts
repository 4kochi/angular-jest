import { Todo } from './todo.model';
import { TodosService } from './todos.service';

const mockTodos: Todo[] = [new Todo('One'), new Todo('Two'), new Todo('Three')];
const KEY = 'angular2-todos';

describe('TodosService', () => {
  let service: TodosService;

  beforeEach(() => {
    service = new TodosService();
    window.localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should persist items in localstorage', () => {
    expect(window.localStorage.getItem(KEY)).toBeNull();

    service.todos = [...mockTodos];
    service.persist();

    expect(window.localStorage.getItem(KEY)).toEqual(JSON.stringify(service.todos));
  });
});
