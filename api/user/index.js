const Mock = require("mockjs");
module.exports = [
    {
        url: "/info",
        method: "get",
        fn: (req, res) => {
            let data = Mock.mock({
                "uid|1-200": 1,
                "coupons|3": [
                    "满100减10"
                ],
                "addr": Mock.Random.ctitle(4,14),
                "activity": {
                    "url": Mock.Random.image("750x200"),
                    "id|0-200": 1
                }
            });
            res.send(data);
        }
    }
];