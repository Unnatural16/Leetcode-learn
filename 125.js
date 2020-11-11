/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let check=/[0-9a-zA-Z]/
    for(let i = 0,j=s.length-1;i <j;i++,j--){
        while(!check.test(s[i])){
            i++
        }
        while(!check.test(s[j])){
            j--
        }
        if(s[i]!=s[j]&&s[i].toLowerCase()!=s[j].toLowerCase()){
            return false
        }
    }
    return true
};
console.log(isPalindrome(
    "Aa"))