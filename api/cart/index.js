const Mock = require("mockjs");
module.exports = [
    {
        url: "/list",
        method: "get",
        fn: (req, res) => {
            let mock = Mock.mock({
                "cart": {
                    "package|1-3": [
                        {
                            "activity|1": [
                                {
                                    "type": "0" //无活动
                                },
                                {
                                    "type": "1", //单品直降/单品促销
                                    "countdown|0-100.0-2": 100 
                                },
                                {
                                    "type": "2" //单品/多品买赠
                                },
                                {
                                    "type": "3", //单品限购
                                    "num|1-10": 1
                                },
                                {
                                    "type": "4", //阶梯满件减
                                    "status|0-1": 1, //满足
                                    "num|1-10": 1,  //已购件数
                                    "countdown|0-100.2": 100, //已减金额
                                    "text": "满2件减5元，满3件减10元"
                                },
                                {
                                    "type": "5", //满元减
                                    "id|0-100": 1,
                                    "status|0-1": 1, //满足
                                    "limit|200-300.2": 200,  //满多少钱
                                    "countdown|0-100.2": 100, //减金额
                                    "save|1-100.2": 1, //已节省
                                    "purchased|1-100.2": 1, //已购金额
                                    "lack|1-100.2": 1 //还需购买
                                },
                                {
                                    "type": "6", //满元减
                                    "status|0-1": 1, //满足
                                    "countdown|0-100.2": 1 //优惠金额
                                }
                            ],
                            "list|1-4": [
                                {
                                    "id|1-100": 1,
                                    "url": Mock.Random.image('120x100'),
                                    "title": Mock.Random.ctitle(5,12),
                                    "spec|1": [
                                        "满99减10", "限购一件"
                                    ],
                                    "max|0-3": 0,
                                    "price|1-100.2": 1,
                                    "count|1-100.2": 1,
                                    "num|1-5": 1,
                                    "gift": [{
                                        "id|1-100": 1,
                                        "url": Mock.Random.image('120x100'),
                                        "title": Mock.Random.ctitle(5,12),
                                        "spec|1": [
                                            "满99减10", "限购一件"
                                        ],
                                        "max|0-3": 0,
                                        "price|1-100.2": 1,
                                        "count|1-100.2": 1,
                                        "num|1-5": 1,
                                    }]
                                }
                            ]
                        }
                    ],
                    "coupons": {
                        "total|100-300.2": 111,
                        "freight|0-10" : 0,
                        "coupon|0-20": 0,
                        "invoice": false
                    },
                    "invalid|0-3": [
                        {
                            "id|1-100": 1,
                            "url": Mock.Random.image('120x100'),
                            "title": Mock.Random.ctitle(5,12),
                            "spec|1": [
                                "满99减10", "限购一件"
                            ],
                            "price|1-100.2": 1,
                            "count|1-100.2": 1,
                            "num|1-5": 1,
                            "message|1": [
                                "不在配送范围",
                                "商品库存不足"
                            ]
                        }
                    ],
                    "total": {
                        "all|100-200.2": 111,
                        "origin|200-333.2": 211,
                        "count|10-111.2": 10
                    }
                },
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
            res.send(mock);
        }
    }
];