const myLibrary = [];
const showButton = document.querySelector("#dope");
const closeButton = document.querySelector("#toodope");
const dialog = document.getElementById('myDialog');
const form = document.getElementById('myForm');
showButton.addEventListener("click", function(){
  dialog.showModal();
})
closeButton.addEventListener("click", function(){
  form.reset();
  dialog.close();
})
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = form.elements.title.value.trim();
  const writer = form.elements.writer.value.trim();
  const noPage = form.elements.noPage.value;
  const isRead = form.elements.isRead.checked;

  if (!title || !writer || !noPage) {
    alert("Please fill in all required fields.");
    return;
  }
  addBookToLibrary(title, writer, noPage, isRead);
  form.reset();
  dialog.close();
  for(let i=0;i<myLibrary.length;i++){
    const curr=myLibrary[i];
    console.log(curr.title+curr.writer+curr.noPages+curr.isRead);
  }
});

function Book(title, writer, nopages, isRead) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.writer = writer;
  this.nopages = nopages;
  this.isRead = isRead;
}

function addBookToLibrary(title, writer, nopages, isRead) {
  const book = new Book(title, writer, nopages, isRead);
  myLibrary.push(book);
}
addBookToLibrary("The Last Wish", "Andrzej Sapkowski", "288", true);
addBookToLibrary("Sword of Destiny", "Andrzej Sapkowski", "384", true);

