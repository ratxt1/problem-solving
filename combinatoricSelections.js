/**
 * https://projecteuler.net/problem=53

There are exactly ten ways of selecting three from five, 12345:

123, 124, 125, 134, 135, 145, 234, 235, 245, and 345

In combinatorics, we use the notation, 5C3=10.

In general, nCr=n!r!(n−r)!, where r≤n, n!=n×(n−1)×...×3×2×1, and 0!=1.

It is not until n=23, that a value exceeds one-million: 23C10=1144066.

How many, not necessarily distinct, values of nCr for 1≤n≤100, are greater than one-million?
*/

/**
 * since for nCr as r gets closer to n/2 the greater the number is
 * because of this property we only need to find one combinatoric selector r
 * for each n less than 100 that is greater than 1million and then do some arithmetic
 * to find the other r (so for 23, 10 is the smallest number that is greater than 100
 * this means that 11, 12 and 13 are also valid. we can get this by (n-r)-r + 1 where r
 * is the first r we find that is over 1million
 */


function findCombinatoricSelectionsBelow100() {
  let solution = 4
  for (let n = 24; n <= 100; n++) {
    for (let r = 1; r < n; r ++) {
      if (combinations(n, r) > 1000000) {
        solution = solution + (n-r-r+1)
        break
      }
    }
  }
  return solution
}

function factorial(n) {
  let x = 1
  for (let i = 1; i <= n; i++) {
    x = x *i
  }
  return x
}

function combinations(n, r) {
  return factorial(n)/(factorial(r) * factorial(n-r))
}

console.log(findCombinatoricSelectionsBelow100()) // 4075