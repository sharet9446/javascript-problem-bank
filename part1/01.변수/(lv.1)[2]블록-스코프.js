/**
 * [(lv.1)[2]블록-스코프.js]
 *
 * 다음을 수행하세요:
 * 1. blockScopeTest 함수 내부에 블록({})을 생성하세요.
 * 2. 블록 내부에 let 키워드로 변수 w를 선언하고 값 1을 할당하세요.
 * 3. 같은 블록 내부에 var 키워드로 변수 u를 선언하고 값 2를 할당하세요.
 * 4. 블록 외부에서 w에 접근하여 콘솔에 출력하세요. (ReferenceError가 발생해야 합니다.)
 * 5. 블록 외부에서 u에 접근하여 콘솔에 출력하세요. (값 2가 출력되어야 합니다.)
 */

function blockScopeTest() {
  {
    // 블록 내부에 변수 선언
    var u = 2;
    let w = 1;
  }
  // 블록 외부에서 변수 접근
  console.log(u); // 2
  console.log(w); // ReferenceError
}

// export 를 수정하지 마세요.
export { blockScopeTest };
