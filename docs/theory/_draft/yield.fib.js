function fib(n) {
  let sum;

  if(n <= 2) {
    sum = 1

  } else {
    sum =  fib(n-1) + fib(n-2);
  }
  return sum;
}
let stacks = [];
function fib(n) {
  let stack = {
    input: n,
    addr: fib,
  }
  stacks.unshift(stack);
  let sum;

  if(n <= 2) {
    sum = 1

  } else {
    sum =  fib(n-1) + fib(n-2);
  }
  return sum;
}

console.dir(fib(10) )
console.table(stacks)

