const fs = require('fs');

//异步访问文件
const result = fs.readFile('./fs_11.js',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})


//这条语句首先被调用了
console.log(result);
