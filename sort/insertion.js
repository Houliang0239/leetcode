/**
 * 
 * @param {*} array 
 * 思路：每次选择一个值，把他放在前面序列中该在位置上，倒序比较
 * 不稳定排序
 */
function sort(array) {
    let length = array.length
    for (let i = 1; i < length; i++) {
        let pre = array[i];
        for (let j = i - 1; j >= 0; j--) {
            if (pre < array[j]) {
                array[j + 1] = array[j]
                array[j] = pre
            } else  {
                break
            }
        }
    }
    return array
}
let array = [3, 1, 5, 7, 6, 9, 3, 5, 7, 8, 0, -1]
let result = sort(array)
console.log(result)