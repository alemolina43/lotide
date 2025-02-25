# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @ale_molina43/lotide`

**Require it:**

`const _ = require('@ale_molina43/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual`: Compares two arrays and logs a success or failure message based on whether they are equal.
- `assertEqual`: Compares two values using === and logs a success or failure message.
- `assertObjectsEqual`: Compares two objects using eqObjects and logs a formatted assertion message.
- `countLetters`: Returns an object with the count of each letter in a given sentence, excluding spaces.
- `countOnly`: Counts specified items in an array and returns an object with their frequencies.
- `eqArrays`: Compares two arrays element by element and returns true if they are identical, otherwise false.
- `eqObjects`: Compares two objects, checking both keys and values (including nested arrays), and returns true if they are equal.
- `findKey`: Returns the first key in an object for which the callback function returns true.
- `findKeyByValue`: Returns the first key in an object that matches a given value.
- `head`: Returns the first element of an array.
- `letterPositions`: Returns an object mapping each letter in a string (excluding spaces) to an array of its index positions.
- `map`: Applies a callback function to each element of an array and returns a new array with the new values.
- `middle`: Returns the middle element(s) of an array—one for odd-length arrays, two for even-length arrays.
- `tail`: Returns a new array containing all elements except the first from the input array.
- `takeUntil`: Returns a new array containing elements from the input array until the callback function returns true.
- `without`: Returns a new array with elements from the source array, excluding those found in the itemsRemoved array.
