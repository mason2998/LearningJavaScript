'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Good Guess!!'

// document.querySelector('.score').textContent = 30
// document.querySelector('.highscore').textContent = 10

// console.log(document.querySelector('.highscore').textContent)
// document.querySelector('.guess').value = 15

let number = Math.floor(Math.random()*20);
var score = 5
var highscore = 0

document.querySelector('.again').addEventListener('click', function(){

    document.querySelector('.message').textContent = 'Start guessing...';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').textContent = '?';

    score = 5;

    document.querySelector('.score').textContent = score;

    document.querySelector('.guess').textContent = '';

    document.querySelector('.number').style.width = '15rem';

    number = Math.floor(Math.random()*20);
})

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess){
        document.querySelector('.message').textContent = ' No number submitted!';

        document.querySelector('body').style.backgroundColor  = 'red'
    }
    else if (guess == number){
        document.querySelector('.message').textContent = 'Correct Guess!';

        if (score > highscore){
            highscore = score;
        }
       
        document.querySelector('body').style.backgroundColor  = 'green';

        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.number').textContent = number;

        document.querySelector('.highscore').textContent = highscore
    }
    else if (guess > number){
        if (score > 0){
            document.querySelector('.message').textContent = 'Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You lost';
            document.querySelector('body').style.backgroundColor  = 'red'
        }
        
    }
    else if (guess < number){
        if (score > 0){
            document.querySelector('.message').textContent = 'Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You lost';
        }
    }
    
});


