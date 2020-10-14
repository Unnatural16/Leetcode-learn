/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
let max=math.power(2,31)
var divide = function(dividend, divisor) {
    if(dividend==0) return 0
    let positive_flag=true;
    if(dividend<0){
        dividend= -dividend;
        positive_flag=!positive_flag;
    }
    if(divisor<0){
        divisor= -divisor;
        positive_flag=!positive_flag;
    }
    let result=0
    let n
    while(dividend>=0){
        dividend-=divisor
        result++
    }
    if(positive_flag&&result-1==max){
        return result-2
    }
    return (positive_flag?1:-1)*(result-1)
};
