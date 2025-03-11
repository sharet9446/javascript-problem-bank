/**
 * [(lv.5)api-요청-제한기.js]
 *
 * 1) createRateLimiter 함수를 작성하세요.
 * 2) 주어진 시간(timeWindow) 내에 최대 maxRequests번까지 요청을 처리해야 합니다.
 * 3) 요청이 제한을 초과하면, 큐에 대기시켰다가 순차적으로 처리하세요.
 * 4) 모든 요청은 Promise로 처리되어야 합니다.
 *
 * 힌트:
 * 1. 큐를 사용하여 대기 중인 요청을 관리하세요
 * 2. 요청 시간을 기록하여 timeWindow 내의 요청 수를 추적하세요
 * 3. setTimeout을 활용하여 제한된 요청을 지연 실행하세요
 * 4. Promise를 사용하여 비동기 처리를 구현하세요
 *
 * 예시:
 * const rateLimitedRequest = createRateLimiter(2, 1000); // 1초에 최대 2개 요청
 *
 * // 동시에 3개 요청
 * Promise.all([
 *   rateLimitedRequest(() => fetch('/api/1')), // 즉시 실행
 *   rateLimitedRequest(() => fetch('/api/2')), // 즉시 실행
 *   rateLimitedRequest(() => fetch('/api/3'))  // 1초 후 실행
 * ]);
 *
 * @param {number} maxRequests - 최대 허용 요청 수
 * @param {number} timeWindow - 시간 윈도우 (ms)
 * @returns {(fn: () => Promise<any>) => Promise<any>}
 */

function createRateLimiter(maxRequests, timeWindow) {
  const queue = [];
  let active = 0;

  function next() {
    if (active >= maxRequests || !queue.length) return;

    active++;
    queue
      .shift()()
      .finally(() => {
        active--;
        setTimeout(next, timeWindow / maxRequests);
      });
  }

  return (fn) =>
    new Promise((resolve) => queue.push(() => fn().then(resolve)) && next());
}

// export 를 수정하지 마세요.
export { createRateLimiter };
