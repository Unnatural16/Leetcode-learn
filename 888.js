/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    let sumA=A.reduce((a,b)=>a+b)
    let sumB=B.reduce((a,b)=>a+b)
    let sub=sumB-sumA
    let set=new Set(A)
    for(let b of B){
        if(set.has(b-sub/2)){
            return [b-sub/2,b]
        }
    }
};
console.log(fairCandySwap([1,1],
    [2,2]))