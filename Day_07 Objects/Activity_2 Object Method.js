// Object Methods

// Task-3:


const book = {
    title: "My World",
    author: "Hemanth",
    year: 2024,
    // Adding a method to return title and author
    getTitleAndAuthor: function(){
        return `${this.title} by ${this.author}`;
    }
};

console.log(book.getTitleAndAuthor());

// Task-4:


const book1 = {
    title: "My World",
    author: "Hemanth",
    year: 2024,
    // Method to update the year property
    updateYear: function(newYear){
        this.year = newYear;
    }
};

console.log(book1.updateYear(2025)); // This will not show an error. It updates the year and returns undefined since the method does not explicitly return a value.

