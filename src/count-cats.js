module.exports = function countCats(backyard) {
  return backyard.flat().filter(val => val === '^^').length
};
