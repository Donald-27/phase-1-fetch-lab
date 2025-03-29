// Function to fetch books from the Game of Thrones API
function fetchBooks() {
  // Fetch request to the Game of Thrones API
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json()) // Convert the response to JSON
    .then((data) => {
      // Call renderBooks function and pass the data as an argument
      renderBooks(data);
    })
    .catch((error) => {
      console.error("Error fetching books:", error);
    });
}

// Function to render book titles into the DOM
function renderBooks(books) {
  const mainElement = document.querySelector("main");

  // Create a list of book titles
  const bookList = document.createElement("ul");
  books.forEach((book) => {
    const bookItem = document.createElement("li");
    bookItem.textContent = book.name; // Display the name of each book
    bookList.appendChild(bookItem);
  });

  // Append the list to the main element in the DOM
  mainElement.appendChild(bookList);
}

// Call fetchBooks() when the page loads
document.addEventListener("DOMContentLoaded", () => {
  fetchBooks();
});
