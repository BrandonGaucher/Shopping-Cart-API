const Basket = require("./Basket");
const Product = require("./Product");
class Customer {
  constructor(visits = 0, name = "No name") {
    this.basket = new Basket();
    this.visits = visits;
    this.name = name;
  }
}

const brandon = new Customer(10, "Brandon");

const apple = new Product("Apple", 2, 4.99);

brandon.basket.addItem(apple);
brandon.basket.checkout(40, brandon.name);

module.exports = Customer;
