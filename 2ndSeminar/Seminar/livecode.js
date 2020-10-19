const getNumber = new Promise((resolve, reject)=>{
    console.log("getNumber Pending");
    setTimeout(()=>{
        resolve(100);
    },1000);
})

getNumber
    .then(value =>{
        console.log(value);
        return value *2;
    })
    .then(value =>{
        console.log(value);
        return value * 3;
    }) // 1초 안기다림
    .then(value =>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(value + 1000);
            },1000)
        })
    })
    .then(value => console.log(value));