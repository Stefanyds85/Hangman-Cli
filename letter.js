const Letters = function (letterSpecs) {

    this.letterpick = letterpick;
    this.placeholder = placeholder;
    this.playerguesses = playerguesses;
}
var letters = [];
var letterpick = [];
var placeholder = '_';
var playerguesses = false
var loop = 0

var getLetters = function(loop){
    console.log(loop);
    if (loop < 10){
        inquirer.prompt({
            name: "Enter a letter",
            message: "pick a letter!!"
        }).then(function(answers){
            letters.push(answers.letters);
            loop++;
            getLetters(loop);
        })
    }

}

getLetters(loop);
module.exports = Letters;