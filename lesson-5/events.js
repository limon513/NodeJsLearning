const school = require('./school')

const schoolObj = new school();

schoolObj.on('bellrang',(argss)=>{
    console.log(`${argss.period} class ended of sir ${argss.sir}, Run!!!`);
});

schoolObj.startClass();

