const phones = [
    {name: 'Oppo', color: 'red', price: 12000},
    {name: 'Samsung', color: 'white', price: 25000},
    {name: 'Vivo', color: 'balck', price: 5000},
    {name: 'Nokia', color: 'mat', price: 10000},
    {name: 'onePlus', color: 'red', price: 60000}
]

function cheapestPhone(phones){
   let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const result = cheapestPhone(phones);
console.log(result);