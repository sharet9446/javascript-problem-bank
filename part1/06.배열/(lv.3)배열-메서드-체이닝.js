/**
 * [(lv.3)배열-메서드-체이닝.js]
 *
 * person object 배열에서 20대 사람만 추출하세요.
 * 그 후, 추출된 사람들을 나이 순으로 정렬한 뒤,
 * email만 골라서 새로운 배열로 반환하세요.
 * 반드시 배열 메서드 체이닝을 사용해야 합니다.
 *
 * @param {{
 *  name: string,
 *  age: number,
 *  email: string
 * }[]} arr
 * @returns {string[]} 20대 사람의 email 배열
 */

function get20sEmail(arr) {
  // TODO: 배열 메서드 체이닝을 사용해 20대 사람의 email 배열을 반환하세요.
  return arr.filter(person => person.age >= 20 && person.age < 30).sort((a, b) => a - b).map(person => person.email)
}

// export를 수정하지 마세요.
export { get20sEmail };
