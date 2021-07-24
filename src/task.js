export class Duty {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.index = 0;
  }

  push(arr) {
    this.index = arr.length;
    arr.push(this);
    window.localStorage.setItem('tasklist', JSON.stringify(arr));
    window.location.reload();
  }
}

export function removecompleted(arr) {
  const todelete = [];
  arr.forEach((element) => {
    if (element.completed === true) {
      todelete.push(element);
      const filteredArray = arr.filter((item) => !todelete.includes(item));
      filteredArray.forEach((element) => {
        element.index = filteredArray.indexOf(element);
      });
      window.localStorage.setItem('tasklist', JSON.stringify(filteredArray));
      window.location.reload();
    }
  });
}

export function removeAll(arr) {
  arr = [];
  window.localStorage.setItem('tasklist', JSON.stringify(arr));
  window.location.reload();
}

export function edit(arr) {
  arr.forEach((element) => {
    const description = document.getElementById(`${element.index}-description`);
    const dragBtn = document.getElementById(`${element.index}-drag`);
    const trashBtn = document.getElementById(`${element.index}-trash`);
    description.addEventListener('click', () => {
      description.setAttribute('contenteditable', true);
      description.classList.add('editing');
      dragBtn.style.display = 'none';
      trashBtn.style.display = 'block';
    });
    document.addEventListener('dblclick', () => {
      description.setAttribute('contenteditable', false);
      description.classList.remove('editing');
      dragBtn.style.display = 'block';
      trashBtn.style.display = 'none';
      element.description = description.innerHTML;
      window.localStorage.setItem('tasklist', JSON.stringify(arr));
      window.location.reload();
    });
  });
}

export function removetask(arr) {
  arr.forEach((element) => {
    const trashBtn = document.getElementById(`${element.index}-trash`);
    const todelete = [];
    trashBtn.addEventListener('click', () => {
      todelete.push(element);
      const filteredArray = arr.filter((item) => !todelete.includes(item));
      filteredArray.forEach((element) => {
        element.index = filteredArray.indexOf(element);
      });
      window.localStorage.setItem('tasklist', JSON.stringify(filteredArray));
      window.location.reload();
    });
  });
}
