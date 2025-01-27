/**
 * [(lv.3)Map과 Set 활용하기.js]
 *
 * 1) userLogs라는 Map 객체를 만들어, userId별로 액션(action)을 기록하세요.
 *    예: userId: "abc123" -> actions: ["login", "viewPage", "logout"] 형태
 * 2) recordUserAction(userId, action) 함수:
 *    - userId에 해당하는 Set을 찾아 action을 추가합니다(중복 액션은 Set이 관리).
 *    - Set이 없다면 새로 만들어 Map에 등록하세요.
 * 3) getUserActions(userId) 함수:
 *    - 해당 userId의 모든 actions를 배열로 반환하세요.
 * 4) createUserLogger 함수를 작성하여,
 *    { recordUserAction, getUserActions }를 반환하세요.
 *
 * @returns {{ recordUserAction: Function, getUserActions: Function }}
 */

const userLogs = new Map();

function recordUserAction(userId, action) {
  if (!userLogs.has(userId)) {
    userLogs.set(userId, new Set());
  }
  userLogs.get(userId).add(action);
}

function getUserActions(userId) {
  return userLogs.has(userId) ? Array.from(userLogs.get(userId)) : [];
}

function createUserLogger() {
  return {
    recordUserAction,
    getUserActions,
  };
}

// export 를 수정하지 마세요.
export { createUserLogger };
