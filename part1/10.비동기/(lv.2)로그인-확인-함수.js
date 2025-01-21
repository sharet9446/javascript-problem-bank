/**
 * [(lv.2)로그인-확인-함수.js]
 *
 * loginRequest(id, pw)를 작성하세요.
 *  - id가 "admin"이고 pw가 "1234"이면 "ok"를 resolve하는 Promise를 반환하세요.
 *  - 그렇지 않으면 "fail"을 reject하는 Promise를 반환하세요.
 *  - Promise를 사용하세요.
 *
 * @param {string} id
 * @param {string} pw
 * @returns {Promise<string>} "ok" 또는 "fail"
 */
function loginRequest(id, pw) {
    return new Promise((resolve, reject) => {
        if (id === 'admin' && pw === '1234') {
            resolve('ok')
        } else {
            reject('fail')
        }
    })
}

// export를 수정하지 마세요.
export { loginRequest };
