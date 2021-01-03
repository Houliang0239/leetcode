/**
 * 时间：O(n^2)
 * 空间：O(n)
 * @param {*} array 
 * 思路：每次都将当前序列的最小值放在最前面，需要记录当前最小值的index
 */

function sort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j
            }
        }
        // array[i] = array[i] ^ array[minIndex]
        // array[minIndex] = array[i] ^ array[minIndex]
        // array[i] = array[minIndex] ^ array[i]

        let temp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = temp
    }
    return array
}
let array = [3, 1, 5, 7, 6, 9, 3, 5, 7, 8, 0,-1]
let result = sort(array)
console.log(result)