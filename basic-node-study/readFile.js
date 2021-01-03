// file system 모듈을 promise화 한다.
const fs = require('fs').promises;

fs.readFile('./test.txt')
    .then((data) => {
        // 읽어온 data는 Buffer 형식으로 제공된다.
        // 따라서 .toString()으로 변환해서 출력해야 한다.
        console.log(data.toString());
    })
    .catch((err) => {
        console.error(err);
    });
