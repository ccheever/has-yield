var hasYield;
try {
  eval('var gen = function *() { yield 1; };');
  hasYield = true;
} catch (err) {
  hasYield = false;
}

module.exports = hasYield;
