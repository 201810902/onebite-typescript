//객체, object
let user: { id?: number; name: string } = { //? 를 붙이면 선택적 타입으로 선언이 가능하다. 
  //중괄호를 이용해 타입을 정의하는 방식인 객체 리터럴 타입으로 선언
  id: 1,
  name: "이정환",
};
user.id; //리터럴 타입으로 선언시 점표기법도 사용 가능해짐

//object로 타입을 선언하면 user.id처럼 점표기법으로 객체의 property에 접근할 수 없다.
//ts는 object로 정의하면 객체다 라는 정보 외에는 아무 정보도 없기 때문에..

let dog: { name: string; color: string } = {
  name: "까망이",
  color: "black",
};

//이름만으로 타입을 정의하는 건 '명목적 타입 시스템', TS는 '구조적 타입 시스템'을 사용한다.

user = { id: 1, name: "홍길동" };

let config: { readonly apiKey: string } = {//readonly를 붙이면 수정이 불가능한 읽기전용 property로 만들 수 있다. 
  apiKey: "MY API KEY",
};
