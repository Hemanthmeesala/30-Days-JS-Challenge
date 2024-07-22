// Nested Objects

// Task-5


const book1 = {
    title: "My World",
    author: "Hemanth",
    year: 2024
};
const book2 = {
    title: "JavaScript Mastery",
    author: "Likhitha",
    year: 2023
};
const book3 = {
    title: "Meta World",
    author: "Rishita",
    year: 2022
};

const library = {
    name: "City Library",
    books: [book1, book2, book3]
}
console.log(library);


// Task-6

// Access and log the name of the library

console.log("Library Name:", library.name);

// Access and log the titles of all the books in the library

console.log("Book Titles:");
library.books.forEach(book => {
    console.log(book.title);
})