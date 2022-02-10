const loader=document.querySelector(".loader")
const container=document.querySelector(".container")
const text=document.querySelector(".toBeTyped")
const textArea = document.querySelector(".typeText")
const timer=document.querySelector(".timer")
const Info=document.querySelector(".Info")

const api="https://type.fit/api/quotes"
let quoteArr=[]
function showLoader(){
    timer.style.display="none"
    container.style.display="none"
    loader.style.display="block"
    Info.style.display="block"

}
function removeLoader(){
    loader.style.display="none"
    Info.style.display="none"
    timer.style.display="block"
    container.style.display="block"
  

}
function showQuote(){
    text.innerHTML=""
    quote=quoteArr[Math.floor(Math.random()*quoteArr.length)]
   let singleText=quote.text.split("")
singleText.forEach((char)=>{
    const span=document.createElement("span")
    span.innerText=char
text.appendChild(span)
startTimer()
})
}
function startTimer(){
     date=new Date()

setInterval(()=>{
    timer.textContent=`${getTime()}s`
},1000)
}
function getTime(){
    return Math.floor((new Date()-date)/1000)
}
async function getTypingText(){
    showLoader()
 try{
    let response = await fetch(api)
     quoteArr= await response.json()
    showQuote()
}catch(e){
     console.log(e)
 }
 removeLoader()
   
}
function compareText(){
    let singleCharArr=document.querySelectorAll("span")
    let textAreaChar=textArea.value.split("")
    singleCharArr.forEach((char,index)=>{
        let character = textAreaChar[index]
       if(character == null){
        char.classList.remove("correct")
        char.classList.remove("incorrect")
       }
        else if(character==char.innerText){
            char.classList.add("correct")
            char.classList.remove("incorrect")
        }
        else{
            char.classList.add("incorrect")
            char.classList.remove("correct")
        }
    })
}
textArea.addEventListener("input",compareText)
getTypingText()
console.log(new Date() - new Date())

