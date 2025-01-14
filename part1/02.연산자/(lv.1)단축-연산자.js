/**
 * [(lv.1)[2]단축-연산자.js]
 *
 * 다음을 수행하세요:
 * 1. increment 변수를 선언하고 0을 할당한 후, 단축 연산자를 사용하여 1씩 증가시키세요.
 *    - 예: increment += 1;
 * 2. decrement 변수를 선언하고 0을 할당한 후, 단축 연산자를 사용하여 1씩 감소시키세요.
 *    - 예: decrement -= 1;
 * 3. num1 변수를 선언하고 10을 할당하세요.
 * 4. add, subtract, multiply, divide 변수를 각각 선언하고 초기값을 다음과 같이 할당하세요:
 *    - add: 0
 *    - subtract: 20
 *    - multiply: 1
 *    - divide: 100
 * 5. 단축 연산자를 사용하여 각 변수에 num1을 이용한 연산을 수행하고 결과를 다시 해당 변수에 할당하세요.
 *    - add: 더하기 (add += num1;)
 *    - subtract: 빼기 (subtract -= num1;)
 *    - multiply: 곱하기 (multiply *= num1;)
 *    - divide: 나누기 (divide /= num1;)
 * 6. 연산이 완료된 변수를 export 하세요.
 */

let increment = 0;
let decrement = 0;

increment += 1;
decrement -= 1;

const num1 = 10;

let add = 0;
let subtract = 20;
let multiply = 1;
let divide = 100;

add += num1;
subtract -= num1;
multiply *= num1;
divide /= num1;


// export 를 수정하지 마세요.
export { increment, decrement, add, subtract, multiply, divide };
