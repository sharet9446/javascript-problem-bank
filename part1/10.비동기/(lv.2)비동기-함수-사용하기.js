/**
 * [(lv.1)[2]비동기-함수-사용하기.js]
 *
 * 비동기 함수 fetchUsers가 반환하는 데이터를 받아,
 * 사용자 이름만 추출한 배열을 반환하는 getUsers 함수를 작성하세요.
 * async/await 문법을 반드시 사용해야 합니다.
 *
 * @param {Promise<{ id: number; name: string }[]>} fetchUsers
 * @returns {Promise<string[]>}
 */

// 예시로 사용할 fetchUsers 함수 (수정 금지)
// function fetchUsers() {
//   return new Promise((resolve) => {
//     const mockData = [
//       { id: 1, name: "Alice" },
//       { id: 2, name: "Bob" },
//     ];
//     resolve(mockData);
//   });
// }

// TODO: getUsers 함수를 작성하세요.
async function getUsers(fetchUsers) {
    let loginName = []
    const res = await fetchUsers();
    res.forEach(login => {
        loginName.push(login.name)
    })
    return loginName
}

// export를 수정하지 마세요.
export { getUsers };
