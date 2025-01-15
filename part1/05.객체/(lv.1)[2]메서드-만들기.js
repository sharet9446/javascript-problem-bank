/**
 * [(lv.1)[2]메서드-만들기.js]
 *
 * - introduce 메서드를 이용해 자기소개 문자열을 반환하세요.
 *   예시: "안녕하세요, 저는 철수이고 25살입니다."
 *   person.introduce() 호출 시 위와 같은 문자열이 반환되어야 합니다.
 *
 * @type {{ name: string, age: number, introduce: function(): string }}
 */
const name = "철수";
const age = 25;

const person = {
  // TODO: introduce 메서드를 작성하세요.
  introduce() {return `안녕하세요, 저는 ${name}이고 ${age}살입니다.`},
};

// export를 수정하지 마세요.
export { person };
