function evalRPN(tokens) {
    let stack = []
    let left
    for (let i = 0; i < tokens.length; i++) {
        switch (tokens[i]) {
            case '+':
                stack.push(stack.pop() + stack.pop())
                break
            case '-':
                left = stack.pop()
                stack.push(stack.pop() - left)
                break
            case '*':
                stack.push(stack.pop() * stack.pop())
                console.log(stack)
                break
            case '/':
                left = stack.pop()
                stack.push(parseInt(stack.pop() / left))
                break
            default:
                stack.push(parseInt(tokens[i]))
                break
        }
    }
    return stack[0]
}
let tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
evalRPN(tokens)