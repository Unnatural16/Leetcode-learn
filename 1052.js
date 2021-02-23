/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
    for(let i = 0; i < grumpy.length; i++) {
        grumpy[i]*=customers[i]
    }
    let sum = 0
    for(let i = 0; i <X;i++){
        sum+=grumpy[i]
    }let max=sum
    for(let i = X;i<grumpy.length;i++){
        sum+=grumpy[i]
        sum-=grumpy[i-X]
        max=Math.max(max,sum)
    }
    let res=0
    for(let i = 0; i <customers.length;i++){
        if(grumpy[i]==0){
            res+=customers[i]
        }
    }
    return res+max
};
console.log(maxSatisfied([3],
    [1],
    1))