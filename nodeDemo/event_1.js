const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter;
// myEmitter.on('event',()=>{
//     console.log('触发了一个事件！');
// })
// myEmitter.emit('event');
//标准的this关键字会被设置指向监听器附近的EventEmitter
// myEmitter.on('event',function(a,b){
//     console.log(a,b,this)
// })
// myEmitter.emit('event','a','b');

// myEmitter.on('event',(a,b)=>{
//     console.log(a,b,this)
// })
// myEmitter.emit('event','a','b');

//只处理事件一次
// let m = 0;
// myEmitter.once('event',()=>{
//     console.log(++m);
// });

// myEmitter.emit('event');
// myEmitter.emit('event');
// myEmitter.emit('event');
// myEmitter.emit('event');

// myEmitter.on('error',(err)=>{
//     console.error('有错误！');
// })
// myEmitter.emit('error',new Error('whoops'));