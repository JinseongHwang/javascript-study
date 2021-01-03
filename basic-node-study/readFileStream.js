const fs = require('fs');
// 스트리밍 할 때 default buffer size는 64KB(64000Byte)이다.
// 테스트 용도이므로 buffer size를 16Byte로 설정해준다.
const readStream = fs.createReadStream('./testStream.txt', { highWaterMark: 16 });

const data = [];
readStream.on('data', chunk => {
    data.push(chunk); // 배열에 Buffer를 모아준다.
    console.log('data:', chunk, ' ', chunk.length);
});
readStream.on('end', () => {
    // 배열에 모인 Buffer를 한 번에 string으로 변환한다.
    console.log('end: ', Buffer.concat(data).toString());
});
readStream.on('error', err => {
    console.error('error: ', err);
});

