const products = [
{name: 'shakib', price: 3200, brand: 'lenevo',color: 'silver'},
{name: 'rudro', price: 200, brand: 'mac',color: 'gray'}
]

const brands = products.map(product => product.brand);
console.log(brands);

products.forEach(product => console.log(product.color));

const cheap = products.filter (product => product.price <= 5000);
console.log(cheap);