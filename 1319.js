class UnionFind{
    constructor(n){
        this.parent =[]
        for(let i=0;i<n;i++){
            this.parent[i] =i
        }
    }
    find(x){
        let pri=[]
        while(this.parent[x]!=x&&this.parent[x]!=null){
            pri.push(x)
            x=this.parent[x]
        }
        pri.forEach((n)=>{
            this.parent[n]=x
        })
        return x;
    }
    union(x,y){
        let a = this.find(x)
        let b = this.find(y)
        if(a!=b){
            this.parent[a]=b
        }
    }
}

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
    let union =new UnionFind(n)
    for(let connection of connections){
        union.union(...connection)
    }
    let map=[]
    for(let key in union.parent){
        let result = union.find(key)
        if(map[result]){
            map[result].push(key)
        }else{
            map[result]=[key]
        }
    }
    let NumConnection=-1,con=0
    for(let cur of map){
        if(cur!=null){
            NumConnection++
            con+=cur.length-1
        }
    }
    con=connections.length-con
    return con>=NumConnection?NumConnection:-1
};
console.log(makeConnected(4,
    [[0,1],[0,2],[1,2]]))