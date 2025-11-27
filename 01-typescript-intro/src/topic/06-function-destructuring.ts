
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

interface TaxCalculation {
    tax: number;
    products: Product [];
}

//function texCalculation( options: TaxCalculation): number[]{
export function texCalculation( options: TaxCalculation): number[]{
   const {tax, products} = options;

    let total = 0;
    options.products.forEach( ({price}) => {
        total += price;
    })

    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total] = texCalculation ({
    products: shoppingCart,
    tax: tax,
})
console.log('Total', total);
console.log('Total', tax);

//export{}