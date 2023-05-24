let userScore = 0;
let computerScore = 0;
let userChoosen = '';
let computerChoice = '';

const imgList = {
    rock : "https://www.svgrepo.com/show/407352/rock.svg",
    paper : "https://www.svgrepo.com/show/514187/paper-plane.svg",
    scissor : "https://www.svgrepo.com/show/173989/scissor.svg"
}

document.addEventListener("DOMContentLoaded", ()=>{
    UpdateScore();
})

function UpdateScore()
{
    const userScoreEle = document.getElementById("userscore");
    const computerScoreEle = document.getElementById("compscore");
    userScoreEle.innerText = userScore;
    computerScoreEle.innerText = computerScore;
}

function UserChoice(userChoice)
{
    const imgEle = document.getElementById('img');
    const text  = document.getElementById('text-choosen');
    imgEle.src = imgList[userChoice];
    text.innerText = userChoice;
    userChoosen = userChoice;
    ComputerChoice();
}

function ComputerChoice()
{
    const compImgEle = document.getElementById('img-comp');
    const compTextEle = document.getElementById('text-comp');
    const img = ['rock', 'paper', 'scissor'];
    const random = Math.floor(Math.random() * img.length);
    compImgEle.src = imgList[img[random]];
    compTextEle.innerText = img[random];
    computerChoice = img[random];
    FindWinner()
}

function FindWinner()
{
    // const winner = document.getElementById('winner');
    // const popup = document.getElementById('popup');
    // popup.style.visibility = "visible";
    if (userChoosen === computerChoice)
    {
        alert('Draw');
        // winner.innerText = 'Draw';
    }
    else if (userChoosen === 'rock' && computerChoice === 'scissor')
    {
        userScore++;
        alert('You Win');
        // winner.innerText = 'Draw';
    }
    else if (userChoosen === 'rock' && computerChoice === 'paper')
    {
        computerScore++;
        alert('Computer Win');
        // winner.innerText = 'Draw';
    }
    else if (userChoosen === 'paper' && computerChoice === 'scissor')
    {
        computerScore++;
        alert('Computer Win');
        // winner.innerText = 'Draw';
    }
    else if (userChoosen === 'paper' && computerChoice === 'rock')
    {
        userScore++;
        alert('You Win');
        // winner.innerText = 'Draw';
    }
    else if (userChoosen === 'scissor' && computerChoice === 'paper')
    {
        userScore++;
        alert('You Win');
        // winner.innerText = 'Draw';
    }
    else if (userChoosen === 'scissor' && computerChoice === 'rock')
    {
        computerScore++;
        alert('Computer Win');
        // winner.innerText = 'Draw';
    }
    UpdateScore();
}
