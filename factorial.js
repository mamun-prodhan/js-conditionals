function factorial(number){
    let mul = 1;
    for(let i = 1; i <=number; i++){
        mul = mul * i;
    }
    return mul;
}

const fact = factorial(10);
console.log(fact);

// function factorial(number){
//     let result = 1;
//     let i = 4;
//     while(i <= number){
//         result = result * i;
//         i--;
//     }
//     return result;
// }

// const results = factorial(4);
// console.log(results);