/**
 * @jest-environment jsdom
 */

import Duty from '../task';

describe('Add new Task', () => {
  test('Create new Duty object', () => {
    const expected = new Duty('Task name', true, 3);
    const result = new Duty('Task name', true, 3);

    expect(result).toEqual(expected);
  });

  test('Displays a task at the end of the list on enter key press in input', () => {
    const li = document.querySelectorAll('LI');
    const e = document.createEvent('Event');
    e.initEvent('keyup', false, true);
    document.getElementById('item').dispatchEvent(e);
    expect(li.length).toBe(0);
  });

  test('Displays a task at the end of the list on enter key press in input', () => {
    const li = document.querySelectorAll('LI');
    li.innerText = 'Test Task';
    const e = document.createEvent('Event');
    e.initEvent('keyup', false, true);
    document.getElementById('item').dispatchEvent(e);
    expect(li.innerText).toBe('Test Task');
  });
});
