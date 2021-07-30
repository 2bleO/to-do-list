describe('add / delete', () => {
  test('push', () => {
    const duty = new Duty();
    const arr = [{ description: 'first', completed: false, index: 0 }, { description: 'second', completed: false, index: 1 }];
    expect((duty.push(arr)).length).toBe(3);
  });
  test('remove completed', () => {
    const arr = [{ description: 'first', completed: false, index: 0 }, { description: 'second', completed: true, index: 1 }];
    expect((removecompleted(arr)).length).toBe(1);
  });
  test('remove task', () => {
    const arr = [{ description: 'first', completed: false, index: 0 }, { description: 'second', completed: false, index: 1 }];
    expect((removetask(arr)).length).toBe(1);
  });
});