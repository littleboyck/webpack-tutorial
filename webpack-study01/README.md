# webpack从零到入门

## 第一章

## 创建一个简单的webpack工程项目

**第一步:**
>[下载Node.js](http://nodejs.cn/download/)
>*若已安装跳过第一步*

**第二步：**
新建名为`webpack-test`文件夹。例如：E:\webpack-test , 输入如下命令
> `ctrl + R`&nbsp;&nbsp;&nbsp;&nbsp;//打开cmd
>> E:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//切换到E盘  
>>> mkdir webpack-test&nbsp;&nbsp;//创建webpack-test文件夹
>>>> cd E:\webpack-test&nbsp;&nbsp;//进入此文件夹中
>>>>> **npm init** &nbsp;&nbsp;&nbsp;//初始化项目，用于管理项目文件。此时会自动创建package.json文件

**第三步：**
下载如下依赖 webpack 和 webpack-cli
> npm i webpack webpack-cli -save-dev       //下载完成后会自动生成一个node_modules文件夹

**第四步：**
> 在webpack-test中新建文件夹src , 必须是这个名字

**第五步：**
> 在src中新建index.js   //名字必须是index
> index.js内容如下：
```
console.log("hello webpack !!")
```

**最后打包src中的index.js**
> webpack [--mode development/production]

此时，会自动生成一个dist文件，dist会有一个main.js    
至此，一个简单的webpack工程就创建完了，你学会了嘛？

### 喜欢我可以给我留言
我的邮箱：littleboyck721@gmail.com

