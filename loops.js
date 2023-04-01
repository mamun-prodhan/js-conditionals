// function calculation(text){
//    console.log("This is", text(), "room");
// }

// calculation(function(){
//    return " my reading ";
// })


// {
//    var car = "volvo";
//    console.log(car);
// }

// console.log(car);

// function run(){
//    var message = "Run Forrest Run!!";
//    console.log(message);
// }

// run();
// console.log(message);

// function foo() {
//    // "foo" function scope
//    let count = 0;
//    console.log(count); // 0
//  }
//  function bar() {
//    // "bar" function scope
//    let count = 1;
//    console.log(count); // 1
//  }
//  foo();
//  bar();


// display every element of an array
// var numbers = [45, 87, 89, 56, 32, 51, 25];
// console.log(numbers.length);
// for(var i = 0; i < numbers.length; i++){
//   console.log(numbers[i]);
// }

var items = ['bottle', 'mouse', 'sunglass', 'pen', 'book', 'glass', 'fan'];
for(var i = 0; i < items.length; i++){
  
  if(items[i] === 'book'){
    console.log(items[i]);
  }

  else if(items[i] === 'bottle'){
    console.log("bottle is found, stop the loop");
    break;
  }
}
