// 有效括号字符串为空 ("")、"(" + A + ")" 或 A + B，其中 A 和 B 都是有效的括号字符串，+ 代表字符串的连接。例如，""，"()"，"(())()" 和 "(()(()))" 都是有效的括号字符串。

// 如果有效字符串 S 非空，且不存在将其拆分为 S = A+B 的方法，我们称其为原语（primitive），其中 A 和 B 都是非空有效括号字符串。

// 给出一个非空有效字符串 S，考虑将其进行原语化分解，使得：S = P_1 + P_2 + ... + P_k，其中 P_i 是有效括号字符串原语。

// 对 S 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 S 。

let result = function removeOuterParentheses(s){
    let ans = ''
    let leftCount = 0;
    let stack = []
    for (let i = 0;i<s.length;i++){
        if(s[i] == '('){
            leftCount ++;
        }else if(s[i] == ')'){
            leftCount --;
        }
        stack.push(s[i])
        if(leftCount == 0){
            stack.shift()
            stack.pop()
            ans += stack.join('')
            stack = []
        }
    }
    return ans 
}
let test = "()()"
console.log(result(test))



//更优的解法
var removeOuterParentheses = function(S) {
    let res = "";
    let cnt = 0;
    let start = 0;
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            cnt++;
        } else {
            if (--cnt === 0) {
                // 找到原语，拼接结果
                res += S.substring(start + 1, i);
                // 设置下一个原语起点，继续查找
                start = i + 1;
            }
        }
    }
    return res;
};
