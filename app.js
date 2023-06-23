const EventEmitter = require('node:events')
const emitter = new EventEmitter()

// Register a listener
emitter.on('messageLogged', function() {
    console.log('Listener called')
})

// Raise an event
emitter.emit('messageLogged')

