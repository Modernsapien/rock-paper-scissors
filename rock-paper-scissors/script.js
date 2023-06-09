console.log("Hello");
// MODALS ---------------------------------------------------------------------------------------------------------------------------------------------------
//do you want to play R, ??

const startModal = document.getElementById("start-modal");
const startModalBtnYes = document.getElementById("start-modal-yes");
const startModalBtnNo = document.getElementById("start-modal-no");
let showStartModal = document.getElementById("start-modal").style.display="flex";


function hideStartModal() {
  startModalBtnYes.addEventListener("click", function() {
    startModal.style.display = "none";
    
  });
  startModalBtnNo.addEventListener("click",function(){
    startModal.style.display="none"
})
}

hideStartModal();


// rock paper scissors---------------------------------------------------------------------------------------------------------------------------------------

const rockImg = document.getElementById("rockImg")
const paperImg = document.getElementById("paperImg")
const scissorsImg = document.getElementById("scissorsImg")

// players choice---------------------------------------------------------------------------------------------------------------------------------------

let playersChoice ;

rockImg.addEventListener("click",function (){
playersChoice = "rock"
console.log(playersChoice);
playGame()
})
paperImg.addEventListener("click",function (){
    playersChoice = "paper"
    console.log(playersChoice);
    playGame()
    })
    scissorsImg.addEventListener("click",function (){
        playersChoice = "scissors"
        console.log(playersChoice);
        playGame()
        })
        
        function playGame (){

        if(playersChoice === "rock" ||playersChoice === "paper" ||playersChoice === "scissors"){
// computers random choice----------------------------------------------------------------------------------------------------------------------------------
let choice = ["rock","paper","scissors"]
let computersChoice = choice[Math.floor(Math.random()*choice.length)]
console.log(`computers choice is ${computersChoice}`)


// work out who won---------------------------------------------------------------------------------------------------------------------------------------

if (playersChoice === computersChoice){alert(`you chose ${playersChoice} \n the computer chose ${computersChoice}\n It's a draw!!!!`)}
else if (playersChoice === "rock" && computersChoice === "paper"){alert(`you chose ${playersChoice} \n the computer chose ${computersChoice}\n You Lose!!!!`)}
else if (playersChoice === "paper" && computersChoice === "scissors"){alert(`you chose ${playersChoice} \n the computer chose ${computersChoice}\n You Lose!!!!`)}
else if (playersChoice === "scissors" && computersChoice === "rock"){alert(`you chose ${playersChoice} \n the computer chose ${computersChoice}\n You Lose!!!!`)}
else {alert(`you chose ${playersChoice} \n the computer chose ${computersChoice}\n You win!!!!`)}


}
        }
      


