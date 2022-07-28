const random = require('./random')

const DEFAULT_KEY_SIZE = 64

function getAPIKey(size=DEFAULT_KEY_SIZE) {
    return random.genRandString(size)
}

module.exports = {
    getAPIKey
}
