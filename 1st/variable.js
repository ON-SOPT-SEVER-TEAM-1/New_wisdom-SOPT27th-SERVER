// var 
// 범위 : Function Scope
// 변수 재선언 : 가능
// 변수 값 재할당 : 가능
// 초기화 값 필요 : No

var variableVar = "123"
console.log(variableVar)

var variableVar = "321"
console.log(variableVar)

// let
// 범위 : Block Scope
// 변수 재선언 : 
// 변수 값 재할당 : 가능
// 초기화 값 필요 : 
let variableLet = "123"
let variableLet = "321"

console.log(`variableLet: ${variableLet}`)
// SyntaxError: Identifier 'variableLet' has already been declared

// const
// 범위 : Block Scope
// 변수 재선언 : 불가능
// 변수 값 재할당 : 불가능
// 초기화 값 필요 : Yes
const variableConst = "123"
const variableConst = "321"

console.log(`variableConst: ${variableConst}`)

if(true){
    var x = 'var'
}
console.log(`var :${x}`) // var : var

if(true){
    let y = 'let'
}
console.log(`let: ${y}`)

function colorFunction(){
    if(true){
        var color = 'blue'
        console.log(color)
    }
    console.log(color)
}
colorFunction()
console.log(color)

// hoisting
hoistFunction();

function hoistingFunction(){
    console.log(x)
    var x = "var"
    console.log(x)
}
