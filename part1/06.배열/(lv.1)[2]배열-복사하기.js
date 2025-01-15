/**
 * [(lv.1)[2]배열-복사하기.js]
 *
 * 배열 array가 있습니다.
 * spread 연산자를 사용해 array를 복사하고,
 * 복사된 배열에 4를 추가하세요.
 * 복사된 배열 newArray는 [1, 2, 3, 4] 순서를 가져야 합니다.
 * 또한 newArray와 array는 서로 다른 객체여야 하며,
 * 원본 배열 array는 변경되지 않아야 합니다.
 *
 * @returns {number[]} 1, 2, 3, 4 요소를 담는 배열
 */

const array = [1, 2, 3];

// TODO: spread 연산자를 사용하여 array 배열을 복사하고 4를 추가하세요.
const newArray = [...array, 4];

// export를 수정하지 마세요.
export { array, newArray };
