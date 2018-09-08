var wordList = ['tyrannosaurs', 'velociraptor', 'triceratops', 'brachiosaurus', 'stegosaurus', 'allosaurus', "funny", "jawbreaker", "jackpot", "witchcraft", "fishhook", "cobweb", "haiku", "zodiac", "xylophone", "vodka", "puppy"]     // array of words
var wins = 0;
var losses = 0;
var winningWord= "";
var underscoreContainer = [''];
var guessCount = 10;
var lettersGuessed = [];
var arrayOfWinningWord;
// random a word        
winningWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(winningWord);
// split picked word into letter array
var arrayOfWinningWord = winningWord.split('');
console.log(arrayOfWinningWord);

//create a for loop which pushes each letter out on the document as an "_"
function printUnderscore () {
for (i = 0; i < stringOfWinningWord.length; i++) {
    underscoreContainer.push("_");
}
document.getElementById("winningWord").append(printUnderscore);
}


// Take input character and compare to each element in array


// If letter is in array, show it
if (winningWord.contains(userGuess)){
for (j=0;j<arrayOfWinningWord.length;j++){
    if (arrayOfWinningWord[j] == userGuess){
        underscoreContainer[j] = userGuess;
    }

}

}

// If letter is not in array, add it to list of absent letters
if (!winningWord.contains(userGuess)){
lettersGuessed.append(userGuess);
console.log(lettersGuessed);
}               
                               
//onkeyEvent
document.onkeyup = function(event){
var userGuess = event.key;
guessCount--;
lettersGuessed.push(userGuess);

}
// user guess will only be a-z        
if(event.key>= 65 && event.key <= 90) {
makeGuess(event.key.toLowerCase());
}

//user guess has to be a letter
