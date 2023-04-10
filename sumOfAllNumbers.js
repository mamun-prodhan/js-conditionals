function sumOfAllNumbers(array){
    var sum = 0;
    for(var i = 0 ; i < array.length; i++){
        sum = sum + array[i];
    }
    return sum;
}

var result = sumOfAllNumbers([10,20,30,40,50]);
console.log(result);