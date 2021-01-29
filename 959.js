class UnionFind {
    constructor(n) {
        this.parent = []
        this.count = 0
    }
    find(x) {
        if (this.parent[x] == null) {
            this.count++
            return this.parent[x] = x
        }
        else if (x == this.parent[x]) {
            return this.parent[x]
        } else {
            return this.parent[x] = this.find(this.parent[x])
        }
    }
    union(x, y) {
        let a = this.find(x)
        let b = this.find(y)
        if (a != b) {
            this.count--
            this.parent[b] = a
        }
    }
}
/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function (grid) {
    let len = grid.length
    let unionFind = new UnionFind(4 * len * len)
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            let index = (i * len + j) * 4
            if (i != 0) {
                unionFind.union(index + 0, (index - len * 4 + 2))
            }
            if (i != len-1) {
                unionFind.union(index + 2, (index + len * 4 + 0))
            }
            if (j != 0) {
                unionFind.union(index + 3, (index - 4 + 1))
            }
            if (j != len-1) {
                unionFind.union(index + 1, (index + 4 + 3))
            }
            switch (grid[i][j]) {
                case " ":
                    {
                        unionFind.union(index, index + 1)
                        unionFind.union(index, index + 2)
                        unionFind.union(index, index + 3)
                    }
                    break
                case "\\":
                    {
                        unionFind.union(index, index + 1)
                        unionFind.union(index + 2, index + 3)
                    }
                    break
                case "/":
                    {
                        unionFind.union(index, index + 3)
                        unionFind.union(index + 1, index + 2)
                    }
                    break
                default:
                    break
            }
        }
    }
    return unionFind.count
}; 
console.log(regionsBySlashes([" /","/ "]))