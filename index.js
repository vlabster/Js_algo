const { array_gen, random_int, array_sort } = require('./helpers')
const { binary_search } = require('./algorithms')

!async function() {
    console.log('Binary search')

    const binaryRandom = await random_int(1, 20)
    const binaryArr = await array_sort(await array_gen(binaryRandom))

    console.log(binaryArr)
    console.log(binaryRandom)

    console.log(await binary_search(binaryArr, binaryRandom))
}()