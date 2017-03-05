module.exports = function (source, callback) {
  var permutationResult = []

  function pickEach (result, arr) {
    if (arr.length === 0) {
      if (typeof callback === 'function') callback(result)
      else permutationResult.push(result)
      return
    }
    for (var i = 0; i < arr.length; i++) {
      var _arr = arr.concat()
      var picked = _arr.splice(i, 1)
      pickEach(result.concat(picked), _arr)
    }
  }

  pickEach([], source)
  if (typeof callback === 'function') return
  return permutationResult
}
