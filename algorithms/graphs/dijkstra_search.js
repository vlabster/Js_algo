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
    let neighbors = {}

    Object.keys(graph).forEach(node => {
        if (node !== start) {
            let value = graph[start][node]
            costs[node] = value || biggestValue
        }
    })

    let node = await findNodeLowerCost(costs, processed)

    while (node) {
        const cost = costs[node]
        neighbors = graph[node]
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor]
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost
            }
        })
        processed.push(node)
        node = await findNodeLowerCost(costs, processed)
    }
    
    return costs
}

module.exports = dijkstra_search