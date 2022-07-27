const arrayChars = () => {

    // build array of characters
    let uppersASCII = 'A'.charCodeAt(0)
    let lowersASCII = 'a'.charCodeAt(0)

    let arrayUppers = []
    let arrayLowers = []

    let i = 0
    while (i < 26) {
        arrayUppers.push(String.fromCharCode(uppersASCII++))
        arrayLowers.push(String.fromCharCode(lowersASCII++))
        i++
    }

    return arrayUppers.concat(arrayLowers)

}

const randFromArray = (inArray) => {
    return inArray[Math.floor(Math.random() * inArray.length)]
}

function genRandString(size) {
    let result = ''
    let i = 0
    while (i < size) {
        result += randFromArray(arrayChars())
        i++
    }

    return result

}

///////////////////////

function doSomething(callback) {
    callback()
    return
}

module.exports = {
    genRandString,
    doSomething
}