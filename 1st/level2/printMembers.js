const member = require('./members');

member.forEach(m =>{
    console.log(`name : ${m.name}, location : ${m.location}, age : ${m.age}, hobby : ${m.hobby}`);
})