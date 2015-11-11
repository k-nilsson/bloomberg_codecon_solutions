//Problem        : Expecto Palindronum
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
var answer;

function isPalindrome(str) {
    var j = str.length;
    for (var i = 0; i< j / 2 + 1; ++i) {
        if (str[i] != str[j - i - 1]) {
            return false;
        }
    }
    return true;
}

rl.on('line', function (str) {
    var j = str.length;
    var valid = true;
    var longest_palindrome = 0;
    for (var i = 0, len = str.length; i <= len; i++) {
        if(isPalindrome(str.substring(0, i))) { longest_palindrome = i; }    
    }
    answer = 2*j - longest_palindrome;
});

rl.on('close', function() {
    console.log(answer);
   process.exit(0);
});

