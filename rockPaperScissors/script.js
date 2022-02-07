const submit = document.querySelector("#submit")
const playArea=document.querySelector(".playArea")
const icons=document.querySelector(".icons")
const message =document.querySelector("#message")
const playerScore = document.querySelector("#playerScore")
const computerScore = document.querySelector("#computerScore")
const playerSelect = document.querySelector("#playerSelect")
const computerSelect = document.querySelector("#computerSelect")

submit.addEventListener("click",startGame)
let compArr=['rock','paper','scissors']
let pscore=0;
let cscore=0;
let game=false
function startGame(){
    game=true
    submit.style.display="none"
    playArea.style.display="block"
    icons.style.display="block"
    displayMessage("Game Started")
}
function displayMessage(msg){
message.innerText = msg
}
function getPlayerSelection(playerSelection){
    let compSelection=getCompSelection()
playerSelect.innerHTML=`<i class="fas fa-hand-${playerSelection}"></i>`
computerSelect.innerHTML=`<i class="fas fa-hand-${compSelection}"></i>`
 scores(playerSelection,compSelection)
}
function scoreBoard(result){
if(result==0){
        displayMessage('DRAW')
        playerSelect.style.color='black'
        computerSelect.style.color='black'

}
else if(result==1){
    displayMessage('Player Won this round')
    playerSelect.style.color='green'
    computerSelect.style.color='red'

}
else{
        displayMessage('Computer Won this round')
        playerSelect.style.color='red'
        computerSelect.style.color='green'
}
console.log(result)
}
function resetGame(){
    console.log(5)
}
function scores(pselect,cselect){
    if(pselect===cselect){
        scoreBoard(0)
    }else if(pselect=="rock" && cselect=="scissors"){
        scoreBoard(1)
    }else if(pselect=="rock" && cselect=="paper"){
        scoreBoard(-1)
    }else if(pselect=="paper" && cselect =="scissors"){
        scoreBoard(-1)
    }else if(pselect=="paper" && cselect =="rock"){
        scoreBoard(-1)
    }else if(pselect=="scissors" && cselect=="rock"){
        scoreBoard(-1)
    }else if(pselect=="scissors" && cselect=="paper"){
        scoreBoard(1)
    }
//     if(pselect==5 || cscore==5){
//         game=false
//         resetGame()
//     }
//   if(game){
//     if(pselect===cselect){
//         playerScore.innerText=pscore
//         computerScore.innerText=cscore
//         displayMessage('DRAW')
//     }else if(pselect=="rock" && cselect=="scissors"){
//         pscore++
//         playerScore.innerText=pscore
//         displayMessage('Player Won this round')
//     }else if(pselect=="rock" && cselect=="paper"){
//         cscore++
//         computerScore.innerText=cscore
//         displayMessage('Computer Won this round')

//     }else if(pselect=="paper" && cselect =="scissors"){
//         cscore++
//         computerScore.innerText=cscore
//         displayMessage('Computer Won this round')
//     }else if(pselect=="paper" && cselect =="rock"){
//         pscore++
//         playerScore.innerText=pscore
//         displayMessage('Player Won this round')

//     }else if(pselect=="scissors" && cselect=="rock"){
//         cscore++
//         computerScore.innerText=cscore
//         displayMessage('Computer Won this round')
//     }else if(pselect=="scissors" && cselect=="paper"){
//         pscore++
//         displayMessage('Player Won this round')
//         playerScore.innerText=pscore
//     }
//   }
}

function getCompSelection(){
    return compArr[Math.floor(Math.random()*compArr.length)]
}
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

rock.addEventListener("click",()=>getPlayerSelection(rock.id))
paper.addEventListener("click",()=>getPlayerSelection(paper.id))
scissors.addEventListener("click",()=>getPlayerSelection(scissors.id))

