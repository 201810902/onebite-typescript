//#열거형, enum 타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입. js에는 없고 ts에만 있음
//enum에는 숫자, 문자 둘 다 할당할 수 있다.
enum Role {
  ADMIN = 10,
  USER,
  GUEST,
}
enum Language {
  korean = "ko",
  english = "en",
}
const user1 = {
  name: "양홍련",
  role: Role.ADMIN, // 0: 관리자
  language: Language.korean,
};

const user2 = {
  name: "김모하",
  role: Role.USER,
  language: Language.korean,
};
const user3 = {
  name: "맹홍련",
  role: Role.GUEST,
  language: Language.korean,
};

console.log(user1, user2, user3);
//enum은 compile결과 사라지지 않는다.
