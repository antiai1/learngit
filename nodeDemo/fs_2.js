const fs = require('fs');
//异步的删除文件
// fs.unlink('./test.txt',(err)=>{
//     if(err) throw err;
//     console.log('成功删除文件');
// })
//同步的删除文件
// fs.unlink('./text2.txt');
// console.log('同步删除文件成功！');

//异步的方法不能保证执行的顺序，最好的办法就是把毁掉链起来
// fs.rename('./hello.txt','./world.txt',(err)=>{
//     if(err) throw err;
//     fs.stat('./world.txt',(err,stats)=>{
//         console.log(`文件的属性：${JSON.stringify(stats)}`);
//     })
// })

//change事件
// fs.watch('./world.txt',(eventType,filename)=>{
//     if(filename){
//         console.log(filename);
//         console.log(eventType);
//     }
// })

/*
    *fs.appendFile()
    *异步地追加数据到一个文件，如果文件不存在，则擦护过年见一个文件
    * data是字符串也可以是一个buffer
    */
//    fs.appendFile('./world.txt','data to append',(err)=>{
//         if(err) throw err;
//         console.log('success!');
//    })
    // fs.appendFile('./hello.txt','我想回新疆',(err)=>{
    //     if(err) throw err;
    //     console.log('success!');
    // })

    // fs.copyFile('./hello.txt','destination.txt',(err)=>{
    //     if(err) throw err;
    //     console.log('success!');
    // })
    const { COPYFILE_EXCL } = fs.constants;

// 使用 COPYFILE_EXCL ，如果 destination.txt 文件存在，操作将失败。
fs.copyFile('./hello.txt', './destination.txt', COPYFILE_EXCL,(err)=>{
    if(err) throw err;
    console.log('success');
});