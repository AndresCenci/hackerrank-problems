let movies = require('./movies');
let bst = require('./buying-show-tickets');

console.log('Buying Show Tikets');
console.log('==================');
console.log();
console.log('Sample Case 0');
let array0 = [5, 2, 6, 3, 4, 5, 2];
let position0 = 2;
console.log('   Sample Input 0: ', array0);
console.log('   Jesse Position: ', position0);
console.log('   ' + bst(array0, position0) + ' tickets are still pending to being sold.');

console.log();
console.log('Sample Case 1');
let array1 = [4, 1, 1, 1, 1, 0];
let position1 = 0;
console.log('   Sample Input 1: ', array1);
console.log('   Jesse Position: ', position1);
console.log('   ' + bst(array1, position1) + ' tickets are still pending to being sold.');

console.log();
console.log('Sample Case 2');
let array2 = [4, 5, 5, 2, 3, 3];
let position2 = 3;
console.log('   Sample Input 2: ', array2);
console.log('   Jesse Position: ', position2);
console.log('   ' + bst(array2, position2) + ' tickets are still pending to being sold.');

console.log();
console.log('Movies');
console.log('======');
console.log();
movies('spiderman');
movies('waterworld');