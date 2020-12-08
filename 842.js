/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function(S) {
    if(S.length<3)return [];
    function dfs(last1,last2,index){
        const num=last1+last2
        if(num>2147483647){
            return null
        }
        const str=num+''
        console.log(S.indexOf(str,index))
        if(S.indexOf(str,index)==index){
            if(str.length+index==S.length){
                return [num]
            }
            const res=dfs(last2,num,str.length+index)
            if(res){
                res.unshift(num)
                return res
            }else{
                return null
            }
        }else{
            return null
        }
    }
    for(let i=1;i<S.length/2;i++){
        if(S[0]==0&&i!=1)break
        for(let j=i+1;j<S.length&&Math.max(j-i,i)<=S.length-j;j++){
            if(S[i]==0&&j!=i+1)break
            let num1=parseInt(S.slice(0,i))
            let num2=parseInt(S.slice(i,j))
            let res=dfs(num1,num2,j)
            if(res!=null){
                res.unshift(num2)
                res.unshift(num1)
                return res
            }
        }
    }
    return []
};
console.log(splitIntoFibonacci("539834657215398346785398346991079669377161950407626991734534318677529701785098211336528511"))