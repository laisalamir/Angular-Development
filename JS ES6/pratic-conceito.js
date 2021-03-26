// FETCH tem a intenção de fazer requisição utilizando promise.
//AWAIT pode ser usado quando queremos esperar uma promise se resolver.
//eventEmitter

const EventEmitter = require('events');

class Users extends EventEmitter{
    Userlogged(data){
        this.emit('Users logged', data);
    }
}
const users = new Users();
// once = apanas uma vez
users.once('User logged', data => {
    console.log(data);
});

users.on('User logged', data => {
    console.log(data);
});


users.Userlogged({ user: 'Laisa lamir'});
users.Userlogged({ user: 'Camila Silva'});
/******************* */

// EventTarget