const websiteName=document.querySelector("#websiteName")
const urlName=document.querySelector("#urlName")
const submit=document.querySelector("#submit")

// console.log(websiteName,submit,urlName  )
function getValues(){
    let website=websiteName.value
    let url=urlName.value
if(website&&url){
    console.log(website,url)
}else{
    alert("Please Enter the value")
}

}
submit.addEventListener("click",getValues)