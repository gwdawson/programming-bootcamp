const { VendingMachine } = require("./3-oop-vending-machine");

describe("VendingMachine", () => {
  const testVM = new VendingMachine();
  console.log(testVM);
  test("new VendingMachine() should have a credit property", () => {
    const testVM = new VendingMachine();
    expect(testVM.hasOwnProperty("credit")).toBe(true);
  });
  test("new VendingMachine() should have a stock property", () => {
    const testVM = new VendingMachine();
    expect(testVM.hasOwnProperty("stock")).toBe(true);
  });
  test("new VendingMachine() should have an addStock method", () => {
    const testVM = new VendingMachine();
    const item = { name: "marsBar", price: 50, quantity: 6 };
    testVM.addStock(item, "A");
    expect(testVM.stock).toEqual({
      A: { name: "marsBar", price: 50, quantity: 6 },
      B: {},
      C: {},
      D: {},
      E: {},
      F: {},
    });
    const testVM2 = new VendingMachine();
    const item2_1 = { name: "marsBar", price: 50, quantity: 6 };
    const item2_2 = { name: "snickers", price: 65, quantity: 11 };
    testVM2.addStock(item2_1, "A");
    testVM2.addStock(item2_2, "C");
    expect(testVM2.stock).toEqual({
      A: { name: "marsBar", price: 50, quantity: 6 },
      B: {},
      C: { name: "snickers", price: 65, quantity: 11 },
      D: {},
      E: {},
      F: {},
    });
  });
  test("new VendingMachine() should have an addCredit method", () => {
    const testVM = new VendingMachine();
    testVM.addCredit(100);
    expect(testVM.credit).toBe(100);
  });
  test("new VendingMachine() should have an purchaseItem method", () => {
    const testVM = new VendingMachine();
    const item = { name: "Coke", price: 75, quantity: 8 };
    testVM.addStock(item, "A");
    testVM.addCredit(100);
    expect(testVM.purchaseItem("A")).toBe("Coke");
  });
});
