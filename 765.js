/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
    let unionFind=new UnionFind(row.length)
    for(let i=0;i<row.length;i+=2){
        unionFind.union(i,i+1)
        unionFind.union(row[i],row[i+1])
    }
    let count=0
    unionFind.arr.forEach((item,index)=>{
        if(item==index){
            count++
        }
    })
    return count-1
};
class UnionFind {
  constructor(n) {
    this.arr = []
    for (let i = 0; i < n; i++) {
      this.arr[i] = i;
    }
  }
  find(x) {
    let pri=x
    while (this.arr[x] !== x) {
      x = this.arr[x];
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

console.log(minSwapsCouples([0,1,2,3]))