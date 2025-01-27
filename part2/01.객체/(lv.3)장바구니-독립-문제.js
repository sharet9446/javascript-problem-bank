/**
 * [(lv.3)장바구니-독립-문제.js]
 *
 * 1) userACart와 userBCart가 동일한 객체 참조로 인해 쿠폰 적용 시 서로 간섭이 발생합니다.
 * 2) userBCart를 userACart와 독립된 "깊은 복사"를 통해 분리하세요.
 * 3) applyCoupon 함수는 cart의 각 아이템 가격을 discount만큼 빼주어야 합니다.
 * 4) 최종적으로 userACart, userBCart가 다르게 변했는지 확인 가능한 객체를 반환하세요.
 *
 * @returns {object} { userACart, userBCart }
 */

// TODO: 함수를 작성하세요 (예: fixCartReferenceIssue)
function fixCartReferenceIssue() {
  const userACart = {
    items: [
      { name: "키보드", price: 30000 },
      { name: "마우스", price: 20000 },
    ],
  };

  // TODO: userBCart가 userACart와 독립된 복사본을 가지도록 해야 함
  let userBCart = JSON.parse(JSON.stringify(userACart));

  const coupon = 5000;

  applyCoupon(userBCart, coupon);
  function applyCoupon(cart, discount) {
    // TODO
    cart.items.map((item) => (item.price -= discount));
  }

  return { userACart, userBCart };
}

// export를 수정하지 마세요.
export { fixCartReferenceIssue };
