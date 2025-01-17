/**
 * [(lv.2)기본-클로저.js]
 *
 * 1) simpleClosure 함수 내부에서 let message = "Hello Closure!" 변수를 선언하세요.
 * 2) 함수는 내부 함수를 반환하세요.
 * 3) 내부 함수는 message를 반환해야 합니다.
 *
 * @returns {Function} 내부 함수
 */
function simpleClosure() {
  let message = "Hello Closure!";
  return function () {
    return message
  }
}

// export를 수정하지 마세요.
export { simpleClosure };
