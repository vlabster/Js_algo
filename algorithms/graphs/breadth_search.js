// Поиск в ширину, или проверка существования пути из точки a в точку b

const breadth_search = async(graph, start, end) => {
    let queue = []
    queue.push(start)

    while (queue.length > 0) {
        const current = queue.shift()

        if (!graph[current]) {
            graph[current] = []
        }

        if (graph[current].includes(end)) {
            return true
        } else {
            queue = [...queue, ...graph[current]]
        }
    }

    return false
}

module.exports = breadth_search