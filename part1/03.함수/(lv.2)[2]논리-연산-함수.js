/**
 * [(lv.2)[2]논리-연산-함수.js]
 *
 * 나이가 18세 이상이고 운전면허(hasLicense)가 true인 경우 true를 반환하는 canDrive 함수를 작성하세요.
 * 그렇지 않으면 false를 반환하세요.
 *
 * @param {number} age
 * @param {boolean} hasLicense
 * @returns {boolean}
 */

function canDrive(age, hasLicense) {
  // TODO
  return age >= 18 && hasLicense === true
}

// export 를 수정하지 마시오.
export { canDrive };
