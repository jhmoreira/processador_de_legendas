
module.exports = rows => {
    return new Promise((resolver, reject)=> {
        try {  const words =rows.filter(filterRow)
            .map(removePunctuation)
           .map(tirarSimbolo)
            .reduce(mergeRow )

            .split(' ')
            .map(word=>word.toLowerCase())
            .map(word=>word.replace('"<i>',''))
                resolver(words)
        }catch(e) {
            reject(e)
        }
    })
}

function filterRow(row){
    const notNumber = !parseInt(row.trim())
    const notEmpty = !!row.trim()
    const notInterval = !row.includes('-->')
    return notNumber && notEmpty && notInterval
}

const removePunctuation = row =>row.replace(/[,?!.-]/g, "")
const tirarSimbolo= row => row.replace(/(<[^>]+)> /ig,'').trim()
const mergeRow = (text, row)=> `${text} ${row}`