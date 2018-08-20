let guessCount;
    let maxLimit = 5;
    let a=1;
    let b=1;
    let c=5;
    let prizeMax = 10;
if (window.confirm('Do you want to play a game?')){
    do {
    let randomNumber = Math.floor(Math.random()*maxLimit)+b;
    for (guessCount=b; guessCount <4; guessCount++) {
        console.log(randomNumber);
        let prize = prizeMax / Math.pow(2, a - b);
        let userGuess = parseFloat(prompt('Enter a number form 0 to ' + maxLimit + '\n' +
      'Attempts left:  ' + (4-guessCount) + 
      '\nPossible prize on current attempt: ' + parseInt(prize) + '$'));
        if (userGuess === randomNumber && guessCount === b) {
            alert('Congratulation! Your prize is:' + parseInt(prize));
            break;
        } else if (userGuess === randomNumber && guessCount === 2) {
            alert('Congratulation! Your prize is:' + parseInt(prize)/2);
            break;
        } else if (userGuess === randomNumber && guessCount === 3) {
            alert('Congratulation! Your prize is:' + parseInt(prize)/c);
            break;
        } else if (guessCount === 3) { 
            alert('Thank you for a game. Your prize is: 0'); 
        } 
    } prizeMax *= 3;
      maxLimit *= 2;
    } while (window.confirm('Do you want to continue?'));
} else {
        window.open('exit.html');
        alert('You did not become a millionaire, but can.');
    }
