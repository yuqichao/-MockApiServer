const fs = require("fs");
const path = require("path");
const router = require("express").Router();

// 获取文件路径
const resolve = (relate) => {
    return path.resolve(fs.realpathSync(process.cwd()), relate);
};

// 绑定到路由对象上
function addRouter(dir, routes) {
    routes.forEach(n => {
        router[n.method.toLowerCase() || "get"]("/" + dir + n.url, n.fn);
    });
};

// 读取目录下模块文件夹
(function () {
    const dirs = fs.readdirSync("./api");
    dirs.forEach(n => {
        const state = fs.statSync(resolve("./api/" + n));
        if(state.isDirectory()) {
            addRouter(n, require(resolve("./api/" + n) + "/index.js"));
        }
    });
})();

module.exports = router;