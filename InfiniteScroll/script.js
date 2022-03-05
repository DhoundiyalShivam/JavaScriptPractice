const loader=document.querySelector("#loader")
const imageContainer=document.querySelector("#image-container")
// console.log(loader,imageContainer)



let photosArray=[]
let imageLoaded=0;
let ready=false
function imageLoad(){
    imageLoaded++
    if(imageLoaded===10){
ready=true
loader.hidden=true
    }
}
function showPhotos(photos){

    imageLoaded=0;
    // console.log(photos)
    photos.forEach((data)=>{
    const image=document.createElement('img')
        image.setAttribute('src',data.urls.regular)
        image.addEventListener('load',imageLoad)
        imageContainer.appendChild(image)
    })
}
const data=async()=>{  
loader.hidden=false
    const query = "monument";
    const count = 10;
const api=`https://api.unsplash.com/photos/random/?client_id=6fa91622109e859b1c40218a5dead99f7262cf4f698b1e2cb89dd18fc5824d15&count=${count}&query=${query}`

try{
    let response = await fetch(api)
    let photosArray = await response.json()
    showPhotos(photosArray)
    console.log(photosArray)
}
catch(e){
console.log(e)
}
}
data()
window.addEventListener('scroll',()=>{
//   console.log(window.scrollY,window.innerHeight,document.body.offsetHeight)
if(window.scrollY+window.innerHeight>=document.body.offsetHeight-300&&ready){
    ready=false
    data()
}
})

//innerheight is the viewport height
//offsetheight is the total scroll height