
module.exports = words => {
    return new Promise((resolver, reject) => {
        try {
            const kollection = words.reduce((obj, word) => {
                if (obj[word]) {
                    obj[word] = obj[word] + 1
                } else {
                    obj[word] = 1
                }
                return obj
            }, {})
            const kollections = Object
                .keys(kollection)
                .map(key => ({ name: key, amount: kollection[key] })).sort((w1, w) => w.amount - w1.amount)

            resolver(kollections)
        } catch (e) {
            reject(e)
        }
    })
}