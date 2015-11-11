//Problem        : Messed up Rugby
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
var answers = [];
rl.on('line', function (str) {
    var num = parseInt(str, 10);
    for(var i = 0; i <= num; i += 7) {
        for(var j = 0; j <= num - i; j += 3) {
            for(var k = 0; k <= num - i - j; k += 2) {
                if(i + j + k === num) {
                    answers.push(i/7 + " " + j/3 + " " + k/2);
                }
            }
        }
    }
});

rl.on('close', function() {
    if(answers.length === 0) {
        console.log("0 0 0");
    } 
    else {
        for(var a in answers) {
            console.log(answers[a]);
        }
    }
   process.exit(0);
});
