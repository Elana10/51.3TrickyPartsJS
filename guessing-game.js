function guessingGame() {
    let randomNum = Math.floor(Math.random() * 100)
    let count = 0;
    let isFound = false;

    return function guessNum(num){
        if (isFound) return "The game is over, you already won!";
        count ++;
        if(num === randomNum) {
            isFound = true;
            const guess = count === 1 ? "guess" : "guesses"
            return `You win! You found ${num} in ${count} ${guess}.`
        }
        if(num < randomNum) return `${num} is too low!`;
        if(num > randomNum) return `${num} is too high!`
    }


}

module.exports = { guessingGame };
