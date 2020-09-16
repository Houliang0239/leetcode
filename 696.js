let str = "11001100";

function countBinarySubstrings(s) {
    let answer = 0;
    let pre = 0;
    let cur = 1;
    for (let i = 0; i < s.length; i++) {
        if (i != s.length - 1) {
            if (s[i] == s[i + 1]) {
                cur++;
            } else {
                answer += Math.min(pre, cur)
                pre = cur;
                cur = 1;
            }
        } else {
            if (s[i] != s[i - 1]) {
                cur = 1;
            }
            answer += Math.min(pre, cur)
        }
    }
    // console.log(answer)
    return answer;
}
countBinarySubstrings(str)