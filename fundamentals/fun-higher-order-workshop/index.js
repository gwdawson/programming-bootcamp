const hof = {};

hof.identity = function (input) {
  return input;
};

hof.identityf = function (input) {
  function returnInput() {
    return input;
  }
  return returnInput;
};

hof.add = function (input1, input2) {
  return input1 + input2;
};

hof.sub = function (input1, input2) {
  return input1 - input2;
};

hof.mul = function (input1, input2) {
  return input1 * input2;
};

hof.inc = function (input) {
  return hof.add(input, 1);
};

hof.addf = function (input) {
  function add(input2) {
    return input + input2;
  }
  return add;
};

hof.curry = function (binary, num1) {
  function curry1(num2) {
    return binary(num1, num2);
  }
  return curry1;
};

hof.liftf = function (binary) {
  function lift(num) {
    function lift2(num2) {
      return binary(num, num2);
    }
    return lift2;
  }
  return lift;
};

hof.twice = function (binary) {
  function unary(num) {
    return binary(num, num);
  }
  return unary;
};

hof.composeu = function (square, double) {
  function innerFunc(num) {
    const squareNum = square(num);
    return double(squareNum);
  }
  return innerFunc;
};

hof.composeb = function (binary1, binary2) {
  function callingBoth(num1, num2, num3) {
    const name1 = binary1(num1, num2);
    return binary2(binary1(num1, num2), num3);
  }
  return callingBoth;
};

hof.limit = function (binary, timesToCall) {
  let counter = 0;
  function func(num1, num2) {
    const sum = binary(num1, num2);
    counter++;
    return counter > timesToCall ? undefined : sum;
  }
  return func;
};

hof.from = function () {};

hof.to = function () {};

hof.fromTo = function () {};

hof.element = function () {};

hof.collect = function () {};

hof.filter = function () {};

hof.concat = function () {};

hof.fibonaccif = function () {};

hof.gensymf = function () {};

hof.gensymff = function () {};

hof.counter = function () {};

hof.revokable = function () {};

module.exports = hof;
