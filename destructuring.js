// const product = {name: 'shirt', price: 500, quantity: 7}
// const price = product.price;
// const discount = product.price *20/100;
// const youPay = product.price - discount;
// const vatAmount = product.price*7/100;
// const totalAmount = youPay + vatAmount;

// const discount = price *20/100;
// const youPay = price - discount;
// const vatAmount = price*7/100;
// const totalAmount = youPay + vatAmount;

const { price }= {name: 'shirt', price: 500, quantity: 7}
const discount = price *20/100;
const youPay = price - discount;
const vatAmount = price*7/100;
const totalAmount = youPay + vatAmount;

// console.log(price);

const device = {name: 'phone', brand: 'samsung', price: 18200};
const {brand} = device;

const numbers = [25, 88, 85, 855];
const [first, second] = numbers;

const [math, physics] = [100, 200];
console.log(physics);

