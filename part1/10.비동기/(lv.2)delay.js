/**
 * [(lv.2)delay.js]
 *
 * setTimeout 함수를 사용하여 ms 밀리초 후에 "done"을 resolve하는
 * delay 함수를 작성하세요.
 *
 * @param {number} ms
 * @returns {Promise<string>} "done"
 */

function delay(ms) {
  // TODO: delay 함수를 작성하세요.
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('done')
    }, ms)
  })
}

// export를 수정하지 마세요.
export { delay };
