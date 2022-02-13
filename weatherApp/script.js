// window.addEventListener('load',()=>{
//     let lat;
//     let long;
//   if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(position=>{
//         lat = position.coords.latitude
//         long = position.coords.longitude
//         console.log(lat,long)


//     })
//   }
// })

let submit = document.querySelector("#submit")
let input=document.querySelector('#input')
let timeZone=document.querySelector('.timezone')
let icon=document.querySelector('.icon')
let temprature=document.querySelector('.temprature')
let desc=document.querySelector('.desc')


let city


async function weatherDetails(api){
   try{
    let response = await fetch(api)
    let data=await response.json()
    displayDetails(data)
}catch(error){
       console.log(error.message)
   }
}
function displayDetails(data){
console.log(data)
timeZone.textContent=data.location.tz_id
icon.src=data.current.condition.icon
temprature.textContent=data.current.temp_c + 'c'
desc.textContent=data.location.region
// desc.textContent='delhi'
}
submit.addEventListener('click',()=>{
    city=input.value
    console.log(city)
let api = `http://api.weatherapi.com/v1/current.json?key=4425302281a941dea5a181626221302&q=${city}&aqi=no`

    weatherDetails(api)
})