//Problem        : Laundry Day
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
var lookup = {};
rl.on('line', function (str) {
    if(str in lookup) { 
        lookup[str] += 1; 
    } 
    else { 
        lookup[str] = 1;
    }
});

rl.on('close', function() {
    var keys = Object.keys(lookup).sort(function(a, b) {return a.toLowerCase().localeCompare(b.toLowerCase());});
    for(var t in keys) {
        var thing = keys[t];
        if(thing.indexOf(" sock") > -1) {
            var count = lookup[thing];
            console.log(Math.round((count - 1) / 2) + "|" + thing);
            if((count % 2) !== 0 && count > 1) {
                console.log(0 + "|" + thing);
            }
        } 
        else {
            console.log(lookup[thing] + "|" + thing);
        }
    }
    process.exit(0);
});
