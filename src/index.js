import './style.css';
import {
  mousedown, dragndrop,
} from './dragndrop';
import { status, prepopstatus } from './status';
import store from './store';
import Duty from './task';
import Tasklist from './tasklist';
import render from './render';

const form = document.getElementById('form');
const taskinput = document.querySelector('.taskadder');
const sync = document.querySelector('.sync');
const entericon = document.querySelector('.enter-icon');
const deletecompleted = document.getElementById('delcompleted');

const tasklist = new Tasklist();

const retrieve = () => {
  if (JSON.parse(localStorage.getItem('tasklist'))) {
    tasklist.storage = JSON.parse(localStorage.getItem('tasklist'));
    console.log(tasklist);
    render(tasklist);
  } else {
    render(tasklist);
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (taskinput.value !== '') {
    const duty = new Duty(taskinput.value);
    store('tasklist', tasklist.add(duty));
    window.location.reload();
  }
});

entericon.addEventListener('click', (e) => {
  e.preventDefault();
  if (taskinput.value !== '') {
    const duty = new Duty(taskinput.value);
    store('tasklist', tasklist.add(duty));
    window.location.reload();
  }
});

tasklist.storage.forEach((element) => {
  const trashBtn = document.getElementById(`${element.index}-trash`);
  trashBtn.addEventListener('click', () => {
    store('tasklist', tasklist.remove(`${element.index}`));
    window.location.reload();
  });
  const dragBtn = document.getElementById(`${element.index}-drag`);
  dragBtn.addEventListener('click', () => {
    mousedown(element);
    window.location.reload();
  });
  status(element);
  prepopstatus(element);
});

deletecompleted.addEventListener('click', (e) => {
  e.preventDefault();
  store('tasklist', tasklist.removecompleted());
  window.location.reload();
});

sync.addEventListener('click', (e) => {
  e.preventDefault();
  store('tasklist', tasklist.removeAll());
  window.location.reload();
});

retrieve();
dragndrop(tasklist.storage);
