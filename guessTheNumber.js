function guessANumber() {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let comuterGuess = Math.floor(Math.random() * 100);
    let guess;
    let counter = 0;

    let recursiveAsuncReadLine = function () {
        readline.question('Guess the number (0-100): ', number => {
            guess = Number(number);
            counter++;

            if (counter > 6) {
                console.log('You Lost!');
                return readline.close();
            }

            if (guess <= 100 && guess >= 0) {
                if (guess === comuterGuess) {
                    console.log('You guess it!');
                    return readline.close();
                } else if (guess < comuterGuess) {
                    console.log('Too Low!');
                    recursiveAsuncReadLine();
                } else if (guess > comuterGuess) {
                    console.log('Too High!');
                    recursiveAsuncReadLine();
                } 
            } else {
                console.log('Invalid input! Try again...');
                recursiveAsuncReadLine();
            }

        });
    }
    recursiveAsuncReadLine();
}

guessANumber()

