function factorial(number){
    let mul = 1;
    for(let i = 1; i <=number; i++){
        mul = mul * i;
    }
    return mul;
}

const fact = factorial(10);
console.log(fact);