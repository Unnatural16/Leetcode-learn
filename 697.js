/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let map=new Map();
    for(let i = 0; i < nums.length; i++) {
        const result = map.get(nums[i]);
        if(result){
            result[0]++
            result[2]=i
        }else{
            map.set(nums[i],[1,i,i])
        }
    }
    const val= Array.from(map.values())
    const max=Math.max(...val.map(item =>item[0]));
    return Math.min(...val.filter(item =>item[0]==max).map(item =>item[2]-item[1]+1))
};
console.log(findShortestSubArray([1,2,2,3,1]))