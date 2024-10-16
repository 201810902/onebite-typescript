//#타입 별칭, type alias
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "김경아",
  nickname: "양홍련",
  birth: "1999.06.06",
  bio: "안녕하세요",
  location: "Seoul",
};

//# 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
  //객체의 key와 value의 타입을 규칙으로 정하기.
};

let contryCodes: CountryCodes = {
  Korea: "ko",
  UnitedStates: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; //꼭 있어야 할 property는 이렇게 명시해둔다.
  //! Korea: string; (X) //반드시 앞서 명시한 index signature type과 일치해야 한다.
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
};

//index signature type은 규칙을 위반하지만 않으면 모든 객체를 허용하는 타입이다.
//아무 요소도 없으면 규칙위반한 사항이 없으니 에러도 뜨지 않는다.
