const Product = require("./Product");

class Basket {
  constructor() {
    this.items = {}; // key => value
    this.total = 0; // total price of basket i.e) weights * price/lbs
  }
  addItem(product) {
    if (product instanceof Product) {
      this.items[product.productName] = product.weight;
      this.total += product.weight * product.pricePerLbs;
    } else {
      console.log(
        "Sorry you are trying to add something that is not a product"
      );
    }
  }

  removeItem(itemName, weight, price) {
    if (this.items.hasOwnProperty(itemName)) {
      delete this.items[itemName];
      this.total -= weight * price;
    } else {
      console.log("Sorry but the item you have specified does not exist!");
    }
  }

  checkout(paid, customerName) {
    const grandTotal = calcTax(this.total);
    if (paid < grandTotal) {
      console.log("Sorry but you are short: " + (grandTotal - paid));
    } else {
      console.log(
        "Thanks for shopping with us " +
          customerName +
          "! Generating receipt..."
      );
      const changeDue = paid - grandTotal;
      this.printReceipt(changeDue, paid, grandTotal);
    }
  }

  printReceipt(changeDue, paid, grandTotal) {
    for (var key in this.items) {
      console.log("Item: " + key + " : " + this.items[key] + "lbs");
    }
    console.log("\nTotal Before Taxes:" + this.total);
    console.log("Grand Total: " + grandTotal);
    console.log("Total Paid: " + paid);
    console.log("Change Due: " + changeDue);
  }
}

var calcTax = function (preTax) {
  let sum = preTax * 0.14;
  return sum + preTax;
};

module.exports = Basket;
