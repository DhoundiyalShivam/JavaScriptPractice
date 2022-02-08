const message = document.querySelector(".message")
const submit = document.querySelector("#submit")
const game = document.querySelector(".game")
const details = document.querySelector(".details")
let activePlayer = 0
let playGame=true
function displayMessage(msg) {
    message.innerText = msg;
}
function updateActivePlayer() {
    if (activePlayer == 0) {
        activePlayer = 1
    }
    else {
        activePlayer = 0
    }
}
function initializeGame() {
    player1 = document.querySelector("#player1").value
    player2 = document.querySelector("#player2").value
    details.style.display = "none"
    game.style.display = "flex"
    displayMessage(`${activePlayer == 0 ? player1 : player2}, is up`)
    for (let i = 1; i <= 9; i++) {
        let box = document.createElement('div')
        box.id=i
        box.classList.add('gameItem')
        box.addEventListener('click', function () {
            if (!box.innerText && playGame) {
                box.innerText = activePlayer == 0 ? 'x' : 'o'
                const winner = getWinner()
                if(!winner){
                    displayMessage(`${activePlayer === 0 ? player1 : player2}, you're up`)
                    updateActivePlayer();
                  }else{
                    displayMessage(`${activePlayer===0 ? player1: player2}, congratulations you won!`)
                  }
            }
        })
        game.appendChild(box)
    }
}
const winningSequences = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
function getWinner() {
    let winnerBool = false
    for (let i = 0; i < winningSequences.length; i++) {
        const winningCombo = winningSequences[i]
        const cell1 = document.getElementById(winningCombo[0] + 1)
        const cell2 = document.getElementById(winningCombo[1] + 1)
        const cell3 = document.getElementById(winningCombo[2] + 1)
        const val1 = cell1.innerText
        const val2 = cell2.innerText
        const val3 = cell3.innerText
        if (val1 == val2 && val2 == val3 && val1 != ""){
            winnerBool=true;
            playGame=false;
            break;
        }

    }
    return winnerBool
}

submit.addEventListener('click', initializeGame)
