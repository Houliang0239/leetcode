let arr = [];

function findMagicIndex(arr) {
    let result = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === i) {
            result = i;
            break;
        }
    }
    return result
}