const os = require('os')

//info del usuario actual
const user = os.userInfo()
console.log(user)

//method devuelve el tiempo de sistema en segundos
console.log(`el tiempo de sistema es ${os.uptime()} segundos`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)