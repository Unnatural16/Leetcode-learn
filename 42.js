/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left_max=[0,height[0]];
    for(let i=2; i<height.length; i++){
        left_max[i]=Math.max(left_max[i-1],height[i-1]);
    }
    let right_max=[]
    right_max[height.length-1]=0
    right_max[height.length-2]=height[height.length-1]
    for(let i=height.length-3;i>=0;i--){
        right_max[i]=Math.max(right_max[i+1],height[i+1])
    }
    let res=0
    for(let i=0;i<height.length;i++){
        let result=Math.min(left_max[i],right_max[i])-height[i]
        res+= result<0 ? 0 : result
    }
    return res
};
console.log(trap(
    [0,1,0,2,1,0,1,3,2,1,2,1]))