/**
 * 
 * @param {*} array 
 * 思路：选择一个数作为基数（一般是中间数），准备两个容器，比基数小的放左边，比基数大的放右边，递归两个容器，最后合并
 */


function sort(array) {
    if (array.length < 2) return array
    let middle = array.splice(Math.floor(array.length / 2), 1)
    let left = [],
        right = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] < middle) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }
    return sort(left).concat(middle).concat(sort(right))
}
let array = [3, 1, 5, 7, 6, 9, 3, 5, 7, 8, 0, -1]
let result = sort(array)
console.log(result)


/**
 * 优化版本
 */

