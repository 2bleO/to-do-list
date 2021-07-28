require('../task');

beforeAll(() => {
  document.body.innerHTML = `
  <div class="header">
       <h1>Today's To Do</h1>
       <i class="fas fa-sync-alt sync"></i>
     </div>
     <form id="form">
      <input type="text" placeholder="Add to your list" id="item" aria-label="text" class="taskadder">
      <i class="enter-icon">↵</i>
     </form>
     <ul class="tasklist" id="duties">
       
     </ul>
     <button type="submit" id="delcompleted">Clear all completed</button>
  `;
});