let array = [1, 0, 2, 3, 0, 4, 5, 0]

function duplicateZeros(arr) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        answer.push(arr[i]);
        if (arr[i] == 0) {
            answer.push(0)
        }
        if (answer.length === arr.length) {
            arr = answer
            // console.log(answer)
            return;
        }
    }
}
duplicateZeros(array)