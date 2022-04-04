module.exports = function callPizzaShop(number, isOpen) {
  return new Promise(resolve => {
    setTimeout(function() {
      if (isOpen === true && number === '01139164132')
        resolve('sit back, relax, your pizza will be with you shortly 🍕');
    }, Math.random() * 1000);
  });
};
