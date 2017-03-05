# array-permutation

return all permutations of array elements

- https://github.com/shokai/array-permutation
- https://www.npmjs.com/package/array-permutation

[![CircleCI](https://circleci.com/gh/shokai/array-permutation.svg?style=svg)](https://circleci.com/gh/shokai/array-permutation)


## Usage

```js
var permutation = require('array-permutation')

console.log(permutation([ 1, 3, 5 ]))
```

```
[ [ 1, 3, 5 ],
  [ 1, 5, 3 ],
  [ 3, 1, 5 ],
  [ 3, 5, 1 ],
  [ 5, 1, 3 ],
  [ 5, 3, 1 ] ]
```


```js
console.log(permutation([ 8, 9, 3, 1 ]))
```

```
[ [ 8, 9, 3, 1 ],
  [ 8, 9, 1, 3 ],
  [ 8, 3, 9, 1 ],
  [ 8, 3, 1, 9 ],
  [ 8, 1, 9, 3 ],
  [ 8, 1, 3, 9 ],
  [ 9, 8, 3, 1 ],
  [ 9, 8, 1, 3 ],
  [ 9, 3, 8, 1 ],
  [ 9, 3, 1, 8 ],
  [ 9, 1, 8, 3 ],
  [ 9, 1, 3, 8 ],
  [ 3, 8, 9, 1 ],
  [ 3, 8, 1, 9 ],
  [ 3, 9, 8, 1 ],
  [ 3, 9, 1, 8 ],
  [ 3, 1, 8, 9 ],
  [ 3, 1, 9, 8 ],
  [ 1, 8, 9, 3 ],
  [ 1, 8, 3, 9 ],
  [ 1, 9, 8, 3 ],
  [ 1, 9, 3, 8 ],
  [ 1, 3, 8, 9 ],
  [ 1, 3, 9, 8 ] ]
```
