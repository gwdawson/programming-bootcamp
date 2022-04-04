module.exports = function checkPizzaShopOpen(shopName) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      const pizzaShops = [
        { name: "Nicki's Amazing Pizza", open: false },
        { name: "Mitch's Delicious Pizza", open: false },
        { name: "David's Marvelous Pizza", open: false },
        { name: "Liam's Special Pizza", open: true }
      ];
      const pizzaShop = pizzaShops.find(({ name }) => name === shopName);
      if (pizzaShop) resolve(pizzaShop);
      else reject('pizza shop not found! 😢');
    }, Math.random() * 1000);
  });
};
