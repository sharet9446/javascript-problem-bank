/**
 * [(lv.3)나이-통계-구하기.js]
 *
 * 1) users 배열은 [{ age: 10 }, { age: 30 }, ...] 형태를 가집니다.
 * 2) calculateStatistics(users)는 평균 나이(averageAge)와 최대 나이(maxAge)를 구해서
 *    { averageAge, maxAge } 객체 형태로 반환해야 합니다.
 * 3) reduce 메서드를 사용하세요.
 *
 * @param {{age:number}[]} users
 * @returns {{ averageAge: number, maxAge: number }}
 */

function calculateStatistics(users) {
  if (users.length === 0) {
    return { averageAge: 0, maxAge: 0 };
  }
  const averageAge = users.reduce((sum, a) => (sum += a.age), 0) / users.length;
  const maxAge = users.reduce((max, a) => Math.max(max, a.age), -Infinity);
  return { averageAge, maxAge };
}

// export 를 수정하지 마세요.
export { calculateStatistics };
