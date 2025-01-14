/**
 * [(lv.1)[2]비교-연산자.js]
 *
 * 다음을 수행하세요:
 * 1. compare1 변수를 선언하고, num1과 num2가 값이 같은지 비교하는 연산을 수행하여 할당하세요. (동등 연산자)
 * 2. compare2 변수를 선언하고, num1과 num2가 값과 데이터 타입이 같은지 비교하는 연산을 수행하여 할당하세요. (일치 연산자)
 * 3. compare3 변수를 선언하고, num1과 num2가 값이 다른지 비교하는 연산을 수행하여 할당하세요. (동등 연산자)
 * 4. compare4 변수를 선언하고, num1과 num2가 값과 데이터 타입이 다른지 비교하는 연산을 수행하여 할당하세요. (일치 연산자)
 */

const num1 = 10;
const num2 = "10";

// TODO: num1과 num2가 같은지 비교하는 연산을 수행하세요. (동등 연산자)
let compare1 = num1 == num2;

// TODO: num1과 num2가 데이터 타입까지 같은지 비교하는 연산을 수행하세요. (일치 연산자)
let compare2 = num1 === num2;

// TODO: num1과 num2가 다른지 비교하는 연산을 수행하세요. (동등 연산자)
let compare3 = num1 != num2;

// TODO: num1과 num2가 데이터 타입까지 다른지 비교하는 연산을 수행하세요. (일치 연산자)
let compare4 = num1 !== num2;

// export 를 수정하지 마세요.
export { compare1, compare2, compare3, compare4 };
