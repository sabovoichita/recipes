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
function initEvents() {
  document.body.innerHTML = createHeader();
}
initEvents();
