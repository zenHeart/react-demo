let cache = {};
function fib(n) {
  if(n <=2) {
    return 1
  } else {
    let a = fib(n -1)
    let b = fib(n -2)
    return a + b;
  }
}
console.time('fib')
fib(20)
console.timeEnd('fib')


