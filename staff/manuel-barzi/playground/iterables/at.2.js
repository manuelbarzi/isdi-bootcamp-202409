var at = function (iterable, index) {
    /* CASE positive index
    extract element from iterable at index
    return extracted element
    */

    /* CASE negative index
    calculate index adding negative index to iterable length
    extract element from iterable at calculated index
    return extracted element
    */

    if (index >= 0) {
        var element = iterable[index]

        return element
    } else {
        var newIndex = index + iterable.length

        var element = iterable[newIndex]

        return element
    }
}

console.log('TEST at')

console.log('CASE get number at index 3 in nums')

var nums = { 0: 100, 1: 200, 2: 300, 3: 400, 4: 500, length: 5 }

var num = at(nums, 3)
console.log(num)
// 400

console.log('CASE get number at index -3 in nums')

var nums = { 0: 100, 1: 200, 2: 300, 3: 400, 4: 500, length: 5 }

var num = at(nums, -3)
console.log(num)
// 300