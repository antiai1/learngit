//let没有变量提升的特性
// console.log(a);
// var a= 10;

// console.log(b);
// let b =20;

//const  定义的变量不能再次改变
// const a=1;
// a=2;

//const 定义的变量为对象时，可以改变对象的值，但是不能改变对象的内存地址
// const a= {a:1};
// a.a=2;    //可以
// a={b:1}   //不可以
// console.log(a);


//给函数设置默认值的方法
// function sum(flag=true){
//     if(flag){
//         console.log('flag==true');
//     }else{
//         console.log('flag==false');
//     }
// }

// sum();
// sum(false)

//数组的解构
// var [a,b] = [1];
// console.log(`a:${a}`);
// console.log(`b:${b}`);

//字符串的解构
// var [x,y,z]='VUEA';
// console.log(`x:${x},y:${y},z:${z}`);

//对象的解构
// var obj={
//     a:'a',
//     b:'b'
// }
// var {b,a}=obj;
// console.log(a);
// console.log(b);


//promise 函数
//用于解决callback回调
// let checkLogin = function(){
//     return new Promise(function(resolve,reject){
//         let flag = document.cookie.indexOf("userId")>-1?true:false;

//         if(flag = true){
//             resolve({
//                 status:0,
//                 result:'login success'
//             })
//         }else{
//             reject('error')
//         }
//     })
// }

// let getUserInfo = (num)=>{
//     return new Promise((resolve,reject)=>{
//         let userInfo ={
//             userId:num
//         }
//         resolve(userInfo);
//     })
// }

// //一次性调用函数
// Promise.all([checkLogin(),getUserInfo('2012517009')]).then(([res1,res2])=>{
//     console.log(`result1:${res1.result},result2:${res2.userId}`)
// })
//多层嵌套调用、
// function getUserInfo(num){
//     return new Promise((resolve,reject)=>{
//         let userInfo = {
//             userId:num
//         }
//         resolve(userInfo)
//     })
// }
//调用定义的promise函数
// checkLogin().then((res)=>{
//     if(res.status == 0){
//         console.log('login success');
//         return getUserInfo()
//     }
// }).catch((error)=>{
//     console.log(`error:${error}`);
// }).then((res1)=>{
//     console.log(`userId:${res1.userId}`);
// });

// checkLogin().then((res)=>{
//     if(res.status == 0){
//         console.log(res.result);
//     }
//     return getUserInfo('2012517009');
// }).then((res1)=>{
//     console.log(`userId:${res1.userId}`);
//     return getUserInfo('2012517010');
// }).then((res2)=>{
//     console.log(`userId:${res2.userId}`);
// })
// var a=null;
// checkLogin().then((res)=>{
//     if(res.status == 0){
//         console.log(res.result);
//     }
//     let a =null;
//     return a='2012517009'
// }).then((res1)=>{
//     return getUserInfo(res);
// }).then((res2)=>{
//     console.log(res2)
// });
// import * as util from './utils'
// console.log(util.sum(1,2));