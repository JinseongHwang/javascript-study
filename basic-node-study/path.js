const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep); // 경로 구분자 (Windows: '\', POSIX: '/')
console.log('path.delimiter:', path.delimiter); // 환경 변수 구분자 (Windows: ';', POSIX: ':')
console.log('------------------------------');
console.log('path.dirname():', path.dirname(string)); // 파일이 위치한 폴더의 경로
console.log('path.extname():', path.extname(string)); // 파일의 확장자
console.log('path.basename():', path.basename(string)); // 확장자를 포함한 파일의 이름
console.log('path.basename - extname:', path.basename(string, path.extname(string))); // 확장자를 제외한 파일의 이름
console.log('------------------------------');
console.log('path.parse()', path.parse(string)); // 파일의 경로를 5가지로 분리/구분한다.
console.log('path.format():', path.format({ // path.parse 객체를 하나의 파일 경로로 합친다.
    dir: 'C:\\Users\\User\\LearnVanillaJS\\vanilla-js\\basic-node-study',
    name: 'path',
    ext: '.js',
}));
console.log('path.normalize():', // '/'나 '\'를 혼용하거나 여러번 입력한 경우 정상적인 경로로 변환해준다.
    path.normalize('C://Users//User\\\\LearnVanillaJS\\\\vanilla-js\\\\basic-node-study'));
console.log('------------------------------');
console.log('path.isAbsolute(C:\\):', path.isAbsolute('C:\\')); // true: 절대경로인지 boolean으로 알려준다.
console.log('path.isAbsolute(./home):', path.isAbsolute('./home')); // false
console.log('------------------------------');
console.log('path.relative():', // Param1 경로에서 Param2 경로로 이동하는 방법을 알려준다.
    path.relative('C:\\Users\\User\\LearnVanillaJS\\vanilla-js\\basic-node-study\\path.js', 'C:\\'));
console.log('path.join():', path.join(__dirname, '..', '..', '/users', '.', '/zerocho')); // join: 상대경로 존중
console.log('path.resolve():', path.resolve(__dirname, '..', 'users', '.', '/zerocho')); // resolve: 절대경로 존중