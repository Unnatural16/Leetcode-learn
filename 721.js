class UnionFind {
    constructor() {
        this.parent = Object.create(null)
        this.index = 0
    }
    find(id) {
        let pri=id
        while (this.parent[id] != id && this.parent[id] != null) {
            id = this.parent[id]
        }
        this.parent[pri]=this.parent[id]
        return this.parent[id]
    }
    Union(name, mails) {
        if (this.find(name)) {
            name += this.index++
        }
        this.parent[name] = name
        for (let mail of mails) {
            mail+='@'
            let mailParent = this.find(mail)
            if (mailParent == null) {
                this.parent[mail]=name
            }else {
                this.parent[name] = mailParent
                name = mailParent
            }
        }
    }
}
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    let unionFind=new UnionFind()
    for(let account of accounts){
        unionFind.Union(account[0],account.slice(1))
    }
    let map=Object.create(null)
    for(let key in unionFind.parent){
        let parent=unionFind.find(key)
        if(parent==key){
            continue
        }
        if(map[parent]==null){
            map[parent]=new Set([key])
        }else{
            map[parent].add(key)
        }
    }
    let res=[]
    for(let key in map){
        res.push([key.replace(/\d/g,''),...Array.from(map[key].values()).filter((item=>item[item.length-1]=='@')).map(item=>item.slice(0,-1)).sort()])
    }
    return res
};
console.log(accountsMerge([["David","David0@m.co","David4@m.co","David3@m.co"],["David","David5@m.co","David5@m.co","David0@m.co"],["David","David1@m.co","David4@m.co","David0@m.co"],["David","David0@m.co","David1@m.co","David3@m.co"],["David","David4@m.co","David1@m.co","David3@m.co"]]))