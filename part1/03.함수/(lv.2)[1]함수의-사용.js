/**
 * [(lv.2)[1]함수의-사용.js]
 *
 * 3.3에서 만든 네 가지 산술 연산 함수를 사용하여
 * 두 수(num1, num2)를 각각 더하고, 빼고, 곱하고, 나눈 결과를
 * result1, result2, result3, result4 변수에 할당하세요.
 *
 * - add(num1, num2)
 * - subtract(num1, num2)
 * - multiply(num1, num2)
 * - divide(num1, num2)
 *
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */

// import를 수정하지 마세요.
import {
  add,
  subtract,
  multiply,
  divide,
} from "./(lv.2)[1]기본-산술-연산-함수";

// 아래에 add, subtract, multiply, divide 함수를 사용하세요.
const num1 = 10;
const num2 = 5;

// TODO: add 함수를 사용하세요.
let result1 = add(num1, num2);
// TODO: subtract 함수를 사용하세요.
let result2 = subtract(num1, num2);
// TODO: multiply 함수를 사용하세요.
let result3 = multiply(num1, num2);
// TODO: divide 함수를 사용하세요.
let result4 = divide(num1, num2);

// export 를 수정하지 마세요.
export { result1, result2, result3, result4 };
