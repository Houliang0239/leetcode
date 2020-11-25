/**
 * 括号匹配
 */

var isValid = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0) {
            stack.push(s[i])
        } else if ((s[i] === ')' && stack[stack.length - 1] === '(') || (s[i] === ']' && stack[stack.length - 1] === '[') || (s[i] === '}' && stack[stack.length - 1] === '{')) {
            stack.pop()
        }else {
            stack.push(s[i])
        }
    }
    if(stack.length){
        return false
    }
    return true
};
let s = "{[]}"

console.log(isValid(s))