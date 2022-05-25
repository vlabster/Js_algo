// Ищем самые короткие (по весам) пути от указанной точки до остальных
const biggestValue = 10000000000

const findNodeLowerCost = async(costs, processed) => {
    let lowerCost = biggestValue
    let lowerNode
    Object.keys(costs).forEach(node => {
        let cost = costs[node]
        if (cost < lowerCost && !processed.includes(node)) {
            lowerCost = cost
            lowerNode = node
        }
    })

    return lowerNode
}

const dijkstra_search = async (graph, start) => {
    const costs = {}
    const processed = []
    let neightbords = {}

    Object.keys(graph).forEach(node => {
        if (node !== start) {
            let value = graph[start][node]
            costs[node] = value || biggestValue
        }
    })

    let node = await findNodeLowerCost(costs, processed)

    while (node) {
        const cost = costs[node]
        neightbords = graph[node]
        Object.keys(neightbords).forEach(neightbord => {
            let newCost = cost + neightbords[neightbord]
            if (newCost < costs[neightbord]) {
                costs[neightbord] = newCost
            }
        })
        processed.push(node)
        node = await findNodeLowerCost(costs, processed)
    }
    
    return costs
}

module.exports = dijkstra_search