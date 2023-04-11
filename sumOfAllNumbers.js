function sumOfOddNumbers(array){
    var sum = 0;
    for(var i = 0 ; i < array.length; i++){
        sum = sum + array[i];
    }
    return sum;
}

// var result = sumOfAllNumbers([10,20,30,40,50,7,3]);
// console.log(result);

function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        if( numbers[i] % 2 !== 0)
        {
            console.log(numbers[i]);
            oddNumbers.push(numbers[i]);
        }
    }
    return oddNumbers;
}

const oddNumbers = (getOddNumbersOfAnArray([1,2,5,10]))

const oddNumberSum = sumOfOddNumbers(oddNumbers);
console.log(oddNumberSum);
