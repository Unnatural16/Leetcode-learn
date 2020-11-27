/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    let max=nums.reduce((a,b)=>Math.max(a, b))
    let min=nums.reduce((a,b)=>Math.min(a, b))
    let bucketlen=Math.ceil(Math.max((max-min)/(nums.length-1),1))
    let bucketNum=Math.ceil((max-min)/bucketlen+1)
    let buckets=[]
    for( num of nums){
        let location=Math.ceil((num-min)/bucketlen)
        if(buckets[location]==null){
            buckets[location]=[num]
        }else{
            buckets[location].push(num)
        }
    }
    for(let i=0;i<buckets.length;i++){
        
    }
};