/**
 * [(lv.2)Promise-체이닝-catch.js]
 *
 * getDataWithFallback 함수를 작성하세요.
 * - primary 함수를 호출하여 반환되는 Promise를 우선 시도합니다.
 * - 만약 이 Promise가 reject되면, fallback 함수를 호출하여 반환되는 Promise를 사용하세요.
 * - fallback 함수도 reject되면 해당 에러를 그대로 던지세요.
 *
 * @param {() => Promise<any>} primary
 * @param {() => Promise<any>} fallback
 * @returns {Promise<any>}
 */

// TODO: getDataWithFallback 함수를 작성하세요.
async function getDataWithFallback(primary, fallback) {
    return new Promise((resolve, reject))
    .then(await primary)
    .console.error(fallback());
    
}

// export를 수정하지 마세요.
export { getDataWithFallback };
