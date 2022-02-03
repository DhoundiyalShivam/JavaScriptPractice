const submit = document.querySelector("#submit")
const playArea=document.querySelector(".playArea")
const icons=document.querySelector(".icons")
const message =document.querySelector("#message")

submit.addEventListener("click",startGame)

function startGame(){
    submit.style.display="none"
    playArea.style.display="block"
    icons.style.display="block"

}