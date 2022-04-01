//Anything writtem as a class can be written as a function 

// function Book(title, author, ISBN, numCopies) {

//     this.title = title;
//     this.author = author;
//     this.ISBN = ISBN;
//     this.numCopies = numCopies;
// }

// Book.prototype.getAvailability = function () {
//     if (this.numCopies == 0) {
//         return "Out of stock";
//     } else if (this.numCopies < 10) {
//         return "Low stock of books";
//     }
//     return "In stock";
// }

// Book.prototype.sell = function(numCopiesSold = 1) {
//     this.numCopies -= numCopiesSold;
// }

// Book.prototype.restock = function(numCopiesRestocked = 5) {
//     this.numCopies += numCopiesRestocked;
// }

//Make it now into a class component
class Book {
    constructor(title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }

    get availability() {
        return this.getAvailability();
    }


    //using a get method
    getAvailability() {
        if(this. numCopies == 0) {
            return "Out of stock";
        }
        else if (this.numCopies < 10){
            return "Low stock";
        }
        return "In stock";
        
    }

    sell(numCopiesSold = 1) {
        this.numCopies -= numCopiesSold;
    }

    restock(numCopiesRestocked = 5){
        this.numCopies += numCopiesRestocked;
    }

}

const HungerGames = new Book("Hunger Games", 'Suzanne Collins', 12315, 10);

console.log(HungerGames.getAvailability());
HungerGames.restock(12);
console.log(HungerGames.getAvailability());
HungerGames.sell(17);
console.log(HungerGames.getAvailability());