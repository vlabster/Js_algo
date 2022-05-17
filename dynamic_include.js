const fs = require('fs')
const path = require('path')

// TODO: добавить подключение только js файлов
const dynamic_include = (dirname, filename) => {
    const readDirResult = fs.readdirSync(dirname)
    const currentFilename = path.basename(filename)

    const imports = {}

    readDirResult.forEach(el => {
        const elPath = path.join(dirname, el)

        if (fs.statSync(elPath).isFile() && el !== currentFilename) {
            imports[path.parse(el).name] = require(elPath)
        }
    })

    return imports
}

module.exports = dynamic_include


