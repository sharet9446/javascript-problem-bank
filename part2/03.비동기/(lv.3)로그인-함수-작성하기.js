/**
 * [(lv.3)로그인-함수-작성하기.js]
 *
 * safeLogin 함수는 loginRequest 함수를 사용해 id와 pw로 로그인 시도를 합니다.
 * loginRequest 함수는 id가 "admin", pw가 "1234"인 경우 "ok"를 반환,
 * 그렇지 않은 경우 "fail"을 반환합니다.
 * try/catch를 사용해 에러가 발생하면 "error"를 반환하세요.
 *
 * @param {string} id
 * @param {string} pw
 * @returns {Promise<string>}
 */

import { loginRequest } from "../../part1/10.비동기/(lv.2)로그인-확인-함수";

async function safeLogin(id, pw) {
  try {
    return await loginRequest(id, pw);
  } catch {
    return "error";
  }
}

// export를 수정하지 마세요.
export { safeLogin };
