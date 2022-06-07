# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @shrey/lotide`

**Require it:**

`const _ = require('@shrey/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first element of an array
* `tail(array)`: returns all but the first element of an array
* `middle(array)`: returns the middle elements of an array
* `eqArrays(array1, array2)`: returns true or false based on if the compared arrays are equal
* `assertEqual(actual, expected)`: console.logs if the two compared primitive values are the same or not
* `eqObjects(object1, object2)`: returns true or false based on if the compared objects are equal
* `assertObjectsEqual(actual, expected)`: console.logs if the two compared objects are equal
* `countLetters(string)`: counts how many letters are in a string and returns results in an object
* `countOnly(array, object)`: counts the number of times an element appears in an array based on an object specifying what to count
* `findKey(object, callback)`: returns an objects key based on a condition set by the callback function
* `findKeyByValue(object, lookFor)`: returns the value of an objects key that matches the lookFor parameter
* `letterPositions(string)`: returns an array with all the indexs of each letter in the string
* `map(array, callback)`: returns a new array that has applied a callback function to each element of the inputted array
* `takeUntil(array, callback)`: returns an array with all elements until the given condition from the callback function is met
* `without(array, itemsToRemove)`: returns an array that takes out all elements from the itemsToRemove input

