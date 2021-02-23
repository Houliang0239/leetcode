/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var findNumberIn2DArray = function (matrix, target) {
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if(matrix[i][j] === target){
//                 return true
//             }
//             if(matrix[i][j] > target){
//                 continue
//             }
//         }
//     }
//     return false
// };

var findNumberIn2DArray = function (matrix, target) {
    if ( matrix.length == 0 || matrix[0].length == 0) {
        return false
    }
    let rows = matrix.length
    let columns = matrix[0].length
    let row = 0
    let column = columns - 1
    while (row < rows && column >= 0) {
        if (matrix[row][column] == target) {
            return true
        }
        if (matrix[row][column] > target) {
            column--
        }
        if (matrix[row][column] < target) {
            row++
        }
    }
    return false
};

let matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
]

let target = 20
console.log(findNumberIn2DArray(matrix, target))