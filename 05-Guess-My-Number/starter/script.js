'use strict';

console.log(document.querySelector(`.message`).textContent);

const secretNumber = Math.trunc(Math.random() * 20) + 1; 
document.querySelector('.number').textContent = secretNumber;
const message = document.querySelector('.message');
let score = Number(document.querySelector('.score').textContent);

let guess;
document.querySelector('.check').addEventListener('click', function(){
    guess = Number(document.querySelector('.guess').value);
    console.log(guess);


    if(!guess){
        message.textContent = 'no value 😒'
    } else if(guess === secretNumber){
        message.textContent = 'correct answer 🏆';
    } else {
        message.textContent = score > 1 
            ? (guess > secretNumber ? 'too High 📈' : 'too Low 📉') 
            : 'You lost the game 😭';
        score--;
        document.querySelector('.score').textContent = score > 1 
            ? score : '0';
    }
});