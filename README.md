# array-permutation-simple

return all permutations of array elements

- https://github.com/shokai/array-permutation-simple
- https://www.npmjs.com/package/array-permutation-simple

[![CircleCI](https://circleci.com/gh/shokai/array-permutation-simple.svg?style=svg)](https://circleci.com/gh/shokai/array-permutation)


## Usage

```js
var permutation = require('array-permutation-simple')

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


### callback

```js
permutation([ 'a', 's', 'd', 'f' ], function (arr) {
  console.log(arr)
})
```

```
[ 'a', 's', 'd', 'f' ]
[ 'a', 's', 'f', 'd' ]
[ 'a', 'd', 's', 'f' ]
[ 'a', 'd', 'f', 's' ]
[ 'a', 'f', 's', 'd' ]
[ 'a', 'f', 'd', 's' ]
[ 's', 'a', 'd', 'f' ]
[ 's', 'a', 'f', 'd' ]
[ 's', 'd', 'a', 'f' ]
[ 's', 'd', 'f', 'a' ]
[ 's', 'f', 'a', 'd' ]
[ 's', 'f', 'd', 'a' ]
[ 'd', 'a', 's', 'f' ]
[ 'd', 'a', 'f', 's' ]
[ 'd', 's', 'a', 'f' ]
[ 'd', 's', 'f', 'a' ]
[ 'd', 'f', 'a', 's' ]
[ 'd', 'f', 's', 'a' ]
[ 'f', 'a', 's', 'd' ]
[ 'f', 'a', 'd', 's' ]
[ 'f', 's', 'a', 'd' ]
[ 'f', 's', 'd', 'a' ]
[ 'f', 'd', 'a', 's' ]
[ 'f', 'd', 's', 'a' ]
```