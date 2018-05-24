// const buf = Buffer.from('hello  world','ascii');
// console.log(buf);

// //将每个字节编码为两个十六进制字符
// console.log(buf.toString('hex'));

// //Base64 编码
// console.log(buf.toString('base64'));

// //Buffer 与ES6迭代器
// const buf1 = Buffer.from([1,2,3]);
// for(const b of buf1){
//     console.log(b);
// }

// //使用Buffer.allocUnsafe()创建不安全的Buffer对象
// const buf2 = Buffer.allocUnsafe(10);
// console.log(buf2);

// buf2.fill(0);

// console.log(buf2);

// //在开发者可能需要在不确定的时间段从内存池保留一小块内存的情况下，
// //使用 Buffer.allocUnsafeSlow() 创建一个非池的 Buffer 实例然后拷贝出相关的位元是合适的做法

// //需要保留一小块内存块
// const store = [];

// socket.on('readable', () => {
//     const data = socket.read();
  
//     // 为保留的数据分配内存
//     const sb = Buffer.allocUnsafeSlow(10);
  
//     // 拷贝数据进新分配的内存
//     data.copy(sb, 0, 0, 10);
  
//     store.push(sb);
//   });

// console.log(store);

//Buffer.byteLength  返回字符串实际的字节长度
//一个中文在nodejs中占3个字节
// console.log(Buffer.byteLength('田爱国'));

const buf1 = Buffer.from('1234');
const buf2 = Buffer.from('0123');
const arr = [buf1,buf2];
console.log(arr.sort(Buffer.compare));