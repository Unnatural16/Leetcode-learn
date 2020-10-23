/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    const arr=name.split('')
    let reg=arr.join('+')
    reg =new RegExp( '/^'+reg+'+$/')
    console.log(reg)
    return reg.test(typed)
};