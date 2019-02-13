var list = [{
        name: "Bob",
        score: 40
    },
    {
        name: "Tony",
        score: 30
    },
    {
        name: "Jessica",
        score: 20
    },
    {
        name: "Melanie",
        score: 45
    },
    {
        name: "Jason",
        score: 35
    }
]

list = list.map(function (obj) {
    return obj.score + 40
})

console.log(list)