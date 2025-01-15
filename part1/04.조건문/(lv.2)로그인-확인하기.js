/**
 * [(lv.2)로그인-확인하기.js]
 *
 * id와 pw를 파라미터로 받아, 다음을 수행하세요:
 * - id가 "admin"이고 pw가 "1234"이면 "success"를 반환
 * - 그렇지 않으면 "fail"을 반환
 *
 * @param {string} id
 * @param {string} pw
 * @returns {string} "success" or "fail"
 */

function loginCheck(id, pw) {
  // TODO
  return id === 'admin' && pw === '1234' ? "success" : "fail"
}

// export를 수정하지 마세요.
export { loginCheck };
