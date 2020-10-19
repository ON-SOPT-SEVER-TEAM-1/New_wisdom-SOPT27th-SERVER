const fs = require('fs');
const crypto = require('crypto');

const fileName = 'password'
const password = 'qwe123'
crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, key) =>{
        fs.writeFile(`${fileName}.txt`,key.toString('base64'),()=>{
            console.log(`file [${fileName}] write complete-!`);
        })
    });
  });