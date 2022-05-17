const random_int = require('./random_int')

const array_gen = async(len) => {
    const arr = []

    for (let i = 0; i < len; i++) {
        arr.push(await random_int(0, len * 2))
    }

    return arr
}

module.exports = array_gen