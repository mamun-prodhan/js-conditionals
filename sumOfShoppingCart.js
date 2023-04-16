const shoppingCart = [
    {name: 'shoe', price: 1500},
    {name: 'pant', price: 1000},
    {name: 'shirt', price: 500},
    {name: 'watch', price: 1000},
    {name: 'panjabi', price: 1000}
]

function totalCost(shoppingCart){
    let sum = 0;
    for(let i = 0; i < shoppingCart.length; i++){
        const product = shoppingCart[i]
        sum = sum + product.price;
    }
    
    return sum;
}

const result = totalCost(shoppingCart);
console.log(result);