/**
 * [(lv.2)배열-메서드-filter.js]
 *
 * 짝수와 홀수만을 걸러내는 함수를 작성하세요:
 * 1) filterEven(arr): 숫자로 구성된 배열 arr를 입력받아, 짝수만 담긴 새 배열을 반환하세요.
 * 2) filterOdd(arr): 숫자로 구성된 배열 arr를 입력받아, 홀수만 담긴 새 배열을 반환하세요.
 * 반드시 Array.prototype.filter 메서드를 사용하세요.
 *
 * @param {number[]} arr
 * @returns {number[]} 짝수 혹은 홀수만 담긴 새로운 배열
 */

function filterEven(arr) {
  return arr.filter((number) => number % 2 === 0);
}
function filterOdd(arr) {
  return arr.filter((number) => number % 2 !== 0);
}

// export를 수정하지 마세요.
export { filterEven, filterOdd };
