let cache = {};
function fib(n) {
  if(n <=2) {
    return 1
  } else {
    if(!cache[n-1]) {
      cache[n-1] = fib(n -1)
    }
    if(!cache[n-2]) {
      cache[n-2] = fib(n -2)
    }
    let a = cache[n -1]
    let b = cache[n -2]

    return a + b;
  }
}
console.time('fib')
console.log(fib(1000))
console.timeEnd('fib')


