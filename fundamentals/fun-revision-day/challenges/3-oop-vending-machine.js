class VendingMachine {
  constructor() {
    this.credit = 0;
    this.stock = { A: {}, B: {}, C: {}, D: {}, E: {}, F: {} };
  }

  addStock(item, row) {
    this.stock[row] = item;
  }

  addCredit(amount) {
    this.credit += amount;
  }

  purchaseItem(row) {
    if (this.stock[row].quantity > 0 && this.credit >= this.stock[row].price) {
      this.stock[row].quantity--;
      this.credit -= this.stock[row].price;
      return this.stock[row].name;
    }
    return `unable to purchase ${this.stock[row].name}`;
  }
}

module.exports = { VendingMachine };
