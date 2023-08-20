const myLibrary = [];
myLibrary[0] = new Book('Harry Potter', 'J.K. Rowling', 231, true);


function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.id = Math.floor(Math.random() * 999);

}

//Modal trigger
var modal = document.getElementById("modalForm");
var btn = document.getElementById("add-btn");
var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
/*
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/


//Library functions
function addBookToLibrary () {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let readStatus = document.getElementById("readStatus").checked;
  myLibrary.push(new Book(title, author, pages, readStatus));
  document.getElementById("bookForm").reset();
  render();
}

function render() {
  let libraryEl = document.querySelector("#books-array");
  libraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.innerHTML = `

        <span class="remove-span" onclick="removeBookById(${book.id})">&times;</span>
        <h3 class="title">${book.title}</h3>
        <h5 class="author">${book.author}</h5>


        <p class="pages">${book.pages} pages</p>
        <p class="read-status">${book.readStatus ? "Read" : "Not Read"}</p>
        <button id="read-btn" onclick="modifyReadStatus(${book.id})" type="button">Read Toggle</button>

    `;
    libraryEl.appendChild(bookEl);
  }
}

function removeBookById(id) {
    for (let i = 0; i < myLibrary.length; i++) {
      if (myLibrary[i].id === id) {
        myLibrary.splice(i, 1);
        break; // Stop the loop since you've found and removed the item
      }
    }
    render();
}

// Function to modify the binary value by ID
function modifyReadStatus(id) {
    const objectToUpdate = myLibrary.find(item => item.id === id);
  
    if (objectToUpdate) {
      objectToUpdate.readStatus = !objectToUpdate.readStatus;
    }
    render();
  }
  