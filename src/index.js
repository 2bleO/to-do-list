import './style.css';

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

const todoList = {
  run() {
    list.forEach((element) => {
      todoList.create(element);
    });
  },
  create(element) {
    const duties = document.getElementById('duties');
    // Create task li //
    duties.appendChild(document.createElement('li')).setAttribute('id', element.index);
    const task = document.getElementById(element.index);
    task.classList.add('task');
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
    dragBtn.classList.add('fas', 'fa-ellipsis-v');
  },
};

document.addEventListener('load', todoList.run());