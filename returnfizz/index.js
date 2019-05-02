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
    
  }
  return results;
}

// fizzbuzzer(15)

function generateDiv(el) {
  let fizzbuzzClass = '';
  if (typeof el === 'string') {
    fizzbuzzClass = el;
    } 
    
  return `
  <div class="fizz-buzz-item ${fizzbuzzClass}">
    <span>${el}</span>
  </div>
  `;
}


function generateResults(fizzbuzzSeq) {
  // console.log(fizzbuzzSeq.map(fs => generateDiv(fs)));
  return fizzbuzzSeq.map(fs => generateDiv(fs)).join('');
 
}

console.log(generateResults(fizzbuzzer(5)));

function main(){
 $('#number-chooser').submit( function(event){
   event.preventDefault();
   $('#number-choice')
 })
}
$(main());