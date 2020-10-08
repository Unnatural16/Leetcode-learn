/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    function FindSmall(index, sub_target) {
        let result =[]
        for (var i = index; i < candidates.length; i++) {
            let num = candidates[i]
            if (num == sub_target) {
                result.push([num])
            } else if (num > sub_target) {
                break
            } else {
                let sub_result = FindSmall(i, sub_target - num);
                if(sub_result.length!=0) {
                    for (let j=0; j<sub_result.length; j++) {
                        sub_result[j].unshift(num)
                        result.push(sub_result[j])
                    }
                }
            }
        }
        return result
    }
    return FindSmall(0,target)
}