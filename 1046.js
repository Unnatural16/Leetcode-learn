/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length>1){
        stones.sort((a,b) =>b-a);
        if(stones[0]>stones[1]){
            stones.push(stones[0]-stones[1]);
        }
        stones.splice(0,2)
    }
    return stones.length?stones:0
};
console.log(lastStoneWeight([1,1]))