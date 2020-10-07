//22. 括号生成 难度中等
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    if (n === 0 || n === null) return []
    function code(left, right) {
        if (left == n) {
            //加右括号
            if (right + 1 == n)//到达队尾
            {
                return [[')']]
            }
            let result = code(left, right + 1)
            result.forEach(element => {
                element.unshift(')')
            });
            return result
        } else if (right == left) {
            //加左括号
            let result = code(left + 1, right)
            result.forEach(element => {
                element.unshift('(')
            });
            return result
        } else {
            let resultR = code(left, right + 1)
            resultR.forEach(element => {
                element.unshift(')')
            });
            let resultL = code(left + 1, right)
            resultL.forEach(element => {
                element.unshift('(')
            });
            return [...resultR, ...resultL]
        }
    }
    let result= code(0, 0)
    for(let i=0;i<result.length;i++) {
        result[i]=result[i].join('')
    }
    return result
};
// 执行用时：76 ms, 在所有 JavaScript 提交中击败了86.38%的用户
// 内存消耗：39.5 MB, 在所有 JavaScript 提交中击败了10.86%的用户