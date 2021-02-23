/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    let res = 1
    let max = 1000000007
    if(n<4) return n-1

    while(n>5){
        res = (res * 3) % max
        n = n-3
    }
    res = (res * (n > 4 ? 6 : n))%max
    return res
};
let n = 120
console.log(cuttingRope(n))