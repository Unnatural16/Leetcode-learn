/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
    let list = [];
    for (let stone of stones) {
        let flag = false;
        for (let item of list) {
            if (item[0].has(stone[0]) || item[1].has(stone[1])) {
                item[0].add(stone[0])
                item[1].add(stone[1])
                flag = true;
            }
        }
        if (!flag) {
            list.push([new Set([stone[0]]), new Set([stone[1]])])
        }
    }
    let listLength
    do {
        listLength=list.length;
        for (let i = 0; i < list.length; i++) {
            for (let j = i + 1; j < list.length; j++) {
                let flag = false;
                for (let item of list[j][0]) {
                    if (list[i][0].has(item)) {
                        flag = true
                        break
                    }
                }
                if (flag == false) {
                    for (let item of list[j][1]) {
                        if (list[i][1].has(item)) {
                            flag = true
                            break
                        }
                    }
                }
                if (flag) {
                    for (let item of list[j][0]) {
                        list[i][0].add(item)
                    }
                    for (let item of list[j][1]) {
                        list[i][1].add(item)
                    }
                    list.splice(j--, 1)
                }
            }
        }
    } while (listLength>list.length)
    return stones.length - list.length
};