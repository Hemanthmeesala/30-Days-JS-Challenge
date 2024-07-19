//The this keyword

// Task-7

// There is a syntax error in the code block provided. The 'getTitleAndYear' function is missing a comma after the 'year' property.

const book = {
    title: "My World",
    author: "Hemanth",
    year: 2024,
    
    getTitleAndYear: function(){
        return `${this.title} was published in ${this.year}`;
    }
};
console.log(book.getTitleAndYear());
