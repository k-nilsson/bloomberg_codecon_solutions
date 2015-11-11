//Problem        : Mug Color
//Language       : Javascript
//Compiled Using : V8
//Version        : Node 0.12.3
//Input for your program will be provided from STDIN
//Print out all output from your program to STDOUT

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var lookup = {"White":0, "Black":0, "Blue":0, "Red":0, "Yellow":0};
rl.on('line', function (str) {
    lookup[str]++;
});

rl.on('close', function() {
    var smallest;
    for(var item in lookup) {
        if(lookup[item] === 0 ) {
            smallest = item;
        }
    }
    console.log(smallest);
   process.exit(0);
});
