// 设置同域名
// document.cookie = 'content=content;path=/;domain=readboy.com'
// 获取cookie
let cookie = 'content=content;path=/;domain=readboy.com'
function getCookie(cookie) {
    let obj = {}
    cookie.split(';').forEach(item => {
        let arr = item.split('=')
        obj[arr[0]] = arr[1]
    })
    return obj
}
function removeCookie(cookie){
    cookie = ''
}
console.log(getCookie(cookie))