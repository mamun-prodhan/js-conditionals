// var moneyGiven = 1000;
// var totalCost = 700;
// var moneyReturned = moneyGiven - totalCost;
// console.log(moneyReturned);

// var firstLine = " I am going to be";
// var secondLine = "an awesome web developer";

// var combinedLine = firstLine + " " + secondLine;
// console.log(combinedLine);

// var number = 119;
// var reminder = 199 % 5;
// console.log(reminder);

var fruits = ['Apple', 'Banana', 'Orange'];

for(var i = 0; i < fruits.length; i++){
    
    if(fruits[i] === 'Banana'){
        console.log('index of banana: ', i);
        fruits[i] = 'Mango';
    }
    
}

fruits[2] = 'Watermelon';

console.log(fruits);