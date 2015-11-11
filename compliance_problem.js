//Problem        : A Compliance Problem
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
    for (var i = 0, len = str.length; i < len; i++) {
        if(str[i] in lookup) { 
            lookup[str[i]] += 1; 
        } 
        else { 
            lookup[str[i]] = 1;
        }
    }
 });

rl.on('close', function() {
    var num_odd = 0;
    for (var item in lookup) {
        num_odd += (lookup[item] % 2 === 1 ? 1 : 0);
    }
    console.log(num_odd > 1 ? "no" : "yes");
   process.exit(0);
});
