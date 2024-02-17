// Sum of Two Numbers
function sum(a, b) {
  // Add your code here
  if( typeof a==='number' && typeof b==='number') {
    sum=a+b;
    console.log(sum);
    return sum; 
  }
  else {
    console.log("Los datos de entrada no son adecuados");
  }
}

// Factorial of a Number
function factorial(n) {
  // Add your code here
  factorial = 1;
  if( typeof n==='number' ) {
    for ( let i=1; i<=n; i++ ) {
      factorial= factorial*i;
    }
    return factorial;
  }
  else {
    console.log("Los datos de entrada no son adecuados");
  }
}

// Find the Largest Number
function findLargest(arr) {
  // Add your code here
  for(let i=0; i<arr.length; i++ ) {
    if(typeof arr[i]==='number') {
      let max= arr[0];
      for(let i=0; i<arr.length; i++ ){
        if(arr[i] > max){
          max= arr[i];         
        }
      }
      return max;
    }
    else {
      console.log("Los datos de entrada no son adecuados");
    }
  }
}

// Count Vowels in a String
function countVowels(str) {
  // Add your code here
  if(typeof str==='string') {
    str= str.toLowerCase();
    let count=0;
    const vowels=['a','e','i','o','u'];
    for(let i=0; i<str.length; i++ ){
      if(vowels.includes(str[i])) {
        count++;
      }
    }
    return count;
  }
  else {
    console.log("Los datos de entrada no son adecuados");
  }
}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here
  if(typeof n==='number') {
    let count=0;
    let i=1;
    while(i<=n) {
      if(n%i === 0) {
        count++;
      }

      if(count === 2){
        return true;
      }
      else {
        return false
      }
    }
  } 
  else {
    console.log("Los datos de entrada no son adecuados");
  }
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
