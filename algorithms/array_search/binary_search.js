const binary_search = async(arr, el) => {
    let start = 0
    let end = arr.length

    let middle
    
    while (start <= end) {
        middle = Math.floor((start + end) / 2)

        if (arr[middle] === el) {
            return middle
        }

        el > arr[middle] ? start = middle + 1 : end = middle - 1
    }

    return -1
}

module.exports = binary_search