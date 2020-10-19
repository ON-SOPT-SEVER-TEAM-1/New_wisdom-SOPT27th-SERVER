const promise = new Promise(function(resolve, reject){
    const age= 23;
    if (age > 19){
        resolve(age);
    } else{
        reject(new Error('나이가 너무 어립니다.'));
    }
});
promise
    .then(function(resolveData){
        console.log(resolveData);
    })
    .catch(function(err){
        console.log(err);
    })