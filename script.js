//Create a function that checks if the input/parameter is an even number.
//Create a function that prints to the console n1 to n2. where n1 is the first input/parameter and n2 is the second input/parameter.
//Create a function that sum the values in-between two numbers. eg calcFunc(1,3) returns 6. ie. 1+2+3

//Question 1
function checkEven (num) {
    if (num % 2 === 0) {
      return `${num}  is an even number`;
    } else {
      return `${num}  is not an even number`;
    };
  }
  console.log (checkEven (27));


//Question 2
function listnum (n1, n2) {
    for (let n = n1; n<=n2; n++)
     {
        console.log(n);
   }
}
listnum (5, 40);



//Question 3
function createAdd (start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i; 
    }
    return sum;
}
let result = createAdd (5, 40);
console.log (result);