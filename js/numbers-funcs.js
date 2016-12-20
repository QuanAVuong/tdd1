const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const filterOdds = arr => arr.filter( elem => elem >= 0 && elem % 2 === 1 || elem < 0 && elem % 2 === -1
// {
// 	if ( elem >= 0 && elem % 2 === 1 ) return elem;
// 	if ( elem < 0 && elem % 2 === -1 ) return elem;
// }

);




module.exports = {
  add: add,
  substract: substract,
  multiply: multiply,
  divide: divide,
  filterOdds: filterOdds,
};
