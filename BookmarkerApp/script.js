const websiteName = document.querySelector("#websiteName")
const urlName = document.querySelector("#urlName")
const submit = document.querySelector("#submit")
const show = document.querySelector(".outputContainer")
if (JSON.parse(localStorage.getItem('bookmarks'))) {
    showBookmark()
}
if (localStorage.getItem("bookmarks") == null) {
    let bookmarks = []

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    showBookmark()

}
function getValues() {
    let website = websiteName.value
    let url = urlName.value
    if (website && url) {
        console.log(website, url)
        let bookmark = {
            siteName: website,
            siteUrl: url
        }
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
        bookmarks.push(bookmark)
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
        showBookmark()
    } else {
        alert("Please Enter the value")
    }
    urlName.value = '',
        websiteName.value = ''
}
function deleteBookmark(url) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
    bookmarks.forEach((el, i) => {
        if (url == el.siteUrl) {
            console.log(i)
            bookmarks.splice(i, 1)
        }
    })
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    showBookmark()

}
function showBookmark() {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
    show.innerHTML = ''
    bookmarks.forEach(el => {
        let siteName = el.siteName
        let siteUrl = el.siteUrl
        show.innerHTML += `<div class="bookmark"><h3>${siteName}</h3>  <a class="btn btn-primary" href="https://${siteUrl}" target="_blank">Visit</a>  <button onclick="deleteBookmark('${siteUrl}')" class="btn btn-danger">Delete</button></div>`
    })


}
submit.addEventListener("click", getValues)

//splice(to delete the array splice(i,1)splice(deleteFromWhichIndex,howManyTimes))
//only strings are stored in localstorage
//line number 51 and 47
//while using template literals always pass the function parameter inside the function('${url}')