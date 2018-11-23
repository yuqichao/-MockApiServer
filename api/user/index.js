const mock = require("mockjs");
module.exports = [
    {
        url: "/",
        method: "get",
        fn: (req, res) => {
            res.send("order")
        }
    },
    {
        url: "/login",
        method: "get",
        fn: (req, res) => {
            let data = mock.mock({
                'list|1-10': [{
                    'id|+1': 1
                }]
            });
            res.send(data);
        }
    }
];