const bowling=(roll)=>{
let rollIndex=0
    let score=0;
    frames={}
    for(let frameIndex=1;frameIndex<=10;frameIndex++){
        if(rolls[rollIndex]===10){
            // console.log('Strike')
            score+=rolls[rollIndex]+rolls[rollIndex+1]+rolls[rollIndex+2]
            frames[frameIndex]=[rolls[rollIndex],rolls[rollIndex+1],rolls[rollIndex+2]]
            rollIndex++
        }
        else{
            let frameScore = rolls[rollIndex]+rolls[rollIndex+1]
            if(frameScore===10){
            //spare
                score+=frameScore+rolls[rollIndex+2]
            frames[frameIndex]=[rolls[rollIndex],rolls[rollIndex+1],rolls[rollIndex+2]]

            }else{
                //normal
                score+=rolls[rollIndex]+rolls[rollIndex+1]
            frames[frameIndex]=[rolls[rollIndex],rolls[rollIndex+1]]

            }
            rollIndex+=2
        }
    }
return {score,frames}
}
const rolls = [10,2,8,5,5,4,2,3,4,9,0,0,10,2,8,4,3,10,5,2]
console.log(bowling(rolls))
// bowling(rolls)
