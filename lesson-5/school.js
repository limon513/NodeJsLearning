const EventEmitter = require('node:events');

class School extends EventEmitter{
    startClass(){
        console.log('Class has started');
        setTimeout(()=>{
            this.emit('bellrang',{
                period:'last',
                sir:'pagla'
            });
        },2000);
    }
}

module.exports = School;
