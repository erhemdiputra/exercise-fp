var list = [{
        name: "Bob",
        type: 1
    },
    {
        name: "Tony",
        type: 2
    },
    {
        name: "Jessica",
        type: 3
    },
    {
        name: "Melanie",
        type: 4
    },
    {
        name: "Jason",
        type: 1
    }
]

list = list.filter(function (obj) {
    return obj.type === 1
})

console.log(list)