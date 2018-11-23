const mock = require("mockjs");
module.exports = [
    {
        url: "/",
        method: "get",
        fn: (req, res) => {
            res.send("order")
        }
    }
];