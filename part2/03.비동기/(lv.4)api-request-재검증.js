// (lv.4)api-request-재검증.js
/**
 * [(lv.4)api-request-재검증.js]
 *
 * apiRequest(endpoint):
 * 1) 만약 현재 토큰(currentToken)이 "expired"라면,
 *    refreshToken()을 통해 새 토큰("newToken")을 얻은 후 다시 요청하세요.
 * 2) refreshToken()은 비동기로 동작하며, "newToken"을 반환합니다.
 * 3) fetch(endpoint, token)을 이용해 데이터를 가져오세요.
 * 4) currentToken이 "valid"면 그대로 요청을 진행하세요.
 *
 * 전역 변수 currentToken은 "valid" 또는 "expired" 상태로 존재합니다.
 *
 * @param {string} endpoint - API 엔드포인트
 * @param {string} token - 토큰
 * @returns {Promise<string>}
 */

let currentToken = "expired";

async function refreshToken() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("newToken");
    }, 10);
  });
}

async function fetch(endpoint, token) {
  return Promise.resolve(`fetched data from ${endpoint} with token ${token}`);
}

async function apiRequest(endpoint, token = currentToken) {
  // TODO: currentToken이 "expired"이면 refreshToken() 후 재요청,
  //       currentToken이 "valid"면 바로 fetch
  if (token === "expired") {
    return refreshToken();
  }
  return fetch(endpoint, token);
}

// export를 수정하지 마세요.
export { apiRequest };
