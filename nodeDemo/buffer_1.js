/**
 * buffer 用于处理二进制数据流
 * 实例类似证书数组，大小固定
 * c++ 代码在V8堆外分派物理内存
 * buffer 类在node.js中是一个全局变量，不需要使用require()
 */

 //创建一个长度为10、且用0填充的Buffer。
 const buf1 = Buffer.alloc(10);
 console.log(buf1);

 //创建一个长度为10、且用0x1填充的Buffer
 const buf2 = Buffer.alloc(10,1);
 console.log(buf2);

 //创建一个长度为10、且未初始化的Buffer
 const buf3 = Buffer.allocUnsafe(10);
 console.log(buf3);

 //创建一个包含[0x1,0x2,0x3]的Buffer
 const buf4 = Buffer.from([1,2,3]);
 console.log(buf4);

 //创建一个包含utf-8字节【】的buffer
 const buf5 = Buffer.from('test');
 console.log(buf5);
 console.log(buf5.toString());
 //创建一个包含latin-1字节的Buffer
 const buf6 = Buffer.from('test','latin1')
 console.log(buf6);
 console.log(buf6.toString());