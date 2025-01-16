/**
 * [(lv.2)[3]배열-메서드-reverse.js]
 *
 * 원본 배열을 변경하지 않고, 뒤집힌 새 배열을 반환하세요.
 * 반드시 배열을 복사한 뒤 reverse 메서드를 사용해야 합니다.
 * 예: reverseArray([1, 2, 3]) -> [3, 2, 1]
 *
 * @param {any[]} arr
 * @returns {any[]} 뒤집힌 새 배열
 */

function reverseArray(arr) {
  // TODO: 원본을 변경하지 않고, 뒤집힌 새 배열을 반환하세요.
  let reverseArr = [...arr]
  return reverseArr.reverse()
}

export { reverseArray };
