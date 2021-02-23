class Stack {
    constructor(){
        this.items = []
    }
    //入栈
    push(e){
        this.items.push(e)
    }
    //出栈
    pop(){
        this.items.pop()
    }
    //获取栈顶
    peek(){
        return this.items[this.items.length - 1]
    }
    //判空
    isEmpty(){
        return this.items.length === 0 ? true : false
    }
    //清空栈
    clear(){
        this.items = []
    }
    //获取栈的大小
    size(){
        return this.items.length
    }
}
