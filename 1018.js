/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
    let last=0;
    for(let i=0; i<A.length; i++){
        last*=2
        if(A[i]!=0){
            last+=1;
        }
        last%=10;
        A[i]=last%5==0
    }
    return A
};