var fs = require('fs');

var output = fs.readFileSync('data.txt', 'utf-8')
    .trim()
    .split('\n')
    .map(line => line.split('-'))
    .reduce((players, line) => {
        players[line[0]] = players[line[0]] || [];
        players[line[0]].push({
            name: line[1],
            no: line[2]
        })
        return players
    }, {})

console.log(output)