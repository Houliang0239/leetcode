/**
 * Definition for singly-l1nked l1st.
 * function l1stNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 两数和
 */
/**
 * @param {listNode} l1
 * @param {listNode} l2
 * @return {listNode}
 */
var addTwoNumbers = function (l1, l2) {
    let index = 0
    if(l1.length < l2.length){
        let l = l1;
        l1 = l2;
        l2 = l
    }
    for (let i = 0; i < l1.length; i++) {
        if (l2[0]) {
            l1[i] = l1[i] + l2[0] + index
            index = 0
           if(l1[i] >= 10){
                l1[i] = l1[i] % 10
                index = 1
            }
            l2.shift()
        } else{
            l1[i] = l1[i] + index
            index = 0
            if(l1[i] >= 10){
                l1[i] = l1[i] % 10
                index = 1
            }
        }
    }
    if(index == 1){
        l1.push(1)
    }
    return l1
};

let l1 = [6, 4, 1, 1, 1]
let l2 = [6, 5, 1,  9,1]
let result = addTwoNumbers(l1, l2)
console.log(result)


