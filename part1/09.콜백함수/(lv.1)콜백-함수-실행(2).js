/**
 * [(lv.1)콜백-체인.js]
 *
 * 이 함수는 초기 숫자와 두 개의 콜백 함수를 파라미터로 받습니다.
 * 첫 번째 콜백 함수의 결과값을 두 번째 콜백 함수로 넘겨주어
 * 최종 결과를 반환하세요.
 *
 * @param {number} initialValue - 초기 숫자
 * @param {function} callback1  - 1단계 콜백 함수
 * @param {function} callback2  - 2단계 콜백 함수
 * @returns {number} 최종 콜백 체인 결과
 */
function chainCallbacks(initialValue, callback1, callback2) {
  return callback2(callback1(initialValue))
}

// export를 수정하지 마세요.
export { chainCallbacks };
