import { Todo } from './todo.model';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should create a new instance with a title', () => {
    const actual = new Todo('Angular Meetup Leipzig');
    const expected = { title: 'Angular Meetup Leipzig', completed: false, uid: expect.any(String) };

    expect(actual).toEqual(expected);
    expect(actual).toEqual(expect.objectContaining({ title: 'Angular Meetup Leipzig' }));
  });
});
