const Mock = require("mockjs");
module.exports = [
    {
        url: "/keyword",
        method: "get",
        fn: (req, res) => {
            let data = Mock.mock([ Mock.Random.ctitle(1, 10) ]);
            res.send(data);
        }
    },
    {
        url: "/key",
        method: "get",
        fn: (req, res) => {
            let data = Mock.mock([ Mock.Random.ctitle(1, 10), Mock.Random.ctitle(1, 10), Mock.Random.ctitle(1, 10) ]);
            res.send(data);
        }
    },
    {
        url: "/result",
        method: "get",
        fn: (req, res) => {
            let data = Mock.mock({
                'list': [],
                "recommend|4": [
                    {
                        "id|1-100": 1,
                        "url": Mock.Random.image('180x150'),
                        "title": Mock.Random.ctitle(5,12),
                        "spec|1": [
                            "满99减10", "限购一件"
                        ],
                        "price|1-100.2": 1,
                        "count|1-100.2": 1
                    }
                ]
            });
            res.send(data);
        }
    }
];