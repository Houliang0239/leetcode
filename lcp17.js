function calculate (s){
    let x = 1;
    let y = 0;
    function A(){
        x = 2 * x + y
    }
    function B(){
        y = 2 * y + x
    }
    for(let i = 0; i< s.length;i++){
        if(s[i] == 'A'){
            A()
        }else if(s[i] == 'B'){
            B()
        }
    }
    return x + y
}