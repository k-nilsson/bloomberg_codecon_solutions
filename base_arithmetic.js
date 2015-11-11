//Problem        : Base Arithmetic
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
var lookup = { "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "A": 10, "B" : 11, "C": 12, "D": 13, "E": 14, "F": 15 };
var a = [];
rl.on('line', function (str) {
    var base = 0;
    var chars = str.split(''); 
    for (var ch in chars) {
        if(lookup[chars[ch]] > base) { 
            base = lookup[chars[ch]]; 
        }
    }
    base++;
    a.push(parseInt(str, base));
});

rl.on('close', function() {
    console.log(a[0]+a[1]);
    process.exit(0);
});
