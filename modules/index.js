const { getOpenSearch } = require("./getOpensearch");
const { kal } = require("./kal");
const { sum } = require("./sum");

exports.mapping = [
    {
        "name" : "sum",
        "func" : sum
    },
    {
        "name":"getopensearch",
        "func": getOpenSearch
    },
    {
        "name":"kal",
        "func": kal
    }
]