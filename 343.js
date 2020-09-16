//给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。
function integerBreak(n) {
    let answer = 1;
    if (n == 2) return 1;
    if (n == 3) return 2;
    if (n == 4) return 4;
    if (n % 3 == 0) {
        answer = 3 ** (n / 3);
    } else if (n % 3 == 1) {
        answer = 3 ** (parseInt(n / 3) - 1) * 4;
    } else if (n % 3 == 2) {
        answer = 3 ** (parseInt(n / 3)) * 2
    }
    return answer
}
integerBreak(9)