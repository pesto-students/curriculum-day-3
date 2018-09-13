/* eslint-disable */

/** (*)
 * Don't use Array.prototype.reverse
 */
function reverseString(string) {
  let newStr = '';
  for(i=string.split('').length-1;i>=0;i--){
    newStr += string[i];
  }
  return newStr;
}

/** (*)
 * Return an English translated sentence of the passed binary string.
 * The binary string will be space separated.
 */
function binaryAgent(str) {
  
  str = str.replace(/ /g,'');
  let splitStr = str.split('');
  splitStr.forEach(el=>{
    result += String.fromCharCode(parseInt(el, 2));
  })
  return result;
}

/** (*)
 * Return true for palindrome else false
 */
function isPalindrome(string) {
  // Was it a car or a cat I saw
  if(typeof(string)=== "string"){
    let newStr = '';
  string = string.replace(/ /g,'');
  string = string.replace(/_/g,'');
  string = string.replace(/[,\/]/g,'');
  string = string.replace(/[.\/]/g,'');
  string = string.replace(/[()]/g,'');
string = string.replace(/-/g,'');
  string = string.toLowerCase();
  for(i=string.split('').length-1;i>=0;i--){
    newStr += string[i];
  }
console.log(string);
console.log(newStr);
  if(newStr === string){
    return true;
  }else return false;
  }
  else if(typeof(string) === "number"){
    let rem=0,res=0,temp;
    temp = string;
    while(string > 0){
      rem = string%10;
      res = res*10 + rem;
       string = Math.floor(string/10);
}
console.log(string);
console.log(res);
     
      if(res === temp)
      return true;
      else return false;
    }
    
  }
  
  


/** (*)
* Return the longest word in a string
*/
function longestWordInString(string) {
  let newString = string.split(" ");
  let longestWord = 0;  
  let longestWordInString = '';
  for(let i=0;i<newString.length;i++){
    if(newString[i].length > longestWord){
      longestWord = newString[i].length;
      longestWordInString = newString[i]  
    }
  }
  console.log(longestWord);
  console.log(longestWordInString);
  return longestWord;
}

/**
 * Return true if the passed string is a valid US phone number.
 * The user may fill out the form field any way they choose as long as it
 * is a valid US number. The following are examples of valid formats for
 * US numbers (refer to the tests below for other variants):
 * 555-555-5555
 * (555)555-5555
 * (555) 555-5555
 * 555 555 5555
 * 5555555555
 * 1 555 555 5555
 * For this challenge you will be presented with a string such as 800-692-7753
 * or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone
 * number based on any combination of the formats provided above. The
 * area code is required. If the country code is provided, you must confirm
 * that the country code is 1. Return true if the string is a valid US phone
 * number; otherwise return false.
 */
function telephoneCheck(str) {
  // Good luck!
  return true;
}

/** (*)
 * One of the simplest and most widely known ciphers is a Caesar
 * cipher, also known as a shift cipher. In a shift cipher the
 * meanings of the letters are shifted by some set amount.
 * A common modern use is the ROT13 cipher, where the values of the
 * letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 * Write a function which takes a ROT13 encoded string as input and
 * returns a decoded string.
 * All letters will be uppercase. Do not transform any non-alphabetic
 * character (i.e. spaces, punctuation), but do pass them on.
 */
function rot13(str) {
  // LBH QVQ VG!
}


/** (*)
* Return an array consisting of the
* largest number from each provided
* sub-array. For simplicity, the provided
* array will contain exactly 4 sub-arrays.
*/
function largestOfFour(arr) {

}

/** (*)
 * Return the lowest index at which a value (second argument) should
 * be inserted into an array (first argument) once it has been sorted.
 * The returned value should be a number.
 * For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because
 * it is greater than 1 (index 0), but less than 2 (index 1).
 * Likewise, getIndexToIns([20,3,5], 19) should return 2 because
 * once the array has been sorted it will look like [3,5,20] and
 * 19 is less than 20 (index 2) and greater than 5 (index 1).
 */
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
}

/** (*)
 * Repeat a given string (first argument) num times
 * (second argument). Return an empty string if num
 * is not a positive number.
 */
function repeatStringNumTimes(str, num) {
  // repeat after me
}

/** (*)
 * Remove all falsy values from an array.
 */
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
}

/** (*)
 * We'll pass you an array of two numbers.
 * Return the sum of those two numbers and all numbers between them.
 * The lowest number will not always come first.
 */
function sumAll(arr) {
  let sum = 0;
  let first ;
  let last ;
  let sumAll = 0;
  for(let i=0;i<arr.length;i++){
    sum += arr[i];
  }
  if(arr[0] > arr[1]){
    first = arr[1];
    last = arr[0];
    for(let j=first;j<=last;j++){
      sumAll += j;
    }
  }else{
    first = arr[0];
    last = arr[1];
    for(let j=first;j<=last;j++){
      sumAll += j;
    }
  }
  
  return sumAll;
}

/** (*)
 * Compare two arrays and return a new array with any items only found
 * in one of the two given arrays, but not both. In other words, return
 * the symmetric difference of the two arrays.
 */
function diffArray(arr1, arr2) {
  let arr3 = [];
  arr1.forEach(el1=>{
    arr2.forEach(el2=>{
      if(el1===el2){
        arr3.push(el1);
      }
    })
  })
  return arr3;
  // Same, same; but different.
}

/**
 * Convert the given number into a roman numeral.
 * Helpful Tags - Array.splice, Array.indexOf, Array.join
 */
function convertToRoman(num) {

}

/** (*)
 * Flatten a nested array. You must account for varying levels of nesting.
 */
function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr;
}

/** (*)
 * Given an array arr, find element pairs whose sum equal the second argument arg and
 * return the sum of their indices.
 * If multiple pairs are possible that have the same numeric elements but different
 * indices, return the smallest sum of indices. Once an element has been used,
 * it cannot be reused to pair with another.
 * For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to
 * 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.
 * Index  0  1   2   3   4
 * Value 7  9  11  13  15
 * Below we'll take their corresponding indices and add them.
 * 7 + 13 = 20 → Indices 0 + 3 = 3
 * 9 + 11 = 20 → Indices 1 + 2 = 3
 * 3 + 3 = 6 → Return 6
 */
function pairwise(arr, arg) {
  return arg;
}

module.exports = {
  reverseString,
  isPalindrome,
  diffArray,
  longestWordInString,
  telephoneCheck,
  rot13,
  getIndexToIns,
  repeatStringNumTimes,
  binaryAgent,
  bouncer,
  sumAll,
  convertToRoman,
  largestOfFour,
  steamrollArray,
};
