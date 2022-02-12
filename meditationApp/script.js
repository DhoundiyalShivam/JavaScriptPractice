const play=document.querySelector(".play")
const pause=document.querySelector(".pause")
const video = document.querySelector("video")
const audio = document.querySelector("audio")
const rain=document.querySelector(".rain")
const beach=document.querySelector(".beach")
const time=document.querySelectorAll(".time")
const timer=document.querySelector(".timer")
time.forEach((singleTime)=>{
singleTime.addEventListener('click',()=>{
    let fakeTimeDuration=singleTime.dataset.time
    let sec=fakeTimeDuration%60;
    let min=fakeTimeDuration/60;

    timer.textContent=`${min}:${sec}`
})
})
function beachSound(){
    audio.src='./audio/beach.mp3'
video.src='./video/beach1.mp4'
}
function rainSound(){
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
play.addEventListener('click',playSound)
pause.addEventListener('click',pauseSound)
rain.addEventListener('click',rainSound)
beach.addEventListener('click',beachSound)