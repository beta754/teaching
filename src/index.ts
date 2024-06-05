let myVar = 1
myVar = myVar + 1234

// Mathematical operators
// 1 + 1
// 1 - 1
// 1 * 1
// 1 / 1
// 5 % 3 = 2

// modulus / modulo
console.info("remdainder is", 6 % 6)

// Boolean operators
// const x = (false || true)
// const y = (false && false)

// String operators
// const z = "hello" + " world"

// Functions!
function sayHello(to) {
  console.info("hello, " + to)
}

// sayHello("Aaron")
// sayHello("Grant")
// sayHello("Kaitlynn")

function compute(a, b) {
  // compute the sum of two numbers and return it
  return a + b
}
function moreComputing(a, b) {
  // compute the computation of a,a and b,b
  return compute(compute(a, a), compute(b, b))
}

const sum = compute(1, compute(1, 1))

const computedSum = moreComputing(1, 2)
// console.info("whoa", computedSum)

// Recursion

function recursion(a) {
  if(a === 1) {
    return a
  }

  return a + recursion(a - 1)
}
const recursedSum = recursion(3)
// recursion(3)
//   => recursion(2)
//     => recursion(1)
// console.info("recursed", recursedSum)


// Loops
function looped(x) {
  let sum = 0;
  // while(x > 0) {
  //   console.info('x:', x)
  //   sum = sum + x;

  //   x = x - 1
  // }

  sum = 0
  for(let i = 0; i <= x; i++) {
    console.info("i:", i)
    sum += i
  }

  return sum
}
console.info("looped", looped(3))

// write a function that takes a name and a favorite color
// as parameters and logs them to the console.
// run for:
// Emily, who's favorite color is purple
// Joe, who's favorite color is gray
// Frank, who's favorite color is maroon


