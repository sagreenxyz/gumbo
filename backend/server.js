const random = require('./utils/random')

console.log(random.genRandString(64))

//////////////////

function somethingToDo() {
    console.log('doing something to do')
}

random.doSomething(somethingToDo)
