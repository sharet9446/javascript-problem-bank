/**
 * [(lv.1)[2]전-후위-연산자.js]
 *
 * 다음을 수행하세요:
 * 1. 변수 num을 0으로 선언하세요.
 * 2. 변수 postIncrement를 선언하고, num을 후위 증가 연산자(num++)로 증가시킨 후 결과를 할당하세요.
 * 3. 변수 preIncrement를 선언하고, num을 전위 증가 연산자(++num)로 증가시킨 후 결과를 할당하세요.
 * 4. postIncrement와 preIncrement 변수를 export 하세요.
 */

let num = 0;

let postIncrement; // 후위 증가 연산
let preIncrement; // 전위 증가 연산

postIncrement = num++
preIncrement = ++num

// TODO: num에 대한 후위, 전위 연산을 각각 수행하고 결과를 postIncrement와 preIncrement에 할당하세요.

// export 를 수정하지 마세요.
export { postIncrement, preIncrement };
