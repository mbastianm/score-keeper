const btnP1 = document.querySelector('#btn-p1')
const skorP1 = document.querySelector('#score-p1')
const btnP2 = document.querySelector('#btn-p2')
const skorP2 = document.querySelector('#score-p2')
const resetBtn = document.querySelector('#reset')
const maxScoreSelect = document.querySelector('#max-score')
let maxScore = 5


function updateScore(playerScore) {
    let score = playerScore.innerText
    score++
    playerScore.innerText = score
}

btnP1.addEventListener('click', () => {
    updateScore(skorP1)
    getWinner()
})

btnP2.addEventListener('click', () => {
    updateScore(skorP2)
    getWinner() 
})

resetBtn.addEventListener('click', reset)

maxScoreSelect.addEventListener('change', function() {
    maxScore = parseInt(this.value)
    reset()
})

function reset() {
    skorP1.innerText = 0
    skorP2.innerText = 0
    btnP1.disabled = false
    btnP2.disabled = false
    skorP1.classList.remove('has-text-success')
    skorP1.classList.remove('has-text-danger')
    skorP2.classList.remove('has-text-success')
    skorP2.classList.remove('has-text-danger')
}

function getWinner() {
    
    if(skorP1.innerText == maxScore || skorP2.innerText == maxScore) {
        btnP1.disabled = true
        btnP2.disabled = true
        
        if(skorP1.innerText == maxScore) {
            skorP1.classList.add('has-text-success')
            skorP2.classList.add ('has-text-danger')
        } else if(skorP2.innerText == maxScore) {
            skorP1.classList.add('has-text-danger')
            skorP2.classList.add('has-text-success')
        } 
        
    }

}