/**
 * [(lv.2)[2]manageTaskList.js]
 *
 * 아래 내용을 구현하세요:
 * 1) 함수 이름: manageTaskList (파라미터: tasks, newTask)
 * 2) 먼저 tasks의 마지막 항목을 pop으로 제거하세요.
 * 3) newTask를 push로 tasks 배열 끝에 추가하세요.
 * 4) 변형된 tasks 배열이 하나 이상의 항목을 가지고 있다면,
 *    첫 번째 항목을 "Updated Task"로 변경하세요.
 * 5) 최종적으로 변형된 tasks 배열을 반환하세요.
 *
 * @param {string[]} tasks - 기존 할 일 목록
 * @param {string} newTask - 새 할 일(문자열)
 * @returns {string[]} 조작 후의 할 일 배열
 */

function manageTaskList(tasks, newTask) {
    tasks.pop()
    tasks.push(newTask)
    if (tasks.length !== 0) {
        tasks[0] = "Updated Task"
    }
    return tasks
}

// export를 수정하지 마세요.
export { manageTaskList };
