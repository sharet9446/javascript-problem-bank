/**
 * [(lv.1)팩토리얼.js]
 *
 * 1) factorial 함수는 숫자 n을 파라미터로 받습니다.
 * 2) n이 1 이상일 경우, 1부터 n까지의 합을 for문으로 구하여 반환하세요.
 * 3) n이 0 이하일 경우 0을 반환하세요.
 *
 * @param {number} n
 * @returns {number} 1부터 n까지의 합 (n이 0 이하일 경우 0)
 */
function factorial(n) {
  // TODO: n이 1 이상이면 1부터 n까지의 합을 반환, 0 이하이면 0을 반환
  if (n >= 1) {
    let sum = 0
    for (let i = 0; i <= n; i++) {
      sum += i
    }
    return sum
  } else if (n <= 0) {
    return 0
  }
}

// export를 수정하지 마세요.
export { factorial };
