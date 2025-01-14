/**
 * [(lv.1)[1]const-재할당.js]
 *
 * 함수 내부에서 const 키워드로 변수를 선언하고,
 * 해당 변수에 재할당을 시도하여 오류를 발생시키세요.
 * TypeError 또는 SyntaxError 등의 에러가 콘솔에 표시되어야 합니다.
 */

function reassignConst() {
  // TODO
  const arr = [1, 2, 3]
  arr = [4, 5, 6]

}

// export 를 수정하지 마세요.
export { reassignConst };
