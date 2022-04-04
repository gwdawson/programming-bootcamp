module.exports = function cookHealthyMeal() {
  return new Promise(resolve => {
    setTimeout(function() {
      resolve('you cooked a healthy meal and feel better for it! 🥦');
    }, Math.random() * 1000);
  });
};
