/**
 * [(lv.2)[2]비교-연산-함수.js]
 *
 * 두 값 a, b를 입력받아서, 아래의 비교 연산 함수를 각각 작성하세요.
 * 1. looseCompare(a, b): == 연산자를 사용하여 두 값이 같으면 true, 다르면 false를 반환
 * 2. strictCompare(a, b): === 연산자를 사용하여 두 값이 같으면 true, 다르면 false를 반환
 *
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 */

// TODO: looseCompare 함수를 작성하세요.
function looseCompare(a, b) {
    return a == b
}

// TODO: strictCompare 함수를 작성하세요.
function strictCompare(a, b) {
    return a === b
}

// export 를 수정하지 마세요.
export { looseCompare, strictCompare };
