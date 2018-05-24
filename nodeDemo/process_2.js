//process.abort()
//console.log(`${process.arch}`);
//保存node.js启动时传入的argv[0]参数值的第一个副本。
//console.log(process.argv0);  node

// process.argv.forEach((val,index) => {
//     console.log(`${index}:${val}`);
// });

//返回一个Javascript对象。此对象描述了用于编译当前Node.js执行程序时涉及的配置项信息
//console.log(process.config);

// const startUsage = process.cpuUsage();
// const now = Date.now();
// while (Date.now() - now < 500);
// console.log(process.cpuUsage(startUsage));

//process.cwd 返回node.js进程当前工作的目录
//console.log(process.cwd());

//process.emitWarning  // 发出警告
// process.emitWarning('SomeThing happened',{
//     code:'MY_WARNING',
//     detail:'this is error'
// })

// console.log('通过传递warning事件');
// process.on('warning',(warning)=>{
//     console.log('警告名称：'+warning.name);
//     console.log('警告的详请'+warning.message);
//     console.log('警告的标识'+warning.code);
//     console.log('警告的路径'+warning.stack)
//     console.log('警告的描述'+warning.detail);
// });

//process.env  属性返回一个包含用户环境信息的对象
// console.log(process.env);
//增加属性到用户环境信息
// process.env.foo = 'bar';
// console.log(process.env.foo);
//在process.env中新增一个属性，会将属性转化成字符串
// process.env.test = null;
// console.log(typeof(process.env.test));

// process.env.test = 'undefinded';
// console.log(process.env.test);
// //使用delete从process.env中删除属性
// delete process.env.test;
// console.log(process.env.test);

//process.execArgv  属性返回当node.js进程被启动时，nodejs特定的命令行选项
//这些选项在process.argv属性返回的数组中不会出现

//Node.js  和其依赖的版本信息
//console.log(process.versions);

//Node.js 版本信息
//console.log(process.version);

//返回Node.js 运行时间秒长
// console.log(process.uptime());

// console.log(process.title);

//要求用户输入两个数值，将和显示到终端
// var num1,num2
// process.stdout.write('请输入num1的值');
// //监听用户的输入
// process.stdin.on('data',function(chunk){
//     if(!num1){
//         num1 = Number(chunk);
//         //想屏幕输出，提示信息，要求输入num2
//         process.stdout.write('请输入num2的值');
//     } else {
//         num2 = Number(chunk);
//         process.stdout.write('结果是：'+(num1+num2));
//     }
// })

//process.memoryUsage() 方法返回nodejs进程的内存使用情况的对象
// console.log(process.memoryUsage())

// console.log(process.pid);

console.log(process.platform);