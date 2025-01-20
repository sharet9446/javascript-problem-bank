/**
 * [(lv.1)[2]Promise-객체-만들기.js]
 *
 * 새로운 Promise 객체 두 개를 작성하세요.
 * 첫 번째 Promise는 resolve 시 "Hello"를 반환하고,
 * 두 번째 Promise는 reject 시 "Error!"를 반환해야 합니다.
 *
 * @type {Promise<string>}
 */

let resolvePromise = new Promise(resolve => {
    resolve("Hello")
});
let rejectPromise = new Promise((resolve,reject) => {
    reject("Error!");
});

// export를 수정하지 마세요.
export { resolvePromise, rejectPromise };
