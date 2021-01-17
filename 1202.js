class BingchaSet {
  constructor(n) {
    this.arr = []
    for (let i = 0; i < n; i++) {
      this.arr[i] = i;
    }
  }
  find(x) {
    let pri=x
    while (arr[x] !== x) {
      x = arr[x];
    }
    this.arr[pri]=x;
    return x
  }
  union(x, y) {
    let xFather = this.find(x)
    let yFather = this.find(y)
    if (xFather !== yFather) {
      this.arr[xFather] = yFather;
    }
  }
}

/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
  let bingchaSet = new BingchaSet(s.length)
  for (pair of pairs) {
    bingchaSet.union(pair[0], pair[1])
  }
  let rings = []
  let flag = []
  for (let i = 0; i < bingchaSet.arr.length; i++) {
    let index = bingchaSet.find(i)
    if (rings[index] != null) {
      rings[index].add(i)
    } else if (flag[index] != null) {
      rings[index] = new Set([i, flag[index]])
    } else {
      flag[index] = i
    }
  }
  s = s.split('')
  for (let ring of rings) {
    if (ring == null) continue
    let buffer = []
    for (let index of ring) {
      buffer.push(s[index])
    }
    buffer.sort()
    let indexs = Array.from(ring)
    indexs.sort((a, b) => a - b)
    for (let index in indexs) {
      s[indexs[index]] = buffer[index]
    }
  }
  return s.join('')
};
console.log(smallestStringWithSwaps("dcab",
  [[0, 3], [1, 2]]))