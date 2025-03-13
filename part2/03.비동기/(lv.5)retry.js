/**
 * [(lv.5)retry.js]
 *
 * - retryRequest 함수를 작성하세요.
 * - promiseFactory()가 실패하면 최대 retries 번까지 재시도합니다.
 * - 성공하면 resolve된 값을 반환하고, 실패하면 마지막 에러를 reject합니다.
 *
 * @param {() => Promise<any>} promiseFactory
 * @param {number} retries
 * @returns {Promise<any>}
 */

function retryRequest(promiseFactory, retries) {
  return new Promise((resolve, reject) => {
    let count = 0;
    function retry() {
      promiseFactory()
        .then((res) => resolve(res))
        .catch((err) => {
          if (count === retries) {
            reject(err);
          } else {
            count++;
            retry();
          }
        });
    }
    retry();
  });
}

// export 를 수정하지 마세요.
export { retryRequest };
