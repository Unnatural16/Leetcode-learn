/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
    let map=new Map();
    for (let i=0;i<S.length; i++){
        if(map.get(S[i])){
            map.set(S[i],map.get(S[i])+1)
        }else{
            map.set(S[i],1)
        }
    }
    let arrmap=Array.from(map).sort((a, b)=>b[1]-a[1])
    let string=''
};
console.log(reorganizeString('fgasdgd'))
console.log(2)