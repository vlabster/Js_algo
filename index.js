const { array_gen, random_int, array_sort } = require('./helpers')
const { 
    binary_search,
    selection_sort, 
    bubble_sort,
    quick_sort,
    breadth_search,
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

    console.log('Bubble sort')

    const bubbleRandom = await random_int(1, 20)
    const bubbleArr = await array_gen(bubbleRandom)

    console.log(bubbleRandom)
    console.log(bubbleArr)

    console.log(await bubble_sort(bubbleArr))

    console.log('Quick sort')

    const quickRandom = await random_int(1, 20)
    const quickArr = await array_gen(quickRandom)

    console.log(quickRandom)
    console.log(quickArr)

    console.log(await quick_sort(quickArr))

    const graph_s_p = []
    graph_s_p.a = ['b', 'c']
    graph_s_p.b = ['d']
    graph_s_p.c = ['e', 'f']
    graph_s_p.d = ['e', 'g']
    graph_s_p.f = ['g']

    console.log(await breadth_search(graph_s_p, 'a', 'g'))
}()