/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
    people.sort((a, b) => {
        if (b[0] != a[0]) {
            return b[0] - a[0]
        } else {
            return a[1] - b[1]
        }
    })
    let queue = []
    for (const item of people) {
        queue.splice(item[1], 0, item)
    }
    return queue
};
console.log(reconstructQueue(
    [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]))