const selection_sort = async(arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minEl = i

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minEl]) {
                minEl = j
            }
        }

        let temp = arr[minEl]
        arr[minEl] = arr[i]
        arr[i] = temp
    }

    return arr
}

module.exports = selection_sort