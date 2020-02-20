module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('arr is not a valid Array')

  return arr.map((item, i) => {
    if (['--discard-next', '--discard-prev', '--double-next','--double-prev']
      .includes(item)) return []

    const part = [item]
    let iNext = i+1
    while (arr[iNext] == '--discard-next') iNext+=2
    if (arr[i-1]=='--discard-next' || arr[iNext]=='--discard-prev') part.pop()
    if (arr[i-1]=='--double-next') part.push(item)
    if (arr[i+1]=='--double-prev') part.push(item)
    return part
  }).flat()
};
