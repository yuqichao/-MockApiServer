## MockAPI Server Guide

### 一、参考
[MockJs Api: https://github.com/nuysoft/Mock/wiki/Syntax-Specification](https://github.com/nuysoft/Mock/wiki/Syntax-Specification)

[MockJs 示例: http://mockjs.com/examples.html](http://mockjs.com/examples.html)

### 二、用法

#### 1. 启动服务

    npm i
    npm run start

#### 2. 目录介绍

`api`目录为所有接口根目录：

    | api
    |--cart // 购物车模块
    |--|--index.js  // 购物车模块路由入口
    |--order // 订单模块
    |--|--index.js  // 订单模块路由入口
    |-- ...  // 其他业务模块
    |--|--index.js  // 其他业务模块路由入口
    |--index.js // 接口集合

`api/index.js`文件会自动找到每个业务目录下的`index.js`，读取里面定义的接口，然后生成路由。

#### 3. 定义方式
   
每个业务模块下的`index.js`里面定义的该模块需要模拟的接口：

    const mock = require("mockjs"); // 生成模拟数据
    module.exports = [
        {
            url: "/",
            method: "get",
            fn: (req, res) => {
                /* TO DO */
            }
        }
        ...
    ];