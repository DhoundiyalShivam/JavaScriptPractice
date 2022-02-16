const websiteName = document.querySelector("#websiteName")
const urlName = document.querySelector("#urlName")
const submit = document.querySelector("#submit")
const show = document.querySelector(".outputContainer")
function getValues() {
    let website = websiteName.value
    let url = urlName.value
    // if(website && url){
    // console.log(website,url)
    let bookmark = {
        siteName: website,
        siteUrl: url
    }
    if (localStorage.getItem("bookmarks") == null) {
let bookmarks = []
      
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    showBookmark()

    } else {
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
        bookmarks.push(bookmark)
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    showBookmark()


    }

    // }else{
    //     alert("Please Enter the value")
    // }
}
function showBookmark() {
   let bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
   let bookmark = document.createElement('div')
    bookmarks.forEach(el=>{
        console.log(el)
    // bookmark.innerHTML = 'hello'
    bookmark.classList.add('bookmark')
    bookmark.innerHTML=`<div>
    <span>${el.siteName}</span><button>Visit</button><button >Delete</button></div>`
    })
    show.appendChild(bookmark)


}
submit.addEventListener("click", getValues)

// localStorage.setItem("book","facebook")
// console.log(localStorage.getItem("book"))