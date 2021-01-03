/**
 * 时间：O(n^2)
 * 空间：O(n)
 * @param {*} array 
 * 思路：比较相邻，需要则交换
 */

function sort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                array[i] = array[i] ^ array[j]
                array[j] = array[i] ^ array[j]
                array[i] = array[j] ^ array[i]
            }
        }
    }
    return array
}

let array = [3, 1, 5, 7, 6, 9, 3, 5, 7, 8, 0]

let result = sort(array)
console.log(result)