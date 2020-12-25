
'use strict';

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join('|'); // default separator: ','
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array); // reverse()는 Source도 변환시킨다.
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.splice(0, 2); // 0부터 2개 삭제
    console.log(result); // [1, 2]
    console.log(array); // [3, 4, 5]

    const array2 = [1, 2, 3, 4, 5];
    const result2 = array2.slice(2, 5);
    console.log(result2); // [3, 4, 5]
    console.log(array2); // [1, 2, 3, 4, 5]
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88)
];

// Q5. find a student with the score 90
{
    // const result = students.find((student) => {
    //     return student.score === 90;
    // });
    // simplify
    const result = students.find((student) => student.score === 90); // find first 같은 느낌
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled); // findAll 같은 느낌
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    // map: 우리가 정의한 call back 함수에 따라 가공된 값들이 반환된다.
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    // some: 하나라도 call back 함수를 만족하는 item이 있으면 true 반환.
    const result = students.some((student) => student.score < 50);
    console.log(result);

    // every: 모든 item이 call back 함수를 만족할 때 true를 반환.
    const result2 = students.every((student) => student.score >= 50);
    console.log(result2);
}

console.clear();

// Q9. compute students' average score
{
    // reduce: 배열 각각의 요소를 순차적으로 보면서 값을 누적할 때 사용한다.
    // reduceRight: 배열 접근할 때 순서만 거꾸로 수행한다.
    // curr: 배열의 item들을 순차적으로 전달받는다.
    // prev: 이전의 call back 함수에서 return된 값을 다시 전달받는 것이다.
    const result = students.reduce((prev, curr) => {
        console.log('--------------------------');
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    }, 0); // 두 번째 인자는 초기 설정값이다.
    console.log(result / students.length);
    /**
     * 위에서 합을 구하는 과정을 간략히 작성하면 아래와 같다.
     * const result = students.reduce((prev, curr) => prev + curr.score, 0);
     */
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
        .map((student) => student.score)
        .filter((score) => score >= 50) // score가 50 이상인 학생들로만 조건 추가
        .join(', ');
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
        .map((student) => student.score)
        .sort((a, b) => a - b) // 'a - b': ASC, 'b - a': DESC
        .join(', ');
    console.log(result);
}
