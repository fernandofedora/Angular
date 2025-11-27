import  { type Product, texCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'nokia A1',
        price: 150.0
    },
    {
        description: 'iPad Air',
        price: 250.0
    }
];

// Tax = 0.15
const [total, tax] = texCalculation ({
    products: shoppingCart,
    tax: 0.15,
})
console.log('Total', total);
console.log('Total', tax);
