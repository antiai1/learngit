const path = require('path');

//path.resolve 解析地址
//console.log(path.resolve('./'));

//获取文件的名称  不同平台会有不同的显示风格
//console.log(path.basename('C:\\temp\\myfile.html'));

//在window  和POSIX  中显示path相同的属性
//console.log(path.win32.basename('C:\\temp\\myfile.html'));

//path.delimiter  路径的风格符
//console.log(path.delimiter);
//console.log(process.env.PATH.split(path.delimiter));

//path.dirname   返回一个path的目录名
//console.log(path.dirname('/foo/bar/baz/asdf/quux'));
//console.log(path.extname('/foo/bar/baz/asdf/quux.json'));

//解析地址parse   format 
//console.log(path.parse('/foo/bar/baz/asdf/quux'));

//path.isAbsolute() 判定path是否为一个绝对路径
//console.log(path.isAbsolute('/foo/bar'));//true
//console.log(path.isAbsolute('qux/'));//false

//path.join([])   拼接路径
//console.log(path.join('/foo','bar','baz/asdf','quux'));

//path.normalize()  用于规范化给定的path，并且解析“..”和“.”
//console.log(path.normalize('/foo/bar//baz/asdf/quux/..'));
//console.log(path.win32.normalize('/foo/bar//baz/asdf/quux/..'));

//path.relative  方法返回从from到to的相对路径（基于当前的工作目录）
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));