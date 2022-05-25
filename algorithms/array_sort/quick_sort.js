const quick_sort = async(arr) => {
    if (!arr.length || arr.length === 1) {
        return arr
    }

    const currentInd = Math.floor(arr.length / 2)
    const currentEl = arr[currentInd]

    const less = []
    const more = []

    for (let i = 0; i < arr.length; i++) {
        if (i === currentInd) {
            continue
        }

        const el = arr[i]

        el > currentEl ? more.push(el) : less.push(el)
    }

    return [...await quick_sort(less), currentEl, ...await quick_sort(more)]
}

module.exports = quick_sort