//Comment

console.log("Welcome to Pricing Assistant Tool");

let productname = "Yankees Beer Holder";
let costperunit = 9.99;
let baseprice = 19.99;
let discountrate = 0.10;
let SalesTaxRate = 0.07;
let FixedMonthlyCosts = 199;

let discountedprice = baseprice * (1 - discountrate);
let finalPriceWithtax = discountedprice * (1 + SalesTaxRate);
let profitperunit = finalPriceWithtax - costperunit;

let breakevenunits = Math.ceil(FixedMonthlyCosts / profitperunit);
let isprofitable = profitperunit > 0;

console.log("Product Name: " + productname);
console.log("Discounted Price: $" + discountedprice.toFixed(2));
console.log("Final Price with Tax: $" + finalPriceWithtax.toFixed(2));
console.log("Profit per Unit: $" + profitperunit.toFixed(2));
console.log("Breakeven Units: " + breakevenunits);
console.log("per-unit profitability: " + isprofitable);