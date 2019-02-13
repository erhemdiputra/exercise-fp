var list = [{
        name: "Bob",
        salary: 40
    },
    {
        name: "Tony",
        salary: 30
    },
    {
        name: "Jessica",
        salary: 20
    },
    {
        name: "Melanie",
        salary: 45
    },
    {
        name: "Jason",
        salary: 35
    }
]

var result = list.reduce(function (sum, obj) {
    return sum + obj.salary
}, 0)

console.log(result);