/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let sub=coordinates[0][0]-coordinates[1][0]
    if(sub==0){
        for(let i=2; i<coordinates.length; i++){
            if(coordinates[i][0]!=coordinates[0][0]){
                return false
            }
        }
        return true
    }
    let k=(coordinates[0][1]-coordinates[1][1])/sub;
    let b=coordinates[0][1]-coordinates[0][0]*k
    for(let i=2;i<coordinates.length; i++){
        if(coordinates[i][0]*k+b!=coordinates[i][1]){
            return false;
        }
    }
    return true;
};