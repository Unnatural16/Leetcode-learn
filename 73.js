/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let seti=new Set();
    let setj=new Set();
    for(let i = 0; i < matrix.length;i++){
        for(let j = 0; j < matrix[i].length;j++){
            if(matrix[i][j] === 0){
                seti.add(i)
                setj.add(j)
            }
        }
    }
    for(let i = 0; i < matrix.length;i++){
        for(let j = 0; j < matrix[i].length;j++){
            if(seti.has(i)||setj.has(j)){
                matrix[i][j] = 0;
            }
        }
    }
};