/**
 * 
 * @param {*} array 
 * 思路：将序列分成length/2 的两个序列，在分别归并
 */

function merge(left,right){
    let result = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            result.push(left.shift())
        }else {
            result.push(right.shift())
        }
    }
    while(left.length) result.push(left.shift())
    while(right.length) result.push(right.shift())
    return result
}

function sort (array){
    let length = array.length
    if(length<2)return array
    let middle = Math.floor(length / 2)
    return merge(sort(array.slice(0,middle)),sort(array.slice(middle,length)))
}
let array = [3, 1, 5, 7, 6, 9, 3, 5, 7, 8, 0, -1]
let result = sort(array)
console.log(result)