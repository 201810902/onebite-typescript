//튜플과 배열!
//배열
//js
//let numArr=[1,2,3];
let numArr: number[] = [1, 2, 3]; //배열의 요소의 타입으로 number 먼저 선언, 배열의 타입 [] 선언
let strArr: string[] = ["hello", "im", "Tom"]; //문자열타입 string, 배열 []선언
// => 이 방식이 더 간단해서 이 방법대로 쓰겠다

let boolArr: Array<boolean> = [true, false, true]; //새로운 방식의 배열 선언 Array<배열 안의 요소 타임으로 boolean 선언>
// =>generic 형식 선언

//배열내 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];
//ts는 점진적 타입 시스템을 사용한다. 초기화 하는 값을 기준으로 자동으로 타입을 추론한다. 어떤 타입으로 선언해야할지 모르겠다면 마우스를 올려보기
//union xkdlq

let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

//튜플
//길이와 타입이 고정된 배열
//js는 길이까지도 자유롭지만 ts는 길이까지는 고정시킬 수 없었다.
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3]; 불가능!

let tup2: [number, string, boolean] = [1, "2", true];
//튜플은 별도의 자료형은 아님. 그냥 배열.

tup1.push(1);
tup1.pop();
tup1.pop();

//객체(?)의 자료의 순서와 타입이 중요할때 튜플을 사용하면 좋다.
const users: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  //   [5,"최아무개"]
];
