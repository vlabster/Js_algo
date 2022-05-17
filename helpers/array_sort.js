const array_sort = async(arr) => {
    return arr.sort(function(a, b) {
        return a - b
    })
}

module.exports = array_sort