/**
 * [(lv.2)[3]함수의-사용-응용.js]
 *
 * 다음을 수행하세요:
 * 1) calcTotal 함수를 이용하여, price(상품 가격)와 quantity(구매 수량)를 받아 총 금액을 계산 후 total 변수에 할당하세요.
 * 2) canDrive 함수를 이용하여, age(나이)와 hasLicense(운전면허 보유 여부)를 받아 운전 가능 여부를 canDriveResult 변수에 할당하세요.
 * 3) checkAdult 함수를 이용하여, age를 받아 성인 여부를 adultResult 변수에 할당하세요.
 */

import { calcTotal } from "./(lv.2)[2]계산기-함수.js";
import { canDrive } from "./(lv.2)[2]논리-연산-함수.js";
import { checkAdult } from "./(lv.2)[2]삼항-연산-함수.js";

const price = 1000;
const quantity = 3;

let total = calcTotal(price, quantity);

const age = 19;
const hasLicense = true;

let canDriveResult = canDrive(age, hasLicense);
let adultResult = checkAdult(age);

// export 를 수정하지 마세요.
export { total, canDriveResult, adultResult };
