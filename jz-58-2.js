function reverseLeftWords(s,n){
    return s.slice(n,s.length)+s.slice(0,n)
}
let s = "lrloseumgh"
let n = 6
reverseLeftWords(s,n)