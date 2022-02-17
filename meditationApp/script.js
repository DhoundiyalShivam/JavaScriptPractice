const play=document.querySelector(".play")
const pause=document.querySelector(".pause")
const video = document.querySelector("video")
const audio = document.querySelector("audio")
const rain=document.querySelector(".rain")
const beach=document.querySelector(".beach")
const time=document.querySelectorAll(".time")
const timer=document.querySelector(".timer")
let defaultDuration=10
time.forEach((singleTime)=>{
singleTime.addEventListener('click',()=>{
     defaultDuration=singleTime.dataset.time
     let sec=Math.floor(currentTime%60).toString().padStart(2,0);
     let min=Math.floor(currentTime/60).toString().padStart(2,0);
    timer.textContent=`${min}:${sec}`
})
})
function beachSound(){
    play.style.display="block"   
    pause.style.display="none"
    audio.src='./audio/beach.mp3'
video.src='./video/beach1.mp4'
}
function rainSound(){
    play.style.display="block"   
    pause.style.display="none"
audio.src='./audio/rain.mp3'
video.src='./video/rain1.mp4'
}
function pauseSound(){
    play.style.display="block"   
    pause.style.display="none"
    video.pause()
    audio.pause()  
}
function playSound(){
    play.style.display="none"   
    pause.style.display="block"
    video.play()
    audio.play()
}
audio.ontimeupdate=function(){
    let elapsedTime=audio.currentTime
    let currentTime=defaultDuration-elapsedTime
    let sec=Math.floor(currentTime%60).toString().padStart(2,0);
    let min=Math.floor(currentTime/60).toString().padStart(2,0);
    timer.textContent=`${min}:${sec}`
    if(elapsedTime>=defaultDuration){
    timer.textContent=`00:00`
    video.pause()
    audio.pause()
    audio.currentTime=0
    play.style.display="block"   
    pause.style.display="none"
    }
}
play.addEventListener('click',playSound)
pause.addEventListener('click',pauseSound)
rain.addEventListener('click',rainSound)
beach.addEventListener('click',beachSound)