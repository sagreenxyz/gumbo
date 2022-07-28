const arrayChars = () => {
    // build array of characters

    // initialize pointers to ASCII values for 'A' and 'a', respectively
    let uppersASCII = 'A'.charCodeAt(0)
    let lowersASCII = 'a'.charCodeAt(0)

    let arrayUppers = []
    let arrayLowers = []

    // build out arrays of characters A-Z for arrayUppers and a-z for arrayLowers
    let i = 0
    while (i < 26) {
        arrayUppers.push(String.fromCharCode(uppersASCII++))
        arrayLowers.push(String.fromCharCode(lowersASCII++))
        i++
    }

    // return one, combined array
    return [...arrayUppers, ...arrayLowers]

}

const randFromArray = (inArray) => {
    // return uniform random selection from inArray
    return inArray[Math.floor(Math.random() * inArray.length)]
}

function genRandString(size) {
    let result = ''
    let i = 0
    while (i < size) {
        // pad result with [size] number of uniformly-selected characters from array of [A-Za-z]
        result += randFromArray(arrayChars())
        i++
    }

    return result

}

module.exports = {
    genRandString
}
