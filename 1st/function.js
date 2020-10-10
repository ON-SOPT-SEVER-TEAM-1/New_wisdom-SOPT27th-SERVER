// 1. 함수 선언식
function add(x,y){
    return x + y
}
console.log(add(1,2))

// 2. 함수 표현식
var addStr = function(x,y){
    return x + y
}
console.log(addStr("안녕","하쇼"))

// 2-1. 화살표 함수 표현식
var add = function(x,y){
    return x+y
}

var add = (x,y) => x+y
var add = (x,y) => (x+y)

// 매개 변수가 하나일 깨 매개변수 소괄호 생략 가능
var square = function(x){
    return x * x
}

var square = x => x*x

//객체를 리턴하고 로직이 한 줄일 때는 소괄호를 사용해야 함
var person = function(name, age){
    return {
        name : name,
        age : age,
    }
}
var person = (name, age) =>({name:name, age : age})