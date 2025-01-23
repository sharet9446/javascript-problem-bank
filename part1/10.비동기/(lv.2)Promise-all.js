/**
 * [(lv.2)Promise-all.js]
 *
 * parallelRequests 함수를 작성하세요.
 *  - promise1, promise2를 병렬로 실행하여 결과를 배열로 반환합니다.
 *  - Promise.all을 사용하십시오.
 *
 * @param {Promise<any>} promise1
 * @param {Promise<any>} promise2
 * @returns {Promise<[any, any]>}
 */

// TODO: parallelRequests 함수를 작성하세요.
function parallelRequests(promise1, promise2) {
    return Promise.all([promise1, promise2]);
}

// export를 수정하지 마세요.
export { parallelRequests };
