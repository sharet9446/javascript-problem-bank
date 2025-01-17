/**
 * [(lv.2)카운터-함수-만들기.js]
 *
 * 1) createCounter 함수를 작성하세요.
 * 2) 내부에 let count = 0; 으로 카운터를 초기화하세요.
 * 3) increase, decrease, currentValue 메서드를 가진 객체를 반환하세요.
 *    - increase(): count를 1 증가
 *    - decrease(): count를 1 감소
 *    - currentValue(): 현재 count를 반환
 *
 * @returns {{ increase: Function, decrease: Function, currentValue: Function }}
 */
function createCounter() {
  let count = 0;
  return {
    increase: function () {
      return ++count
    },
    decrease: function () {
      return --count
    },
    currentValue: function () {
      return count
    }
  }
}

// export를 수정하지 마세요.
export { createCounter };
