const member = require('./member');

// ob, yb 각각 random하게 섞기
const obMembers = member
                    .filter(p => p.status === 'OB')
                    .sort((a) => Math.random() - Math.random());
const ybMembers = member
                    .filter(p => p.status === 'YB')
                    .sort((a) => Math.random() - Math.random());

const makeTeam = (num) =>{
    const team = new Array(num);
    const obNum = obMembers.length / num -1;
    const ybNum = ybMembers.length / num -1;
    // 몫으로 일단 나누고
    for(let i = 0; i < num; i++){
        team[i] = Array();
        for(let o = 0; o < obNum; o++){
            team[i].push(obMembers.pop());
        }
        for(let y = 0; y < ybNum; y++){
            team[i].push(ybMembers.pop());
        }
    }
    // 나머지는 랜덤하게 배정
    while (obMembers.length){
        team[Math.floor(Math.random()*num)].unshift(obMembers.pop())
    }
    while (ybMembers.length){
        team[Math.floor(Math.random()*num)].push(ybMembers.pop())
    }
    return team;
}

console.log(makeTeam(6));