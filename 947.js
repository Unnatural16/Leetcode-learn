class UnionFind {
    constructor(n) {
        this.count = 0;
        this.parent = [];
    }

    find(index) {
        if (this.parent[index] === undefined) {
            this.parent[index] = index
            this.count++;
        }

        if (this.parent[index] !== index) {
            this.parent[index] = this.find(this.parent[index])
        }
        return this.parent[index];
    }

    union(index1, index2) {
        let a = this.find(index1);
        let b = this.find(index2);
        if (a === b) return;
        this.parent[a] = b;
        this.count--;
    }

    getCount() {
        return this.count;
    }
}

let removeStones = function (stones) {
    const n = stones.length;
    const unionFind = new UnionFind(n)

    stones.forEach((value, index) => {
        unionFind.union(value[0] + 10001, value[1])
    });

    return n - unionFind.getCount();
}

