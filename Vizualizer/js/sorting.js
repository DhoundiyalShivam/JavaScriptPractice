let arraySize = document.querySelector("#arr-sz")

console.log(arraySize)
arraySize.addEventListener("input", () => {
    createNewArray(parseInt(arraySize.value))
})
let arr = []
createNewArray()
function createNewArray(noOfBars = 50) {
    deleteChild()
    arr = []
    for (let i = 0; i < noOfBars; i++) {
        arr.push(Math.ceil(Math.random() * 250))
    }
    const bars = document.querySelector("#bars")
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement('div')
        bar.style.height = `${arr[i] * 2}px`
        bar.classList.add('flex-item')
        bar.classList.add("bar")
        bar.classList.add(`barNo${i}`)
        bars.appendChild(bar)
    }

}
function deleteChild() {
    const bars = document.querySelector('#bars')
    bars.innerHTML = ''
}