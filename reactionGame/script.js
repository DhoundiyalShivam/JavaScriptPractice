const direction = document.querySelector(".direction")
const submit=document.querySelector("#submit")
const message=document.querySelector("#message")
const gameArea=document.querySelector("#gameArea")
const resultArea=document.querySelector("#resultArea")

submit.addEventListener("click",game)
let score=0;
let playArea = {};

displayMessage('Click Start to Begin!')
function game(){
    direction.style.display ='none'
    submit.style.display="none"
    displayMessage("Starting.....")
    startGame()
}
function displayMessage(msg){
    message.innerHTML=`<h2>${msg}</h2>`
}
function getRandomColor(){
    function color(){
        hex = random(255).toString(16)
        return hex.padStart(2, "0")
        
    }
return "#"+color()+color()+color()
}

function showCircle(){
    const circleEl = document.createElement("div");
    circleEl.classList.add("box")
    circleEl.style.backgroundColor=getRandomColor()
    circleEl.time = new Date().getTime();
    circleEl.style.top=random(getTop())+"px"
    circleEl.style.left=random(getTop())+"px"
    circleEl.addEventListener('click',hit)
    gameArea.append(circleEl)
    playArea.tempTime = setTimeout(()=>{
        hit({
            target:{
                time:circleEl.time
            }
        })
    },2000)
}
function getTop(){
    return gameArea.clientHeight +200
}
function getLeft(){
    return gameArea.clientWidth +200
}
function hit(e){
    let start=e.target.time
    let end = new Date().getTime()
    let duration = Math.abs(start-end)/1000
    if(playArea.tempTime){
        clearTimeout(playArea.tempTime)
    }
  clearTimeout(playArea.timer);
  displayMessage(`It took you ${duration} seconds to click`);
    if(duration>2){
        gameArea.children[0].remove()
        resultArea.innerHTML=`<h2>Too Slow! <span id="loser"> You Lost!</span>
        Your score was ${score}.<br> Click the start button to play again!</h2>`
        console.log('finish')
        resetGame();
    }
    else{
        gameArea.children[0].remove()
        playArea.timer = setTimeout(showCircle, random(4000));
        // startGame()
        score++
        if(score===15){
            results.innerHTML = `You reached ${score}! <span id="winner"> You win!</span>
            <br> Click the start button to play again!`;
      resetGame();
        }
        else{
            resultArea.innerHTML=`Score: ${score} of 15`;
        }
    }
    
}
function resetGame(){
    submit.style.display="block"

}
function startGame(){
playArea.timer= setTimeout(showCircle,random(4000))
}

function random(number){
    let num = Math.floor(Math.random()*number)
    return num
}
