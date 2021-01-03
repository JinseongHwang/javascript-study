// file system 모듈을 promise화 한다.
const fs = require('fs').promises;

fs.writeFile('./test-write.txt', '여기다 입력할 글을 넣어요.')
    .then(() => {
        return fs.readFile('./test-write.txt');
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        console.error(err);
    });
