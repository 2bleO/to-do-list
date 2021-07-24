import './style.css';
import {
  mousedown, dragndrop,
} from './dragndrop';
import { status, prepopstatus } from './status';
import {
  removecompleted, removeAll, Duty, edit, removetask,
} from './task';

const form = document.getElementById('form');
const taskinput = document.querySelector('.taskadder');
const sync = document.querySelector('.sync');
const entericon = document.querySelector('.enter-icon');
const deletecompleted = document.getElementById('delcompleted');
const list = [];
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
    // create trashcan //
    task.appendChild(document.createElement('i')).setAttribute('id', `${element.index}-trash`);
    const trashBtn = document.getElementById(`${element.index}-trash`);
    trashBtn.classList.add('far', 'fa-trash-alt', 'trash-btn');
    // Create add event listeners //
    mousedown(dragBtn);
  });
  dragndrop(arr);
  status(arr);
  prepopstatus(arr);
  edit(arr);
  removetask(arr);
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

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (taskinput.value !== '') {
    const duty = new Duty(taskinput.value);
    duty.push(displayedList);
  }
});

entericon.addEventListener('click', (e) => {
  e.preventDefault();
  if (taskinput.value !== '') {
    const duty = new Duty(taskinput.value);
    duty.push(displayedList);
  }
});

deletecompleted.addEventListener('click', (e) => {
  e.preventDefault();
  removecompleted(displayedList);
});

sync.addEventListener('click', (e) => {
  e.preventDefault();
  removeAll(displayedList);
});

document.addEventListener('load', retrieve());
