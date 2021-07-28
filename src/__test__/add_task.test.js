import Duty from '../task';

describe('Add new task', () => {
  test('', () => {
    const expected = new Duty('Task name', true, 3);
    const result = new Duty('Task name', true, 3);

    console.log(result);

    expect(result).toEqual(expected);
  });
});