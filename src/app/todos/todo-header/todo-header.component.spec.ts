import { TodoHeaderComponent } from './todo-header.component';

let todosServiceStub: any;

function getComponent() {
  return new TodoHeaderComponent(todosServiceStub);
}

describe('TodoHeaderComponent', () => {
  let component: TodoHeaderComponent;

  beforeEach(() => {
    todosServiceStub = {
      add: jest.fn()
    };

    component = getComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add an todo in the service', () => {
    component.newTodo = '  Add me  ';
    component.addTodo();

    expect(todosServiceStub.add).toHaveBeenCalledWith('Add me');
    expect(component.newTodo).toBe('');
  });

  it('should do something special', () => {
    todosServiceStub = {
      add: jest
        .fn()
        .mockReturnValueOnce({ title: 'first' })
        .mockReturnValueOnce({ title: 'second' })
        .mockReturnValue({ title: 'and so on' })
    };
    component = getComponent();

    component.newTodo = '  Add me  ';
    component.addTodo();

    expect(todosServiceStub.add).toHaveBeenCalledWith('Add me');
    expect(component.newTodo).toBe('');
  });
});
