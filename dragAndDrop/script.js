const itemBoxes=document.querySelectorAll(".itemsBox")
const items=document.querySelectorAll(".item")


items.forEach((item)=>{
    item.addEventListener("dragstart",function(){
        draggedItem=item;
        setTimeout(()=>{
        item.style.display="none"
        },0)
    })
   
    itemBoxes.forEach((itemBox)=>{
        itemBox.addEventListener("dragover",function(e){
            e.preventDefault()
        })
        itemBox.addEventListener("dragenter",function(e){
            e.preventDefault()
        })
        itemBox.addEventListener("drop",function(){
            this.append(draggedItem)
        })
    })
    item.addEventListener("dragend",function(){
        item.style.display="block"
        setTimeout(()=>{
            draggedItem=null
        })
    })
})

//we have set the item to display nnone before we are dragging it.so the item will be there but not visible to us 
// so we have used settimeout