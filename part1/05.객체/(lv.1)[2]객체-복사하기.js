/**
 * [(lv.1)[2]객체-복사하기.js]
 *
 * - spread 연산자를 사용하여 obj 객체를 복사하세요.
 * - obj와 newObj는 서로 다른 객체를 참조해야 합니다.
 * - newObj는 obj보다 1살 많아야 합니다.
 *
 * @type {{ name: string, age: number }}
 */

const obj = {
  name: "철수",
  age: 25,
};

// TODO: spread 연산자를 이용하여 obj를 복사하고, age를 1 늘려주세요.
const newObj = {...obj};
newObj.age += 1;

// export 를 수정하지 마세요.
export { obj, newObj };
