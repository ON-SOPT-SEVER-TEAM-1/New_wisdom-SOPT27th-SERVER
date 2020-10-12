// 1. 배열 선언

var arr1 = [];
console.log(arr1); // (0)
console.log(typeof arr1); // []

var arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2); // object
console.log(typeof arr2); // object

var arr3 = ['신지혜', 1, 2, 3, null, {name : 'jihye', age : 23}];
console.log(arr3); //['신지혜', 1, 2, 3, null, {…}]
console.log(typeof arr3); // object

// 2. array prototype 메서드
console.log('****** Array 기본 함수들을 알아보자*****');
var arr = [1, 2, 3, 4];

// 2-1. length
console.log(`arr의 길이 : ${arr.length}`); // arr의 길이 : 4

// 2-2. push, pop
arr.push('new item')
console.log('arr push : ', arr); // arr push :  (5) [1, 2, 3, 4, 'new item']
arr.pop();
console.log('arr pop :', arr); // Canceled

// 2-3. shift, unshift
arr.unshift('first item');
console.log('arr unshift : ', arr);
arr.shift();
console.log('arr shift : ', arr);

// 2-4. includes
console.log('arr.includes(4) : ', arr.includes(4));
console.log('arr.includes(1000) : ',arr.includes(1000));

// 2-5. indexOf
console.log('arr.indexOf(4) : ', arr.indexOf(4));
console.log('arr.indexOf(1000) : ', arr.indexOf(1000));

// 2-6. concat (배열을 함쳐줌)
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var concatArr = arr1.concat(arr2);
console.log('arr1.concat(arr2) : ', concatArr);

// 2-7. join
var location = ["서울", "대전", "대구", "부산"];
console.log(location.join('-> '));

// 2-8. reverse
console.log(location.reverse().join('-> '));

// 2-9. sort
var countries = ['Österreich', 'Andorra', 'Vietnam'];
console.log(countries.sort((a, b) => a > b ? 1 : -1));
console.log(countries.sort(function(a, b){ return a.localeCompare(b);}));
console.log('오름차순 정렬 : ', concatArr.sort((a, b)=> a - b));
console.log('내림차순 정렬 : ', concatArr.sort(function(a, b){return b- a;}));

// 2-10. filter (배열 요소 전체를 대상으로 조건을 걸어서 조건을 충족하는 결과를 새로운 배열을 반환)
var number = [100, 234, -125, 1, 23, -637, -123, 99, 2, 3, 4, 5];
var minusNumber = number.filter(item => item <0);
console.log('minusNumber : ', minusNumber);

// 2-11. map (배열 요소 전체를 대상으로 함수를 호출하고, 그 결과를 새로운 배열을 반환할 때 주로 사용)
var countries = ['Österreich', 'Andorra', 'Vietnam', 'Korea', 'China'];
var countriesLengths = countries.map(item => item.length);
console.log('countriesLengths : ', countriesLengths);

// 2-12. reduce (map은 배열을 반환할 때 사용했지만, reduce는 값 하나를 반환할 때 주로 사용)
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = number.reduce((previousValue, currentValue) => {
    console.log(`previousValue : ${previousValue}, currentValue : ${currentValue}`);
    return previousValue + currentValue;
});

// 3. 배열 순회
var serverPart = ["김현기", "석영현", "강준우", "송정우", "신지혜", "이영은", "이진호"];
let serverIndexStr = '서버 파트 여러분 번호 세겠솜다 ~!';
let serverPartMemberNameStr = '서버 파트 여러분 이름 한번씩 불러주세여~!';

for(let item in serverPart){
    serverIndexStr += item + '! ';
}
console.log(serverIndexStr);

for(let item of serverPart){
    serverPartMemberNameStr += item + '! ';
}
console.log(serverPartMemberNameStr);

serverPart.forEach(item => {
    console.log(item);
});