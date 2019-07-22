'use strict';

// exercise 1
function countingSheep(numSheep) {
  if (numSheep === 0) {
    console.log('All sheep jumped over the fence');
    return;
  }
  console.log(`${numSheep}: Another sheep jumps over the fence`);
  countingSheep(numSheep - 1);

}


function powerCalculatorRec(integer, exponent) {
  if (exponent === 0) {
    return 1;
  }
  
  // 10 * func
  // 10 * 10 * func
  // 10 * 10 * 1
  return integer * powerCalculatorRec(integer, exponent - 1);
}

function reverseString(str) {  
  if(str.length === 0) {
    return '';
  }
  return str[str.length - 1] + reverseString(str.substring(0, str.length - 1));
}


function main() {
  // let sheep = 3;
  /* exercise 1 */
  // countingSheep(sheep); // exercise 1
  // console.log('I got through the function');
  
  /* exercise 2 */
  // console.log(powerCalculatorRec(10, 2));
  // console.log(powerCalculatorRec(10, 3)); 

  /* exercise 3 */
  console.log(reverseString('abcd'));
  // console.log(reverseString())

  /* exercise 4 */
  
}

main();