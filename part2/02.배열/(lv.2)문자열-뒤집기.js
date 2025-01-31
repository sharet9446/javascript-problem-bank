/**
 * [(lv.2)문자열-뒤집기.js]
 *
 * reverseString 함수를 작성하세요.
 * - 문자열이 아니라면 빈 문자열을 반환하세요.
 * - 반복문을 사용하여 입력받은 문자열을 뒤집어 반환하세요.
 *
 * @param {string} str
 * @returns {string}
 */

function reverseString(str) {
  let reverseStr = "";
  if (typeof str !== "string") {
    return reverseStr;
  }
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}

// export 를 수정하지 마세요.
export { reverseString };
