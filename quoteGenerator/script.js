const container=document.querySelector(".container")
const quote=document.querySelector("#quote")
const author=document.querySelector("#author")
const loader=document.querySelector(".loader")
const button=document.querySelector("#button")


let apiData=[]
function newQuote(){
 const quotes=apiData[Math.floor(Math.random()*apiData.length)]
quote.textContent=quotes.text
author.textContent=quotes.author

}
function removeLoader(){
    loader.style.display="none"
    container.style.display="block"
}
function showLoader(){
    loader.style.display="block"
    container.style.display="none"
}
async function getQuote(){
   showLoader()
const apiUrl="https://type.fit/api/quotes"
   try{
       const response = await fetch(apiUrl)
        apiData= await response.json()
       newQuote()
   }catch(e){
console.log(e)
   }
   removeLoader()
} 
getQuote();
button.addEventListener("click",newQuote)
