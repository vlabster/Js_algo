const binary_search = async(arr, el) => {
    let start = 0
    let end = arr.length
    let isFound = false
    let middle
    let pos = -1
    
    while (!isFound && start <= end) {
        middle = Math.floor((start + end) / 2)

        if (arr[middle] === el) {
            pos = middle
            isFound = true
            return pos
        }

        el > arr[middle] ? start = middle + 1 : end = middle - 1
    }

    return pos
}

module.exports = binary_search