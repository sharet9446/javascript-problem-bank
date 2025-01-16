/**
 * [(lv.2)배열-메서드-forEach.js]
 *
 * 배열 arr을 전달받아,
 * arr의 모든 원소를 순회하여 합을 구한 뒤 반환하는 sumArray 함수를 작성하세요.
 * - forEach 메서드를 사용해야 합니다.
 * - arr가 빈 배열이면 0을 반환하세요.
 *
 * @param {number[]} arr
 * @returns {number} 배열 원소의 합
 */
function sumArray(arr) {
  // TODO
  let arrSum = 0;
  arr.forEach(yoso => arrSum += yoso)
  return arr.length === 0 ? 0 : arrSum
}

// export를 수정하지 마세요.
export { sumArray };
