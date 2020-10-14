
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    function swap(a, b) {
        let temp = nums[a]
        nums[a] = nums[b]
        nums[b] = temp
    }
    let sum = nums.reduce((prev, next) => prev + next)
    let spilt_flag = 0
    let sum1 = nums[0], sum2 = sum - sum1
    while (sum1 != sum2) {
        if (sum1 > sum2) {
            if (spilt_flag == 0) return false
            let min = nums[0], min_index = 0
            for (let i = 0; i <= spilt_flag; i++) {
                if (nums[i] < min) {
                    min = nums[i]
                    min_index = i
                }
            }
            if (min_index != spilt_flag) swap(min_index, spilt_flag)
            sum1 -= min
            sum2 += min
            spilt_flag--
        } else {
            if (spilt_flag == nums.length - 1) return false
            let min = nums[spilt_flag + 1], min_index = spilt_flag + 1
            for (let i = min_index; i <= nums.length - 1; i++) {
                if (nums[i] < min) {
                    min = nums[i]
                    min_index = i
                }
            }
            if (min_index != spilt_flag + 1) swap(min_index, spilt_flag + 1)
            sum1 += min
            sum2 -= min
            spilt_flag++
        }
    }
    return true
};

console.log(canPartition([20,10,9,8,8,3]))