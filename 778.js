class UnionFind {
    constructor(n) {
        this.parent = []
        for (let i = 0; i < n; i++) {
            this.parent[i] = i
        }
    }
    find(x) {
        let pri = x
        while (this.parent[x] != x) {
            x = this.parent[x]
        }
        this.parent[pri] = x
        return x
    }
    union(x, y) {
        let a = this.find(x)
        let b = this.find(y)
        if (a != b) {
            this.parent[b] = a
        }
    }
}
/**
 * @param {number[][]} heights
 * @return {number}
 */
var swimInWater = function(heights)  {
    let len = heights[0].length
    let last=len*heights.length
    let bians=[]
    let unionFind =new UnionFind(last)
    for(let i=0;i<heights.length; i++){
        for(let j = 0; j < heights[i].length;j++){
            if(heights[i][j+1]!=null){
                bians.push({
                    weight: Math.max(heights[i][j],heights[i][j+1]),
                    points:[i*len+j,i*len+j+1]
                })
            }
            if(heights[i+1]!=null){
                bians.push({
                    weight: Math.max(heights[i][j],heights[i+1][j]),
                    points:[i*len+j,i*len+j+len]
                })
            }
        }
    } 
    bians.sort((a, b)=>a.weight-b.weight)
    for(let bian of bians){
        unionFind.union(...bian.points)
        if(unionFind.find(0)==unionFind.find(last-1)){
            return bian.weight
        }
    }
    return 0
};