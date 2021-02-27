const a='a'.charCodeAt(0)
/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function (words, puzzles) {
    for (let i = 0; i < puzzles.length; i++) {
        const set=[]
        for(let j = 0; j <puzzles[i].length; j++) {
            set[puzzles[i].charCodeAt(j)-a]=true
        }
        puzzles[i] = { first: puzzles[i][0],set  }
    }
    return puzzles.map(puzzle =>
        words.reduce((total, curr) => {
            return total + check(curr, puzzle)
        }, 0)
    )
};
function check(word, puzzle) {
    let flag = false
    for (let i = 0; i < word.length; i++) {
        flag = flag || puzzle.first === word[i]
        if (!puzzle.set[word[i].charCodeAt(0)-a]) {
            return false;
        }
    }
    return flag
}
console.log(findNumOfValidWords(["aaaa", "asas", "able", "ability", "actt", "actor", "access"],
    ["aboveyz", "abrodyz", "abslute", "absoryz", "actresz", "gaswxyz"]))