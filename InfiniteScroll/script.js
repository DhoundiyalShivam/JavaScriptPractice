// const loader=document.querySelector("#loader")
// const imageContainer=document.querySelector("#image-container")
// console.log(loader,imageContainer)

const api=`https://api.unsplash.com/photos/random/?client_id=6fa91622109e859b1c40218a5dead99f7262cf4f698b1e2cb89dd18fc5824d15&count=10&query=dogs`

const data=async()=>{
try{
    let response = await fetch(api)
    let photosArray = await response.json()
    console.log(photosArray)
}
catch(e){
console.log(e)

}
}
data()