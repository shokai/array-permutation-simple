var assert = require('chai').assert
var permutation = require('../')

describe('array-permutation', function () {
  describe('2 elements array', function () {
    it('return all permutations of array elements', function () {
      var result = permutation([5, 8])
      assert.deepEqual(result, [ [ 5, 8 ], [ 8, 5 ] ])
    })
  })

  describe('3 elements array', function () {
    it('return all permutations of array elements', function () {
      var result = permutation([1,3,5])
      assert.deepEqual(result, [ [ 1, 3, 5 ],
                                 [ 1, 5, 3 ],
                                 [ 3, 1, 5 ],
                                 [ 3, 5, 1 ],
                                 [ 5, 1, 3 ],
                                 [ 5, 3, 1 ] ])
    })
  })

  describe('4 elements array', function () {
    it('return all permutations of array elements', function () {
      var result = permutation([ 8, 9, 3, 1 ])
      assert.deepEqual(result, [ [ 8, 9, 3, 1 ],
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
                                 [ 1, 3, 9, 8 ] ])
    })
  })


})
