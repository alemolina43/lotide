const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


//input string
//output letters in the string
/**
 * countLetters counts how many times a letters is in a string
 * @param {*} sentence
 * it returns an object with letters as keys and numbers as values
 *
 */
const countLetters = function(sentence) {
  const results = {};

  for (const letter of sentence) {
    // does this key value exist if not make it 0(initial value)
    if (!results[letter]) {
      results[letter] = 0;
    }

    //happy path - increment the value
    results[letter] += 1;
  }
  
  return results;

};

console.log(countLetters("Heeello"));
console.log(countLetters("")); // 0
assertEqual(countLetters("LHL")["L"], 2); //should PASS
assertEqual(countLetters("I love coding")["o"], 4); //should FAIL
assertEqual(Object.keys(countLetters("")).length, 0); //should PASS