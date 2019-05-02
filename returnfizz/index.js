/* eslint-disable strict */

function fizzbuzz (num) {
  if (num % 15 ===0) {
    return 'fizzbuzz';
  } else if (num % 5 === 0) {
    return 'fizz';
  } else if (num % 3 === 0) {
    return 'buzz';
  } else {
    return num;
  }
}

function fizzbuzzer (countTo) {
  const results = [];
  for (let i = 1; i <=countTo; i++) {
    results.push(fizzbuzz(i));
    console.log(results);
  }
  return results;
}

fizzbuzzer(15)

function generateDiv(el) {
  let fizzbuzzClass = '';
  if (typeof el === 'string') {
    fizzbuzzClass = el;
    console.log('hello');
  }
  return `
  <div class="fizz-buzz-item ${fizzbuzzClass}">
    <span>${el}</span>
  </div>
  `;
}

function generateResults(fizzbuzzSeq) {
  return fizzbuzzSeq.map(fs => generateDiv(fs));

}


console.log(generateDiv(15))