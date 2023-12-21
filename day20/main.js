/* 
    객체 : 속성과 메소드를 가질 수 있는 모든 것
        형태
            객체 선언 : const object = {}
            객체내 속성추가 : object.새로운속성명 = 값;
            객체내 속성의 값 호출 : object.속성명       vs      object['속성명']          // 자바에서는 이거 사용
            객체내 속성의 값 변경 : object.기존속성명 = 값;
        - 배열도 객체
        - 함수도 객체
*/

// p.257
 const a = [] // []대괄호 사용 했으므로 배열 (a상수에 배열 자료 저장)
 a.sample = 10; // 객체.새로운속성명 = 값; // 객체에 속성추가
console.log( a.sample);
console.log(typeof a); // typeof 상수/변수 ; 해당 상수/변수 저장된 자료의 타입 확인
console.log(Array.isArray(a)) // Array.isArray(상수/변수) : 해당 상수/변수에 자료가 배열 자료형인지 확인

function b(){}
b.sample = 10;
console.log(b.sample);
console.log(typeof b); // 함수는 객체의 특성을 완벽하게 가지고 있음. [js]

// p.258
const c = 273
c.smaple = 10;
console.log(c.sample); // undefined : 기본자료형[객체가 아미느로]은 속성을 추가할 수 없다.

const d = '안녕하세요'
d.smaple = 10;
console.log(d.sample); // undefined : 기본자료형[객체가 아미느로]은 속성을 추가할 수 없다.

const e = true;
e.sample = 10;
console.log(e.sample); // undefined : 기본자료형[객체가 아미느로]은 속성을 추가할 수 없다.

const f = new Number(273);
    console.log(f) 
f.sample = 10
    console.log(f)
    console.log(f.valueOf());


console.log('안녕하세요'.length);
console.log('안녕하세요'.anchor('aaa')); 
console.log('안녕하세요'.bold('aaa')); 

Number.prototype.sample = 10;
const i = 273
console.log(i.sample)

const j = 100;
console.log(i.sample)

Number.prototype.power = function(n=2){
    console.log(`n:$(n)`)
    console.log(`this:${this.valueOf()}`)
    return this.valueOf()** n
}
const a2 = 12;
console.log(a2.power());
console.log(a2.power(3));
console.log(a2.power(4));

const h = '안녕하세요';
console.log(h.indexOf('안녕'))
console.log(h.indexOf('하세'))
console.log(h.indexOf('자바')) // 없으면 -1

// console.log(h.contain('안녕'));


String.prototype.contain =function(data) {
    return this.indexOf(data )>= 0;
}

console.log(h.contain('안녕'))  