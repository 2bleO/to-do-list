export default class Tasklist {
  constructor() {
    this.storage = [];
  }

  add(duty) {
    duty.index = this.storage.length;
    this.storage.push(duty);
    return this.storage;
  }

  remove(index) {
    const todelete = [];
    todelete.push(this.storage[index]);
    const newarr = this.storage.filter((item) => !todelete.includes(item));
    this.storage = newarr;
    return this.storage;
  }

  removecompleted() {
    const todelete = [];
    this.storage.forEach((element) => {
      if (element.completed === true) {
        todelete.push(element);
      }
    });
    const newarr = this.storage.filter((item) => !todelete.includes(item));
    this.storage = newarr;
    return this.storage;
  }

  removeAll() {
    this.storage = [];
    return this.storage;
  }

  edit(index, input) {
    this.storage[index].description = input;
    return this.storage;
  }
}

/* export function edit(arr) {
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
} */
