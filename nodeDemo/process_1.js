const {argv,argv0,execArgv,execPath} = process;

/*argv   属性返回一个数组，这个数组包含启动node.js进程时的命令行参数.
*第一个元素是process.execPath.
*第二个元素为当前执行JavaScript文件路径
*剩余的元素为其他命令行参数

argv.forEach((val,index) => {
    console.log(`${index}:${val}`);
});
*/

/*
 * argv0,保存nodejs启动时传入的argv[0]参数值的一份制度副本
 * console.log(argv0);   node
 * 
*/
/**
 * process.execPath 
 * 返回启动node.js进程的可执行文件所在的绝对路径
 * console.log(process.execPath);
 * console.log(process.execArgv);
 */

 /*
    返回一个包含用户环境信息的对象
    process.env
    console.log(process.env);
 */
  


