export default function render(tasklist) {
  tasklist.storage.forEach((element) => {
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
  });
}
