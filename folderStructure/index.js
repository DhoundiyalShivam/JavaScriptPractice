const fs = require("fs")


// const readFiles=(filename)=>{
    // const data=fs.readFileSync(`data/${filename}.txt`)
    // const arr=data.toString().split('\r\n').filter(i=>i) // \r carriage return and \n next line remove and then see waht happens
    // console.log(arr)
// }

// readFiles('dishesh')

const readFile=async (filename)=>{
try{
    const data=await fs.promises.readFile(`data/${filename}.txt`,"utf8")
const arr=data.toString().split('\r\n').filter(i=>i) // \r carriage return and \n next line remove and then see waht happens
// console.log(arr)
return arr
}
catch(e){
console.log('error',e)
}
}
const main= async()=>{
    const output=await readFile("dishesh")
    console.log(output)
}
main()
//https://www.geeksforgeeks.org/node-js-fs-readfile-method/