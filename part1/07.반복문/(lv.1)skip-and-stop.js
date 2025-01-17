/**
 * [(lv.1)skip-and-stop.js]
 *
 * 1부터 10까지 숫자를 순회하세요.
 * 짝수는 건너뛰고(continue), 홀수는 더하세요.
 * 단, 7을 더한 뒤에는 반복을 중단(break)하세요.
 * 최종적으로 더해진 값을 반환하세요.
 *
 * 예시 진행:
 *  1 -> 합(1)
 *  2 -> 짝수이므로 skip
 *  3 -> 합(1+3=4)
 *  4 -> 짝수이므로 skip
 *  5 -> 합(4+5=9)
 *  6 -> 짝수이므로 skip
 *  7 -> 합(9+7=16), 그리고 반복 종료
 *
 * @returns {number}
 */
function skipAndStop() {
    let n = 1
    let sum = 0
    while (n <= 10) {
        sum += n % 2 === 0 ? 0 : n
        if (n === 7) break;
        n++
    }
    return sum
}

// export를 수정하지 마세요.
export { skipAndStop };
