## 单入口文件

## 关于wepacl.config.js

1. webpack是用NODE.js写的 ,所以，语法要符合node规范

## 常见函数与对象
1. path对象     获取--->var path = require('path')

2. path.resolve([ ...paths ])
```
path.resolve('/foo/bar', './baz');
--> 输出 e:\foo\bar\baz

path.resolve('./foo/bar', './baz')
--> 输出 e:\webpack_tutorial\foo\bar\baz

path.resolve('./foo/bar', '/baz')
--> 输出 e:\baz

path.resolve('foo/bar', '/baz','ck/data')
--> 输出 e:\baz\ck\data

path.resolve('foo/bar', '.baz/home','../ck/data')
--> 输出  e:\foo\bar\baz\ck\data
```
3. 结论：
    若是./xxx或xxx 的方式，则是在当前path下追加xxx目录
    若是/xxxx方式，则是在当前根目录下追加xxx目录

1. __dirname  获取当前文件所在的绝对路径
2. [关于exports与module.exports区别]https://www.jianshu.com/p/c9b29520fc6e
3. `console.log(module.exports == exports)  -->true`

