module.exports = function getPizzaShopInfo(shopName) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      const pizzaShops = [
        { name: "Nicki's Amazing Pizza", phone: '01131234567' },
        { name: "Mitch's Delicious Pizza", phone: '01136224597' },
        { name: "David's Marvelous Pizza", phone: '01137734560' },
        { name: "Liam's Special Pizza", phone: '01139164132' }
      ];
      const pizzaShop = pizzaShops.find(({ name }) => name === shopName);

      if (pizzaShop) resolve(pizzaShop);
      else reject('pizza shop not found! 😢');
    }, Math.random() * 1000);
  });
};
