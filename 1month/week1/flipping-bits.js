// Flipping bits

// You will be given a list of 32 bit unsigned integers. Flip all the bits (1 to
// 0 and 0 to 1) and return the result as an unsigned integer.

function flippingBits(n) {
  let invN = ~n;
  let bitInvN = (invN >>> 0).toString(2);
  return parseInt(bitInvN, 2);
}
