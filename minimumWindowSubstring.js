/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

/**
 * https://leetcode.com/problems/minimum-window-substring/
 * 
 * We start by building up a count of the frequencies of the substring with
 * with a count of the amount missing from our current window (starts as t.length)
 * this allows to check if we have a valid window in constant time.
 * 
 * Next we make the window with a trailing and leading pointer and keep a track of
 * which of the valid windows has the smallest length and return it
 */
 
var minWindow = function(s, t) {
  let minWin = [0,0]
  let minWinLength;
  let tCharCounter = frequencyCounter(t)
  tCharCounter.missing = t.length
  let trailingPointer = 0
  let leadingPointer = 0
  
  while (trailingPointer < s.length) {  
    if (tCharCounter.missing === 0 || leadingPointer > s.length) {
      if (leadingPointer-trailingPointer < minWinLength || !minWinLength) {
        minWinLength = leadingPointer-trailingPointer
        minWin = [trailingPointer, leadingPointer]
      }
      if (tCharCounter[s[trailingPointer]] !== undefined) {
        tCharCounter[s[trailingPointer]]++
        if (tCharCounter[s[trailingPointer]] > 0) {
          tCharCounter.missing++
        }
      }
      trailingPointer++
    } else if (leadingPointer < s.length) {
      if (tCharCounter[s[leadingPointer]] !== undefined) {
        if (tCharCounter[s[leadingPointer]] > 0) {
           // you can go negative on numbers in our counter 
          // (we have one more A in our window than needed so when we 
          // remove an A we know we are still valid) however we don't
          // want this to effect our missing count or will not record valid correctly
          tCharCounter.missing--
        }
        tCharCounter[s[leadingPointer]]--
      }
      leadingPointer++      
    } else {
      trailingPointer++
    }
  }  
  return s.slice(minWin[0], minWin[1])
};


// helper function for creating an object with counts of frequencies of a string (similar to python's Counter from collections)
function frequencyCounter(str) {
  let obj = {};
  for (let char of str) {
    obj[char] = (obj[char] || 0) + 1
  }
  return obj
}