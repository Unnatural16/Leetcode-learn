/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
    for(let i=0;i<arr.length-1;i++) {
        arr[i]-=arr[i+1]
    }
    let pre=0,max=0;
    for(let i=0;i<arr.length-1;i++) {
        if(arr[i]==0) {
            pre=0
        }else{
            pre=(arr[i]*arr[i-1]>0)?1:pre+1
        }
        max=Math.max(max,pre)
    }
    return max+1
};
console.log(maxTurbulenceSize([100]));