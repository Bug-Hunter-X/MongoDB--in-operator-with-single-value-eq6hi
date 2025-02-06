# MongoDB $in operator with single value

This repository demonstrates an uncommon error in MongoDB queries involving the `$in` operator.

## Bug Description
The `$in` operator is used to query documents where a field value exists within an array of values. However, using `$in` with a single value is redundant.  A simple equality check (`name: 'John Doe'`) is more efficient and correct.

## Bug Solution
Replace the incorrect usage of `$in` with a direct equality comparison.

## How to reproduce the bug
1. Clone this repo
2. run `npm install`
3. Run `node bug.js`
4. The incorrect query will return the correct result, but is inefficient.

## How to fix the bug
1. Refer to `bugSolution.js` for the correct query method.