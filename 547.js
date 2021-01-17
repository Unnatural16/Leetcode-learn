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
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let unionFind =new UnionFind(isConnected.length);
    for(let i = 0; i <isConnected.length; i++){
        for(let j = 0; j < isConnected[i].length;j++){
            if(isConnected[i][j]==1&&i!=j){
                unionFind.union(i,j)
            }
        }
    }
    let count=0
    for(let i=0;i< isConnected.length; i++){
        if(unionFind.find(i)==i){
            count++
        }
    }
    return count
};