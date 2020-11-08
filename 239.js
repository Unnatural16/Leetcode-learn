class Danxiangduilie{
    constructor(){
        this.queue =[]
    }
    add(num) {
        for (var i = this.queue.length - 1; i >= 0; i--) {
            if (this.queue[i] >= num) break
        }
        this.queue.length = i + 1
        this.queue.push(num)
    }
    remove(num) {
        if (this.queue[0] <= num) {
            return this.queue.shift()
        }
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let thequeue =new Danxiangduilie()
    let res = []
    for (let i = 0; i < nums.length; i++) {
        if (i >= k) {
            thequeue.remove(nums[i - k])
        }
        thequeue.add(nums[i])
        if (i >= k - 1) {
            res.push(thequeue.queue[0])
        }
    }
    return res
};
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7],
    3))