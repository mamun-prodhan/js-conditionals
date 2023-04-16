const shoppingCart = [
    {name: 'shoe', price: 1500, quantity: 2},
    {name: 'pant', price: 1000, quantity: 2},
    {name: 'shirt', price: 500, quantity: 4},
    {name: 'watch', price: 1000, quantity: 3},
    {name: 'panjabi', price: 100, quantity: 5}
]

function totalCost(shoppingCart){
    let sum = 0;
    for(let i = 0; i < shoppingCart.length; i++){
        const product = shoppingCart[i]
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
    }
    
    return sum;
}

const result = totalCost(shoppingCart);
console.log(result)