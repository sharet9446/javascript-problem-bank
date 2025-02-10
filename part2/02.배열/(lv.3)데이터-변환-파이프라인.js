/**
 * [(lv.3)데이터-변환-파이프라인.js]
 *
 * 1) transformData 함수는 다음 과정을 순서대로 수행해야 합니다:
 *    - 짝수만 필터링
 *    - 각 숫자를 제곱
 *    - 특정 임계값(threshold) 이하인 수만 필터링
 *    - 내림차순 정렬
 * 2) 모든 과정은 메서드 체이닝으로 구현하세요 (filter, map, filter, sort).
 * 3) 원본 배열을 변경하면 안 됩니다.
 *
 * @param {number[]} arr - 입력 배열
 * @param {number} threshold - 임계값
 * @returns {number[]} 변환된 배열
 */

function transformData(arr, threshold) {
  return arr
    .filter((number) => number % 2 === 0)
    .map((number) => number ** 2)
    .filter((number) => threshold >= number)
    .sort((a, b) => b - a);
}

// export 를 수정하지 마세요.
export { transformData };
