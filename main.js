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
  if (str.length === 0) {
    return '';
  }
  return str[str.length - 1] + reverseString(str.substring(0, str.length - 1));
}

function triangularNumber(n) {
  if (n === 0) {
    return 0;
  }
  return n + triangularNumber(n - 1);
}

function stringSplitter(str, separator) {
  if (str.length === 0) {
    return '';
  }
  if (str[0] === separator) {
    return stringSplitter(str.substring(1), separator);
  } else {
    return str[0] + stringSplitter(str.substring(1), separator);
  }
}

function fibonacci(n) {
  if (n === 1) {
    return [0, 1];
  } else {
    var s = fibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
}

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
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
  // console.log(reverseString('abcd'));
  // console.log(reverseString())

  /* exercise 4 */
  // console.log(triangularNumber(6));

  /* exercise 5 */
  // console.log(stringSplitter('02/20/2020', '/'));

  /* exercise 6 */
  // console.log(fibonacci(7));

  /* exercise 7 */
  // console.log(factorial(5));

  /* exercise 8*/
  let mySmallMaze = [[' ', ' ', ' '], [' ', '*', ' '], [' ', ' ', 'e']];

  let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
  ];

  // let myTestMaze = [
  //   [' ', ' ', ' '],
  //   [' ', '*', ' '],
  //   [' ', ' ', 'e'],
  //   [' ', ' ', 'e'],
  // ];
  console.log(winMaze(maze));
}

function winMaze(maze, row = 0, column = 0) {
  if (row + 1 === maze.length && column + 1 === maze[0].length) {
    return '';
  }

  if (column + 1 < maze[0].length && maze[row][column + 1] !== '*') {
    column += 1;
    return 'R' + winMaze(maze, row, column);
  } else if (row + 1 < maze.length && maze[row + 1][column] !== '*') {
    row += 1;
    return 'D' + winMaze(maze, row, column);
  } else if (column - 1 >= 0 && maze[row][column - 1] !== '*') {
    column -= 1;
    return 'L' + winMaze(maze, row, column);
  } else if (row - 1 >= 0 && maze[row - 1][column] !== '*') {
    row -= 1;
    return 'U' + winMaze(maze, row, column);
  }
}

main();
