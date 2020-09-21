class Stack {
    constructor(){
        this.items = []
    }
    push(e){
        this.items.push(e)
    }
    pop(){
        this.items.pop()
    }
    peek(){
        return this.items[this.items.length - 1]
    }
    isEmpty(){
        return this.items.length === 0 ? true : false
    }
    clear(){
        this.items = []
    }
    size(){
        return this.items.length
    }
}

console.log(Stack)