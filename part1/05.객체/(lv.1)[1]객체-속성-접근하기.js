/**
 * [(lv.1)[1]객체-속성-접근하기.js]
 *
 * - person 객체에 name, age 프로퍼티가 있습니다.
 * - person 객체의 name, age 프로퍼티를 이용해 새로운 person2 객체를 만드세요.
 * - person2 객체는 name, age 프로퍼티를 가지고 있어야 합니다.
 * - person2는 person보다 1살 많아야 합니다.
 *
 * @type {{ name: string, age: number }}
 */

const person = {
  name: "철수",
  age: 25,
};

const person2 = {
  // TODO: person의 name, age를 이용하고, person보다 나이가 1살 많아야 합니다.
  name : person.name,
  age : person.age+1,
};

// export를 수정하지 마세요.
export { person, person2 };
