let price = parseFloat(prompt('Input amount of money'));
let discount = parseFloat(prompt('Input the discount (%)'));
let maxDiscount = 100;
let priceDicount = price - price * (discount / 100);
let saved = price - priceDicount;
console.log(price < 0 || discount > maxDiscount ? 'Invalid data' : 'Price without discount: ' + price +
    '\n' + 'Discount: ' + discount + '%' +
    '\n' + 'Price with discount: ' + parseFloat(priceDicount.toFixed(2)) +
    '\n' + 'Saved: ' + parseFloat(saved.toFixed(2))
);
