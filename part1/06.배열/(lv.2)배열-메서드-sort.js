/**
 * [(lv.2)배열-메서드-sort.js]
 *
 * 주어진 배열(arr)을 오름차순으로 정렬한 새 배열을 반환하세요.
 * 반드시 Array.prototype.sort 메서드를 사용해야 하며,
 * 원본 배열을 변경하지 않아야 합니다.
 *
 * @param {number[]} arr
 * @returns {number[]} 오름차순 정렬된 새 배열
 */
function sortNumbers(arr) {
  // TODO
  let copyArr = [...arr]
  return copyArr.sort((a, b) => a - b)
}

// export를 수정하지 마세요.
export { sortNumbers };
