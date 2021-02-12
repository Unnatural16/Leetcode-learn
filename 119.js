/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res=[[],[1]]
    for(let i=2; i<=rowIndex; i++){
        let temp=[]
        for(let j=0; j<i; j++){
            const left=res[i-1][j-1]||0
            const right=res[i-1][j]||0
            temp[j]=left+right
        }
        res.push(temp)
    }
    return res[rowIndex]
};
console.log(getRow(3))