console.log("Welcome");

function $(selector) {
  return document.querySelector(selector);
}
function createHeader() {
  return `
    <header>
     <h1>Recepies</h1>
    </header>
    `;
}

function createFooter() {
  return `
      <footer>
       <h5>Recepies 2024</h5>
      </footer>
      `;
}
function initEvents() {
  document.body.innerHTML = createHeader() + createFooter();
}
initEvents();
