/**
 * [(lv.1)홀짝-구하기.js]
 *
 * 숫자 num을 전달받아, num이 짝수일 때는 "Even"을, 홀수일 때는 "Odd"를 반환하세요.
 * if/else 문을 사용하세요.
 *
 * @param {number} num
 * @returns {string} "Even" 또는 "Odd"
 */

function isEvenOrOdd(num) {
  // TODO
  if (num % 2) {
    return "Odd"
  } else {
    return "Even"
  }
}

// export 를 수정하지 마세요.
export { isEvenOrOdd };
