//setImmediate 把调用追加到下一次线程调用的前面
setImmediate(()=>{
    console.log('setImmediate');
});


setTimeout(()=>{
    console.log('setTimeout');
},0)

//process.nextTick  把函数的调用追加到当前进程的末尾
process.nextTick(()=>{
    console.log('nextTick outer');
    process.nextTick(()=>{
        console.log('nextTick innner');
    });
});