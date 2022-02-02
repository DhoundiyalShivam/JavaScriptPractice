const direction = document.querySelector(".direction")
const submit=document.querySelector("#submit")
const message=document.querySelector("#message")
const gameArea=document.querySelector("#gameArea")
const resultArea=document.querySelector("#resultArea")

submit.addEventListener("click",game)
let score=0;

displayMessage('Click Start to Begin!')
function game(){
    direction.style.display ='none'
    displayMessage("Starting.....")
    startGame()
}
function displayMessage(msg){
    message.innerHTML=`<h2>${msg}</h2>`
}
function getRandomColor(){

    function color(){
        hex = random(255).toString(16)
        hex.padStart(2,"0")
        return hex
    }
return "#"+color()+color()+color()
}
function showCircle(){
    const circleEl = document.createElement("div");
    circleEl.style.backgroundColor=getRandomColor()
    circleEl.time = new Date().getTime();
    circleEl.style.position="relative"
    circleEl.style.height="70px"
    circleEl.style.width="70px"
    circleEl.style.borderRadius="50%"
    circleEl.style.top=random(getTop())+"px"
    circleEl.style.left=random(getTop())+"px"
    circleEl.addEventListener('click',hit)
    gameArea.append(circleEl)
}
function getTop(){
    return gameArea.clientHeight +200

}
function getLeft(){
    return gameArea.clientWidth +200
}
function hit(e){
    // console.log(e)
    let start=e.target.time
    let end = new Date().getTime()
    let duration = Math.abs(start-end)/1000
    console.log(duration)
    if(duration>2){
        gameArea.children[0].remove()
        resultArea.innerHTML=`<h2>Too Slow! <span id="loser"> You Lost!</span>
        Your score was ${score}.<br> Click the start button to play again!</h2>`
        console.log('finish')
        resetGame();
    }
    else{
        gameArea.children[0].remove()
        setTimeout(showCircle,random(4000))
        startGame()
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

}
function startGame(){
setTimeout(showCircle,random(4000))

}

function random(number){
    let num = Math.floor(Math.random()*number)
    return num
}
