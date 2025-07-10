const myLibrary = [];
const showButton = document.querySelector("#dope");
const closeButton = document.querySelector("#toodope");
const dialog = document.getElementById('myDialog');
const form = document.getElementById('myForm');

showButton.addEventListener("click", function () {
  dialog.showModal();
});
closeButton.addEventListener("click", function () {
  form.reset();
  dialog.close();
});

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

  document.getElementById("content").innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    showBooks(myLibrary[i]);
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

function showBooks(curr) {
  let cont = document.getElementById("content");
  let inn = document.createElement("div");
  inn.id = curr.id;

  let tit = document.createElement("h4");
  tit.id = "tit";
  tit.innerHTML = curr.title;

  let aut = document.createElement("h6");
  aut.innerHTML = "by " + curr.writer;
  aut.id = "aut";

  let nope = document.createElement("h6");
  nope.innerHTML = "Length: " + curr.nopages;
  nope.id = "nope";

  let stat = document.createElement("h6");
  stat.innerHTML = "status: ";
  stat.id = "stat";

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'readCheckbox';
  checkbox.name = 'isRead';
  checkbox.checked = curr.isRead === true;
  const remo = document.createElement('button');
  remo.className = "remove-btn";
  remo.innerText = "Remove";
  remo.setAttribute("data-id", curr.id);


  inn.appendChild(tit);
  inn.appendChild(aut);
  inn.appendChild(nope);
  inn.appendChild(stat);
  inn.appendChild(checkbox);
  inn.appendChild(remo);
  cont.appendChild(inn);
}
addBookToLibrary("The Last Wish", "Andrzej Sapkowski", "288", true);
addBookToLibrary("Sword of Destiny", "Andrzej Sapkowski", "384", true);
for (let i = 0; i < myLibrary.length; i++) {
  showBooks(myLibrary[i]);
}


document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("remove-btn")) {
    const disc = e.target.dataset.id;

    e.target.parentElement.remove();

    for (let i = 0; i < myLibrary.length; i++) {
      if (disc === myLibrary[i].id) {
        myLibrary.splice(i, 1);
        break;
      }
    }
    document.getElementById("content").innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
      showBooks(myLibrary[i]);
    }
  }
});
