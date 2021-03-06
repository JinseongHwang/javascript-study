
// 참고: https://youtu.be/wRPcxR1M7Uc
/*
 * [호출스택, 백그라운드, 태스크 큐] 3가지 영역에서 이벤트 루프가 수행된다.
 * JavaScript 프로그램이 실행되면 (Chrome기준) 호출 스택에 anonymous가 가장 먼저 들어간다.
 * 호출 스택에서 동기 함수는 바로 실행하고, 비동기 함수는 백그라운드로 이벤트를 보내서 비동기적(동시) 실행시킨다.
 * 백그라운드에서 조건(또는 시간)에 맞는 상황이 되면 태스크 큐로 이벤트를 보낸다.
 * 단, Promise.then/catch, process.nextTick 등의 일부 함수들은 태스크 큐에서 호출 스택으로 이동할 우선순위를 가진다.
 * 태스크 큐는 호출 스택이 빌 때 까지 기다리다가 비어있으면 하나씩 이벤트를 호출 스택으로 보내서 실행시킨다.
 */

'use strict';

function oneMore() {
    console.log('one more');
}

function run() {
    console.log('run run');
    setTimeout(() => {
        console.log('wow')
    }, 0);
    new Promise((resolve) => {
        resolve('hi');
    })
        .then(console.log);
    oneMore();
}

setTimeout(run, 5000);

/* [Application Flow]
 * 1. 호출 스택에 anonymous를 push한다.(stack=1)
 * 2. 호출 스택에 setTimeout을 push한다.(stack=2)
 * 3. 프로그램 명령어가 끝났으니 setTimeout(stack.top)을 실행한다.
 * 3-1. 백그라운드에 (run, 5초) 명령을 입력한다. 그리고 호출 스택에서 setTimeout이 pop된다.(stack=1)
 * 4. anonymous도 pop되고 호출 스택은 빈 상태가 된다.(stack=0)
 * 5. 5초가 지난 후 백그라운드의 run함수가 태스크 큐로 이동한다.
 * 6. 호출 스택이 비어 있으므로 태스크 큐의 run 함수가 호출 스택으로 push된 후 실행한다.(stack=1)
 * 7. run(): console.log('run run');이 호출 스택으로 push되고 콘솔 출력 후 pop된다.(stack=1->2->1)
 * 8. run(): 호출 스택에 setTimeout을 push한다.(stack=2)
 * 8-1. run(): 백그라운드에 (익명, 0초) 명령을 입력한다. 그리고 호출 스택에서 setTimeout이 pop된다.(stack=1)
 * 9. run(): 호출 스택에 Promise객체가 push된다.(stack=2)
 * 10. run(): 호출 스택에 resolve('hi')가 push된다.(stack=3)
 * 11. run(): 호출 스택에 then()이 push된다.(stack=4)
 * 11-1. run(): 백그라운드에 (then console.log('hi')) 명령을 입력한다. 그리고 호출 스택에서 then()이 pop된다.(stack=3)
 * 12. run(): resolve('hi')와 Promise객체가 pop된다.(stack=1)
 * 13. run(): 호출 스택에 oneMore()가 push된다.(stack=2)
 * 14. oneMore(): console.log('one more');이 호출 스택으로 push되고 콘솔 출력 후 pop된다.(stack=2->3->2)
 * 15. oneMore()의 실행이 끝났으니 호출 스택에서 pop한다.(stack=1)
 * 16. run()의 실행이 끝났으니 호출 스택에서 pop한다.(stack=0)
 * 17. 백그라운드의 (익명, 0초), (then console.log('hi')) 두 함수는 당장 실행 조건에 만족하므로, 태스크 큐로 이동한다.
 * 17-1. 하지만 then이 우선순위를 가지므로 태스크 큐에서 먼저 호출 스택으로 이동하며, 익명 함수는 나중에 이동한다.
 * 18. 차례대로 호출 스택으로 이동되어 push -> 실행 -> pop을 반복한다.
 * 19. 호출 스택, 백그라운드, 태스크 큐가 모두 빈 상태가 되면 JavaScript 실행이 완료된다.
 */