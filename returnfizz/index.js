/* eslint-disable strict */

function fizzbuzz (num) {
  if (num % 15 ===0) {
    return 'fizzbuzz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else if (num % 3 === 0) {
    return 'buzz';
  } else {
    return 'bang';
  }
}

function fizzbuzzer (countTo) {
  const results = [];
  for (let i = 1; i <=countTo; i++) {

  }
  return results;
}

function generateDiv(el) {
  let fizzbuzzClass = '';
  if (typeof el === 'string') {
    fizzbussClass = el;
  }
  return `
  <div class="fizz-buzz-item">
    <span>1</span>
  </div>
  `;

}

function generateResults(fizzbuzzSeq) {
  return fizzbuzzSeq.map(fs => generateDiv(fs));

}

const fizzResults = fizzbuzzer(50);
console.log()