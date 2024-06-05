'use strict';

const btnPalyAgain=document.getElementById('again');

const computerNumber=document.getElementById('computer');

const messageEl=document.getElementById('message');

const userInputEl=document.getElementById('user-input');

const btnCheck=document.getElementById('check-btn');

const scoreEl=document.getElementById('score');

const highScore=document.getElementById('high');

let userName=window.prompt("What is your name?");

let chance =10;
const generateNumber=function(){
    return Math.trunc(Math.random()*100+1);
}
const randomNumber=generateNumber();

btnPalyAgain.addEventListener('click',function(){
    location.reload();
});

btnCheck.addEventListener('click',function(){

    const gifImage=document.getElementById('gif-image');
    const lostImage=document.getElementById('lost-image');
    const userInput=Number(userInputEl.value);
    if(chance>0){ 
        chance--;
        scoreEl.innerText=chance;
        if (userInput > 0 && userInput <=100) {
            if(userInput===randomNumber){
                document.body.style.backgroundColor='#009576';
                messageEl.innerText="😎Your guess is correct 😎";
                computerNumber.innerText=randomNumber;
                gifImage.style.display="block";
                btnCheck.disabled=true;
            }
            else if(chance==4){
                alert(`Only Five chances left ${userName}`);
            }
            else if(chance==2){
                alert(`I give you a hint ${userName} my number is between ${randomNumber-4}- ${randomNumber+4}`);
            }
            else if(userInput > randomNumber){
                messageEl.innerText="😲 You guessed high";
            }
            else if(userInput < randomNumber){
                messageEl.innerText="😬 You guessed low";
            }
        }
        else{
        alert("Enter a valid number");
        }
    }
    else{
        document.body.style.backgroundColor='red';
        messageEl.innerText="🤐 You lost the game";
        computerNumber.innerText=randomNumber;
        lostImage.style.display="block";
        btnCheck.disabled=true;
    }
});


