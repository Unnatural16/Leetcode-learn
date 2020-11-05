/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(!matrix.length)return false
    let i=matrix.length-1,j=0
    while(i>=0&&j<=matrix[0].length-1){
        const sub=matrix[i][j]-target
        if(sub==0){
            return true
        }
        sub<0?j++:i--
    }
    return false
};