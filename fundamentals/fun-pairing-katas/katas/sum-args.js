/* The function sumArgs should accept any number of arguments, and add them together. If given one argument, it should return that. If it is not given arguments, it should return 0 */

function sumArgs(...args) {
  let count = 0;
  if (args.length < 1) return 0;
  args.forEach((num) => {
    count += Number(num);
  });
  return count;
}

module.exports = sumArgs;
