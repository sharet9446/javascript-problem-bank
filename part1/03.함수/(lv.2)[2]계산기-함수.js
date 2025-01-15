/**
 * [(lv.2)[2]계산기-함수.js]
 *
 * 아래 내용을 구현하세요:
 * - calcTotal 함수는 상품 가격(price)과 수량(quantity)을 받아 총 금액을 계산해 반환합니다.
 * - quantity 파라미터가 주어지지 않은 경우 기본값으로 1을 사용하세요.
 * - price * quantity 결과를 반환하세요.
 *
 * @param {number} price - 상품 가격
 * @param {number} [quantity=1] - 구매 수량(옵션)
 * @returns {number} - 계산된 총 금액
 */

function calcTotal(price, quantity) {
  //Todo
  if (quantity === undefined) quantity = 1;
  return price * quantity
}

// export 를 수정하지 마세요.
export { calcTotal };
