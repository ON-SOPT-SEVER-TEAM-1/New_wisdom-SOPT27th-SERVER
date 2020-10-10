// Object 생성자 함수

const person = new Object();;

// 프로퍼티 추가 
person.name = '신지혜'
person.part = 'Server'
person["gender"] = 'female'
person.sayHello = function(){
    console.log(`안녕하쇼 ${this.name} 입니다.`)
}

console.log(typeof person)
console.log(person)

person.sayHello()

console.log("-------------------")

// 객체 리터럴 (가장 일반적인 자바스크립트의 객체 생성 방식)
const emptyObject = {} // 빈 객체 생성
console.log(typeof emptyObject)

const animal = {
    animalType : "dog",
    animalName : "뽀삐",
    animalFriends : ['코코', ' 초코', '쿠키'],
    bark : function(){
        console.log(`${this.animalName} :멍망`)
    },
    thisFriends : function(){
        this.animalFriends.forEach( friend => {
            console.log(`${this.animalName}의 친구 :${friend}`)
        })
    }
}
console.log(animal)
animal.bark()
animal.thisFriends()