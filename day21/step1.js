// p.276 : math 객체

const num = Math.random();  // 0~1 사이 난수.
console.log (num);

// 0이상~10미만 사이의 난수
console.log(num*10);

// 0이상~50미만 사이의 난수
console.log(num*50);
// 1이상~51미만 사이의 난수
console.log(num*50+1);

// -5이상~5미만 사이의 난수
console.log(num*50-5);

// -25이상~25미만 사이의 난수
console.log(num*50-25);


console.log(Math.floor(3.14)); // Math.floor 소수점 버림
console.log(parseIntji7(3.14)); // parseInt() 정수로 변환
console.log(3.14.toFixed(0)); // 반올림

// -이상~5미만 사이의 정수만
console.log (Math.floor(num*50-5));