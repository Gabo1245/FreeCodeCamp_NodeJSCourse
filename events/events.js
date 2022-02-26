const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (id, other) => {
    console.log(`data received!: ${id}, ${other} `)
})

//customEmitter.on('response', () => {
//    console.log('different console.log to test something ')
//})

const random = Math.round(Math.random()*1000)

customEmitter.emit('response', random, 'Buenas')

