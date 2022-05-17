const { array_gen, random_int, array_sort } = require('./helpers')
const { 
    binary_search,
    selection_sort, 
} = require('./algorithms')

!async function() {
    console.log('Binary search')

    const binaryRandom = await random_int(1, 20)
    const binaryArr = await array_sort(await array_gen(binaryRandom))

    console.log(binaryArr)
    console.log(binaryRandom)

    console.log(await binary_search(binaryArr, binaryRandom))

    console.log('Selection sort')

    const selectionRandom = await random_int(1, 20)
    const selectionArr = await array_gen(selectionRandom)

    console.log(selectionRandom)
    console.log(selectionArr)

    console.log(await selection_sort(selectionArr))
}()