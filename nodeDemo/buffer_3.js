const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(14);
const buf3 = Buffer.alloc(18);

// const totalLength = buf1.length+buf2.length+buf3.length;
// console.log(totalLength);

// //Buffer.concat(用于合并多个Buffer对象)

// const bufA = Buffer.concat([buf1,buf2,buf3],totalLength);
// console.log(bufA.toString());
// console.log(bufA.length);
// const testVar = 1;
// console.log(Buffer.isBuffer(buf1));    //true
// console.log(Buffer.isBuffer(testVar)); //false

//用于决定预分配的、内部Buffer实例池的大小的字节数。这个值可以修改
// console.log(Buffer.poolSize);

const str = "Node.js";
const buf = Buffer.allocUnsafe(str.length);

for(let i=0;i<str.length;i++){
    buf[i] = str.charCodeAt(i);
}

console.log(buf.toString());
