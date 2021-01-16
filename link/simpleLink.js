class linkList {
    constructor() {
        this.head = null
        this.next = null
        this.length = 0
    }
    test() {
        console.log('test')
    }
}

function node(value) {
    this.val = value
    this.next = null
}

// 判断链表是否为空
linkList.prototype.isEmpty = function () {
    return this.length ? false : true
}

// 打印链表方便调试
linkList.prototype.printf = function () {
    let nodes = []
    let current = this.head
    while (current) {
        nodes.push(current.value)
        current = current.next
    }
    return nodes.join('->')
}

// 增加节点
linkList.prototype.insert = function (node, position) {
    if (!position) position = this.length
    if (this.isEmpty()) {
        this.head = node
        this.next = null
        this.length++
        return node
    } else if (postion <= this.length && postion >= 0) {
        let prenode = null
        let current = this.head
        for (let i = 0; i < position; i++) {
            prenode = current
            current = current.next
        }
        prenode.next = node
        node.next = current
        this.length++
        return node
    } else {
        return false
    }
}

linkList.prototype.remove = function (node,position){
    
}
let linklist = new linkList()
console.log(linklist.test())