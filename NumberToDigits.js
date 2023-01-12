//DAY 1

/* Write a function that takes a number (a) as argument.
Split a into its individual digits and return them in an array. */

function myFunction(a) {
    var digits = a.toString().split('');
    var realDigits = digits.map(Number)
    console.log(realDigits);
  }

  myFunction( 12345678 )
