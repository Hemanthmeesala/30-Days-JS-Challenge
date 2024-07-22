// Object Iteration

// Task-8


const book = {
    title: "My World",
    author: "Hemanth",
    year: 2024

}

for(let property in book){
    if(typeof book[property] !== 'function'){
        console.log(`${property}: ${book[property]}`);
    }
}

// Task 9:


// Create a book object
const book1 = {
    title: "My World",
    author: "Hemanth",
    year: 2024,
    // Method to return title and author
    getTitleAndAuthor: function() {
      return `${this.title} by ${this.author}`;
    },
    // Method to update the year property
    updateYear: function(newYear) {
      this.year = newYear;
    },
    // Method to return title and year
    getTitleAndYear: function() {
      return `${this.title} was published in ${this.year}`;
    }
  };
  
  // Log all keys of the book object
  console.log("Keys:", Object.keys(book1));
  
  // Log all values of the book object
  console.log("Values:", Object.values(book1));
