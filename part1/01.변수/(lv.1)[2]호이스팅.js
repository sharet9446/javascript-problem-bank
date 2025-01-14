/**
 * [(lv.1)[2]호이스팅.js]
 *
 * hoistingTest 함수에서 console.log(d); var d = 5; 를 통해,
 * 실제 실행 시 undefined가 먼저 출력된 후, 그 다음에 변수 d가 5로 할당되도록 작성하세요.
 *
 */

function hoistingTest() {
  // TODO:
  console.log(d);
  var d = 5;
  console.log(d);
}

// export 를 수정하지 마세요.
export { hoistingTest };
