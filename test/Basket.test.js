const Basket = require("../Basket");
const Customer = require("../Customer");

jest.mock("../Basket");

it("Test to make sure Customer reacts with Basket API properly", () => {
  const customer = new Customer();

  expect(Basket).toHaveBeenCalledTimes(1);
});
