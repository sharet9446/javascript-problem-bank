/**
 * [(lv.1)grade-구하기.js]
 *
 * 점수(score)를 받아서 점수대별로 "A", "B", "C", "D"를 반환하세요.
 *  - 90점 이상: "A"
 *  - 80점 이상: "B"
 *  - 70점 이상: "C"
 *  - 그 외: "D"
 * if-else if 문을 사용하세요.
 *
 * @param {number} score
 * @returns {string} "A" | "B" | "C" | "D"
 */

// TODO: getGrade 함수를 작성하세요.
function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else return "D";
}

// export 를 수정하지 마세요.
export { getGrade };
