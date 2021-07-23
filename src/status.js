export function status(arr) {
  arr.forEach((element) => {
    const checkbox = document.getElementById(`${element.index}-checkbox`);
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        element.completed = true;
        window.localStorage.setItem('tasklist', JSON.stringify(arr));
      } else {
        element.completed = false;
        window.localStorage.setItem('tasklist', JSON.stringify(arr));
      }
    });
  });
}

export function prepopstatus(arr) {
  arr.forEach((element) => {
    const checkbox = document.getElementById(`${element.index}-checkbox`);
    if (element.completed === true) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  });
}
