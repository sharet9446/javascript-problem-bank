/**
 * [(lv.2)논리-연산자.js]
 *
 * 다음을 수행하세요:
 * 1. num1과 num2가 10보다 큰지 비교하여 각각 num1GreaterThan, num2GreaterThan 변수에 할당하세요.
 *    - 예: num1GreaterThan = num1 > 10;
 * 2. num1과 num2가 10보다 작은지 비교하여 각각 num1LessThan, num2LessThan 변수에 할당하세요.
 * 3. num1과 num2가 10보다 크거나 같은지 비교하여 각각 num1GreaterThanOrEqual, num2GreaterThanOrEqual 변수에 할당하세요.
 * 4. num1과 num2가 10보다 작거나 같은지 비교하여 각각 num1LessThanOrEqual, num2LessThanOrEqual 변수에 할당하세요.
 * 5. num1과 num2가 모두 10보다 큰지 확인하여 bothGreaterThan 변수에 할당하세요. (&& 사용)
 * 6. num1과 num2가 모두 10보다 작은지 확인하여 bothLessThan 변수에 할당하세요. (&& 사용)
 * 7. num1과 num2 중 하나라도 10보다 큰지 확인하여 eitherGreaterThan 변수에 할당하세요. (|| 사용)
 * 8. num1과 num2 중 하나라도 10보다 작은지 확인하여 eitherLessThan 변수에 할당하세요. (|| 사용)
 */

const num1 = 10;
const num2 = 20;

// TODO: num1과 num2가 10보다 큰지 확인하는 연산을 수행하세요.
let num1GreaterThan = num1 > 10;
let num2GreaterThan = num2 > 10;

// TODO: num1과 num2가 10보다 작은지 확인하는 연산을 수행하세요.
let num1LessThan = num1 < 10;
let num2LessThan = num2 < 10;

// TODO: num1과 num2가 10보다 크거나 같은지 확인하는 연산을 수행하세요.
let num1GreaterThanOrEqual = num1 >= 10;
let num2GreaterThanOrEqual = num2 >= 10;

// TODO: num1과 num2가 10보다 작거나 같은지 확인하는 연산을 수행하세요.
let num1LessThanOrEqual = num1 <= 10;
let num2LessThanOrEqual = num2 <= 10;

// TODO: num1과 num2가 모두 10보다 큰지 확인하는 연산을 수행하세요.
let bothGreaterThan = num1 > 10 && num2 > 10;

// TODO: num1과 num2가 모두 10보다 작은지 확인하는 연산을 수행하세요.
let bothLessThan = num1 < 10 && num2 < 10;

// TODO: num1과 num2 중 하나라도 10보다 큰지 확인하는 연산을 수행하세요.
let eitherGreaterThan = num1 > 10 || num2 > 10;

// TODO: num1과 num2 중 하나라도 10보다 작은지 확인하는 연산을 수행하세요.
let eitherLessThan = num1 < 10 || num2 < 10;

// export 를 수정하지 마세요.
export {
  num1GreaterThan,
  num2GreaterThan,
  num1LessThan,
  num2LessThan,
  num1GreaterThanOrEqual,
  num2GreaterThanOrEqual,
  num1LessThanOrEqual,
  num2LessThanOrEqual,
  bothGreaterThan,
  bothLessThan,
  eitherGreaterThan,
  eitherLessThan,
};
