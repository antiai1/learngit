// //返回一个表示操作系统CPU架构的字符串
// console.log(process.arch);

// //这个数组包含nodejs进程时的命令行参数
// //第一个参数：node.exe运行程序的路径
// //第二个参数：nodejs当前运行的文件
// process.argv.forEach((val,index) => {
//     console.log(`${index}:${val}`);
// });

// //保存Node.js启动时传入的argv[0]参数值的一个只读副本
// console.log(process.argv[0]);  //返回路径
// console.log(process.argv0);    //返回node

// //process.cwd()返回Node.js进程当前的工作目录
// console.log(process.cwd());

//process.chdir  变更Node.js进程当前的工作目录
// try{
//     process.chdir('./../nodeDemo1');
//     console.log(`变更后的地址：${process.cwd()}`);
// } catch(err) {
//     console.log(`chdir ${err}`);
// }

//process.emitWarning()方法用于 发出定制的或应用特定的进程警告
//process.emitWarning()方法可用于发出定制或应用特定的进程警告。
//可以通过给process.on('warning')事件增加处理器，监听这些警告
// process.emitWarning('something happenfed',{
//     code :'10001',
//     detail:'系统级别的错误！'
// })

// process.on('warning',(warning)=>{
//     console.warn(warning.name);
//     console.warn(warning.message);
//     console.warn(warning.code);
//     console.warn(warning.stack);
//     console.warn(warning.detail);
// })

//警告应该在每个进程中做多显示一次
// function emitMyWarning() {
//     if (!emitMyWarning.warned) {
//       emitMyWarning.warned = true;
//       process.emitWarning('Only warn once!');
//     }
//   }
//   emitMyWarning();
//   emitMyWarning();

//console.log(process.env.Path.split(';'));
//返回启动Node.js进程的可执行文件所在的绝对路径
//console.log(process.execPath);
// process.exit(1);
  

//console.log(process.versions);
//console.log(process.version);
// console.log(process.uptime());
// console.log(process.title);
//console.log(process.throwDeprecation);
// console.log(`父进程的ID：${process.ppid}`);
// console.log(`子进程的ID：${process.pid}`);
