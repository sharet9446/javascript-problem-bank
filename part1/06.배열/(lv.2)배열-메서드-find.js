/**
 * [(lv.2)배열-메서드-find.js]
 *
 * 이 문제에서는 아래 두 함수를 작성하세요:
 * 1) findUserByName(users, name): 파라미터로 받은 users 배열에서
 *    주어진 name과 일치하는 첫 번째 객체를 find로 찾아 반환하세요.
 *    만약 일치하는 객체가 없다면 null을 반환하세요.
 *
 * 2) findIndexOf(arr, value): 파라미터로 받은 arr 배열에서
 *    주어진 value와 일치하는 첫 번째 원소의 인덱스를 findIndex로 찾아 반환하세요.
 *    만약 일치하는 원소가 없다면 -1을 반환하세요.
 *
 * @param {{name: string}[]} users
 * @param {string} name
 * @returns {{name: string}|null}
 *
 * @param {any[]} arr
 * @param {any} value
 * @returns {number}
 */

// TODO: findUserByName 함수를 작성하세요.
function findUserByName(users, name) {
    let userName = users.find(user => user.name === name)
    return userName ? userName : null 
}

// TODO: findIndexOf 함수를 작성하세요.
function findIndexOf(arr, value) {
    return arr.findIndex(val => val === value)
}

// export를 수정하지 마세요.
export { findUserByName, findIndexOf };
