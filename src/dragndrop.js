export function eventlisteners(arr) {
  arr.forEach((element) => {
    const task = document.getElementById(element.index);
    task.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('index', element.index);
    });
    task.addEventListener('drop', (event) => {
      const draggedIndex = event.dataTransfer.getData('index');
      const dropIndex = element.index;
      const dragged = arr[draggedIndex];
      const drop = arr[dropIndex];
      // swap
      arr[draggedIndex] = drop;
      arr[dropIndex] = dragged;
      // Update indexes
      dragged.index = dropIndex;
      drop.index = draggedIndex;
      task.setAttribute('draggable', false);
      window.localStorage.setItem('tasklist', JSON.stringify(arr));
      window.location.reload();
    });
    task.addEventListener('dragover', (event) => {
      event.preventDefault();
    });
  });
}

export function mousedown(element) {
  const parent = element.parentElement;
  element.addEventListener('mousedown', () => {
    parent.setAttribute('draggable', true);
  });
}