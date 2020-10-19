const members = require('./member');

function getFemale(members){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const data = members.filter(m => m.gender === '여');
            console.log("############ Female Member ############")
            data.forEach(m =>{
                console.log(`name : ${m.name}, part : ${m.part}, status : ${m.status}, gender : ${m.gender}`);
            });
            resolve(data)
        },500)
    })
}
function getYB(members){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const data = members.filter(m => m.status === 'YB');
            console.log("############ Female && YB Member ############")
            data.forEach(m =>{
                console.log(`name : ${m.name}, part : ${m.part}, status : ${m.status}, gender : ${m.gender}`);
            });
            resolve(data)
        },500)
    })
}
function getiOS(members){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const data = members.filter(m => m.part === 'iOS');
            console.log("############ Female && YB && iOS Member ############")
            data.forEach(m =>{
                console.log(`name : ${m.name}, part : ${m.part}, status : ${m.status}, gender : ${m.gender}`);
            });
            resolve(data)
        },500)
    })
}

getFemale(members)
        .then(members => getYB(members))
        .then(members => getiOS(members))
        .then(members => console.log(members));