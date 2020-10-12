const number = 23;
const number2 = 1.234;
const number3 = 23;

console.log('숫자 : ' + number + ' type : ' + typeof number); // 숫자 : 23 type : number
console.log('숫자 : ', number2, 'type : ', typeof number2); // 숫자 :  1.234 type :  number
console.log(number === number3); // true
console.log(`숫자 : ${number / 0} type ${typeof number / 0}`); // 숫자 : Infinity type NaN
console.log(-number / 0); // -Infinity
