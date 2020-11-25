/**
 * 经典爬楼梯
 * 斐波那契实际上是有通项的
 * {[（1+sqrt(5)）]^n - [1-sqrt(s)]^n}/sqrt(5) 
 */

var climbStairs = function (n) {
    let ans = [1,2]
    if(n<3){
        return ans[n-1]
    }
    for (let i = 2; i < n; i++) {
        ans[i] = ans [i-1] + ans[i-2]
    }
    return ans[n-1]
};

let n = 10;
console.log(climbStairs(n))