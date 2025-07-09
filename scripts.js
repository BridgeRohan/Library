const myLibrary = [];

function Book(title, writer, nopages, isRead) {
  this.id = crypto.randomUUID(); 
  this.title = title;
  this.writer = writer;
  this.nopages = nopages;
  this.isRead = isRead;
}


function addBookToLibrary(title,writer,nopages,isRead) {
  const book = new Book(title,writer,nopages,isRead);
  myLibrary.push(book);
}
/* addBookToLibrary('The Last Wish', 'Andrzej Sapkowski', '288', true);
addBookToLibrary('Sword of Destiny', 'Andrzej Sapkowski', '384', true);
addBookToLibrary('Blood of Elves', 'Andrzej Sapkowski', '320', true);
addBookToLibrary('Time of Contempt', 'Andrzej Sapkowski', '331', true);
addBookToLibrary('Baptism of Fire', 'Andrzej Sapkowski', '343', true);
addBookToLibrary('The Tower of the Swallow', 'Andrzej Sapkowski', '436', false);
addBookToLibrary('The Lady of the Lake', 'Andrzej Sapkowski', '531', false);
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '366', true);
addBookToLibrary('The Alchemist', 'Paulo Coelho', '182', false);
addBookToLibrary('On the Road', 'Jack Kerouac', '307', false);
addBookToLibrary('1984', 'George Orwell', '328', true); */
addBookToLibrary('The Last Wish', 'Andrzej Sapkowski', '288', true);
addBookToLibrary('Sword of Destiny', 'Andrzej Sapkowski', '384', true);
for(let i=0;i<myLibrary.length;i++){
    const t=myLibrary[i]
    console.log(t.title+" "+t.writer+" "+t.nopages+" "+t.isRead);
}
