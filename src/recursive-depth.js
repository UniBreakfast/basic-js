module.exports = class DepthCalculator {
  calculateDepth(arr) {
    const subArrs = arr.filter(item => Array.isArray(item))
    if (!subArrs.length) return 1
    return Math.max(...subArrs.map(this.calculateDepth, this)) + 1
  }
};