/**
 * [(lv.1)[2]콜백-함수-실행.js]
 *
 * 1) 콜백 함수(callback)는 전달된 숫자를 2배로 만들어 반환합니다.
 * 2) executeCallback 함수는 콜백 함수와 숫자를 파라미터로 받습니다.
 * 3) 콜백 함수를 실행해, 그 결과(2배)가 반환되도록 작성하세요.
 *
 * @param {function} callback
 * @param {number} number
 * @returns {number} 콜백 함수 실행 결과
 */
function executeCallback(callback, number) {
  // TODO: 콜백 함수를 실행해, 그 결과가 반환되도록 작성하세요.
  return callback(number)
}

// export를 수정하지 마세요.
export { executeCallback };
