/**
 * [(lv.2)참조형-타입-비교하기.js]
 *
 * person 객체에 name, age 프로퍼티가 있습니다.
 * person 객체의 name, age 프로퍼티를 사용해 새로운 person2 객체를 만드세요.
 * person2 객체는 name, age 프로퍼티를 모두 가져야 합니다.
 * person2와 person을 비교한 결과를 isSame에 할당하세요.
 * 그리고 그 결과에 대한 예측값을 expected에 할당하세요.
 * person3는 person 객체와 같도록 할당합니다.
 * person과 person3를 비교한 결과를 isSame2에 할당하세요.
 * 그리고 그 결과에 대한 예측값을 expected2에 할당하세요.
 */

const person = {
  name: "철수",
  age: 25,
};

const person2 = {
  // TODO: person.name, person.age를 이용하여 프로퍼티 할당
  name : person.name,
  age : person.age,
};

let isSame = person === person2;
// TODO: person === person2 의 결과를 isSame에 할당

let expected = isSame;
// TODO: 위 비교의 결과(true 또는 false)에 대한 예상값을 expected에 할당

const person3 = person;

let isSame2 = person === person3;
// TODO: person === person3 의 결과를 isSame2에 할당

let expected2 = isSame2;
// TODO: 위 비교의 결과(true 또는 false)에 대한 예상값을 expected2에 할당

// export를 수정하지 마세요.
export { person, person2, isSame, expected, person3, isSame2, expected2 };
