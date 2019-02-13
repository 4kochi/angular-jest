import { fakeAsync, tick } from '@angular/core/testing';
import { Params } from '@angular/router';
import { Subject } from 'rxjs';
import { TodosService } from '../todos.service';
import { TodoFooterComponent } from './todo-footer.component';

let routeStub: any;
const routeParamsListener = new Subject<Params>();

function getComponent() {
  return new TodoFooterComponent(new TodosService(), routeStub);
}

describe('TodoFooterComponent', () => {
  let component: TodoFooterComponent;

  beforeEach(() => {
    routeStub = {
      params: routeParamsListener.asObservable()
    };

    component = getComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('GIVEN the component is initialized', () => {
    beforeEach(() => {
      component.ngOnInit();
    });

    it('should set the status when there is a status in the route', fakeAsync(() => {
      expect(component.currentStatus).toBe('');

      routeParamsListener.next({ status: 'completed' });
      tick();

      expect(component.currentStatus).toBe('completed');
    }));

    it('should return the count of todos', () => {
      expect(component.getCount()).toBe(0);
    });
  });
});
