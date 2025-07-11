const myLibrary = [];
const showButton = document.querySelector("#dope");
const closeButton = document.querySelector("#toodope");
const dialog = document.getElementById("myDialog");
const form = document.getElementById("myForm");
const content = document.getElementById("content");


showButton.addEventListener("click", () => dialog.showModal());
closeButton.addEventListener("click", () => {
  form.reset();
  dialog.close();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = form.elements.title.value.trim();
  const writer = form.elements.writer.value.trim();
  const noPage = form.elements.noPage.value.trim();
  const isRead = form.elements.isRead.checked;

  if (!title || !writer || !noPage) {
    alert("Please fill in all required fields.");
    return;
  }

  addBookToLibrary(title, writer, noPage, isRead);
  form.reset();
  dialog.close();
  renderBooks();
});

function Book(title, writer, nopages, isRead) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.writer = writer;
  this.nopages = nopages;
  this.isRead = isRead;
}

function addBookToLibrary(title, writer, nopages, isRead) {
  myLibrary.push(new Book(title, writer, nopages, isRead));
}

function renderBooks() {
  content.innerHTML = "";
  myLibrary.forEach((book) => showBooks(book));
}

function showBooks(book) {
  const card = document.createElement("div");
  card.className = "ebook";
  card.id = book.id;

  card.innerHTML = `
          <h4>${book.title}</h4>
          <h6>by ${book.writer}</h6>
          <h6>Length: ${book.nopages}</h6>
          <h6>Status: <input type="checkbox" ${
            book.isRead ? "checked" : ""
          }></h6>
          <button class="remove-btn" data-id="${book.id}">Remove</button>
        `;

  content.appendChild(card);
}

document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("remove-btn")) {
    const id = e.target.dataset.id;
    const index = myLibrary.findIndex((book) => book.id === id);
    if (index !== -1) {
      myLibrary.splice(index, 1);
      renderBooks();
    }
  }
});
