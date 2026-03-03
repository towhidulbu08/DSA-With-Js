let amount = Number(prompt("Enter the amount: "));
console.log("amount", amount);
let discount;
let priceAfterDiscount;
let payblePrice;

function calculatePrice(x) {
  discount = x;
  priceAfterDiscount = (discount * amount) / 100;
  payblePrice = amount - priceAfterDiscount;
  console.log("payable price", Math.floor(payblePrice));
}
if (amount > 0 && amount <= 5000) {
  calculatePrice(0);
} else if (amount >= 5001 && amount <= 7000) {
  calculatePrice(5);
} else if (amount >= 7001 && amount <= 9000) {
  calculatePrice(10);
} else if (amount > 9000) {
  calculatePrice(20);
} else {
  console.log("Invalid Input");
}
