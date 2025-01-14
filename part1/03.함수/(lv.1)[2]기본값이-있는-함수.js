/**
 * [(lv.1)[2]기본값이-있는-함수.js]
 *
 * 나이(age)가 주어지지 않으면 "비공개"로 설정하고,
 * "안녕하세요! 저는 {name}, 나이는 {age}입니다." 형태의 문자열을 반환하세요.
 *
 * @param {string} name
 * @param {string} [age="비공개"]
 * @returns {string}
 */

function introduce(name, age) {
  age = age === undefined ? "비공개" : age
  return `안녕하세요! 저는 ${name}, 나이는 ${age}입니다.`
  // TODO
}

// export 를 수정하지 마세요.
export { introduce };
