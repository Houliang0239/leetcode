/**
 * 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。
 *给出两个整数 x 和 y，计算它们之间的汉明距离。
 */

var hammingDistance = function(x, y) {
    let num = (x^y).toString(2)
    let ans = 0;

    //很明显这里是个要优化的地方
    for (let i = 0;i<num.length;i++){
        if(num[i] == '1'){
            ans ++
        }
    }
    return ans
};
let x = 1,y = 4;
console.log(hammingDistance(x,y))