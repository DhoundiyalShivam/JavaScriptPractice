const websiteName = document.querySelector("#websiteName")
const urlName = document.querySelector("#urlName")
const submit = document.querySelector("#submit")
const show = document.querySelector(".outputContainer")
if(JSON.parse(localStorage.getItem('bookmarks'))){
    console.log('true')
    showBookmark()
}
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
function deleteBookmark(url){
    console.log(url)
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
    bookmarks.forEach((el,i)=>{
        if(url==el.siteUrl){
            bookmarks.splice(i,1)
        }
    })
}
function showBookmark() {
   let bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
   let bookmark = document.createElement('div')
    bookmarks.forEach(el=>{
        let siteName=el.siteName
        let siteUrl=el.siteUrl
        bookmark.classList.add('bookmark')
    bookmark.innerHTML=`<h3>${siteName}</h3>  <a class="btn btn-primary mx-3" href="${siteUrl}" target="_blank">Visit</a>  <button onclick="deleteBookmark('${siteUrl}')" class="btn btn-danger">Delete</button>`
    })
    show.appendChild(bookmark)


}
submit.addEventListener("click", getValues)

