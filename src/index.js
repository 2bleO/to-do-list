import './style.css';
import {
  mousedown, eventlisteners,
} from './dragndrop';
import status from './status';

let list = [];

list = [
  {
    description: 'Wash clothes',
    completed: false,
    index: 0,
  },
  {
    description: 'Cook',
    completed: false,
    index: 1,
  },
  {
    description: 'Work',
    completed: false,
    index: 2,
  },
  {
    description: 'Exercise',
    completed: false,
    index: 3,
  },
];

let displayedList;

const todoList = (arr) => {
  arr.forEach((element) => {
    const duties = document.getElementById('duties');
    // Create task li //
    duties.appendChild(document.createElement('li')).setAttribute('id', element.index);
    const task = document.getElementById(element.index);
    task.classList.add('task', 'draggable');
    // Create checkbox //
    task.appendChild(document.createElement('input')).setAttribute('id', `${element.index}-checkbox`);
    const checkbox = document.getElementById(`${element.index}-checkbox`);
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('checkbox');
    // Create description //
    task.appendChild(document.createElement('p')).setAttribute('id', `${element.index}-description`);
    const description = document.getElementById(`${element.index}-description`);
    description.classList.add('description');
    description.innerText = element.description;
    // Create DragBtn //
    task.appendChild(document.createElement('i')).setAttribute('id', `${element.index}-drag`);
    const dragBtn = document.getElementById(`${element.index}-drag`);
    dragBtn.classList.add('fas', 'fa-ellipsis-v', 'drag-btn');
    // Create add event listeners //
    mousedown(dragBtn);
  });
  eventlisteners(arr);
  status(arr);
};

const retrieve = () => {
  if (JSON.parse(localStorage.getItem('tasklist'))) {
    displayedList = JSON.parse(localStorage.getItem('tasklist'));
    todoList(displayedList);
  } else {
    displayedList = list;
    todoList(displayedList);
  }
};

document.addEventListener('load', retrieve());
