const symbol1 = Symbol('id')
const symbol2 = Symbol('id')

console.log(symbol1.description)
console.log(symbol1 === symbol2)

console.log('--------------')

const includes = Symbol('커스첨 includes 함수')

Array.prototype[includes] = function(){
    return 'its Symbol'
}

var arr = [1,2,3]
console.log(arr.includes(1)) // true, js 기본 includes 함수
console.log(arr['includes'](1)) // 
console.log(arr[includes]())