/**
 * [(lv.3)객체-합치기.js]
 *
 * 1) mergeObjects(...objs) 함수는 여러 개의 객체를 받아서,
 *    뒤에 오는 객체의 동일 키로 앞쪽 객체의 값을 덮어쓰는 방식으로,
 *    모든 객체를 하나로 합칩니다.
 * 2) 이때 합쳐진 최종 객체를 반환하며, 원본 객체들은 수정하지 않아야 합니다.
 * 3) 얕은 복사 수준이면 충분합니다.
 *
 * 예시:
 *   const a = { x: 1, y: 2 };
 *   const b = { y: 3, z: 4 };
 *   mergeObjects(a, b) -> { x: 1, y: 3, z: 4 }
 *
 * @param  {...object[]} objs
 * @returns {object}
 */

function mergeObjects(...objs) {
    return Object.assign({}, ...objs)
}

// function mergeObjects(...objs) {
//     return { ...objs.reduce((acc, obj) => ({ ...acc, ...obj }), {}) };
// }

// export를 수정하지 마세요.
export { mergeObjects };
