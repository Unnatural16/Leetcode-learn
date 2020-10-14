function getCommand(a,b){
    let map= new Map();
    for (let item of a){
        const ia=map.get(item);
        if(ia==null){
            map.set(item,1)
        }else{
            map.set(item,ia+1)
        }
    }
    let result=[]
    for (let item of b){
        const ib=map.get(item)
        if(ib){
            result.push(item)
            map.set(item,ib-1)
        }
    }
    return result
}
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    return A.reduce(getCommand)
};