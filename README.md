## 快速入门

[lesson01从零入门webpack](https://github.com/littleboyck/webpack-tutorial/tree/master/webpack-lesson01)

***

## webpack核心概念
1. entryPoint入口
   * 定义：告诉webpack从哪个模块开始构件依赖图
   * webpack.config.js输入如下内容
   <div >
   </div>
   ```node  
    module.exports = {
        entry: './path/to/my/entry/file.js'
    };
    ```