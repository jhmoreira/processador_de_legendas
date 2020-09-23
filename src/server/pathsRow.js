const fs = require('fs')
module.exports = paths => {
    return new Promise((resolver, reject)=> {
        try {
            const row = paths
                .map(path => fs.readFileSync(path).toString('utf-8'))
                .reduce((text, fileText)=>`${text}\n ${fileText}`)
                .split('\n')

                resolver(row)
        }catch(e) {
            reject(e)
        }
    })
}