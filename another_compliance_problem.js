//Problem        : Yet Another Compliance Problem
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
        if(str[i] in lookup){ 
            lookup[str[i]] += 1; 
        } 
        else { 
            lookup[str[i]] = 1;
        }
    }
 });

function sfact(num) {
    var rval=1;
    for (var i = 2; i <= num; i++) {
        rval = rval * i;
    }
    return rval;
}

rl.on('close', function() {
    var num_even = 0, num_odd = 0;
    var num_occurences = {};
    for (var item in lookup) {
        if(lookup[item] % 2 === 1) { 
            num_odd++; 
        }
        if(lookup[item] > 1) {  
            var calc = Math.round((lookup[item] - 1) / 2);
            num_occurences[item] = calc;
            num_even += calc;
        }
    }
    if(num_odd>1) { console.log(0); } 
    else { 
        var output = sfact(num_even);
        for (var item in num_occurences) {
            output /= sfact(num_occurences[item]); 
        }
        console.log(output);
    }
   process.exit(0);
});
