/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let length=nums1.length+nums2.length
    if(length==0)return null
    if(length==1)return (nums1.length==1) ? nums1[0] : nums2[0]
    let odd=length%2==1
    let index=0,i=0,j=0
    let res
    if(odd){
        while(index<length/2){
            if(nums2[j]!=null&&nums1[i]==null||nums1[i]>nums2[j]){
                res=nums2[j++]
            }else{
                res=nums1[i++]
            }
            index++
        }
    }else{
        let pre,now
        while(index<=length/2){
            if(nums2[j]!=null&&nums1[i]==null||nums1[i]>nums2[j]){
                pre=now
                now=nums2[j++]
            }else{
                pre=now
                now=nums1[i++]
            }
            index++
        }
        res=(pre+now)/2
    }
    return res
};
console.log(findMedianSortedArrays([1,3],[2]))