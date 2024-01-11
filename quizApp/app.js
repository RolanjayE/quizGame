

/**
 * 
 * crete and get the importand element 
 * 
 */

let score = 0
let number = 0
let mistake = 0
const quiz = document.getElementById('quiz')
const choose = document.getElementById('choose')
const scoreh4 = document.getElementById('scoreh4')
const mistakeh4 = document.getElementById('mistakeh4')
const newGame = document.getElementById('newGame')


/**
 * getData is an async function used to read json file question.json
 * 
 */

const getData = async () => {
    const responce = await fetch('question.json')
    const data = await responce.json()
    const h2 = document.createElement('h2')
    h2.innerHTML = data[number].question
    h2.className = "question"

    for (let index = 0; index < data[number].choices.length; index++) {
        const element = data[number].choices[index];
        const creteBtn = document.createElement('button')
        creteBtn.innerHTML = element[0]
        creteBtn.addEventListener('click', (e) => {
            e.target.style.background = "white"
            e.target.style.color = "black"
            console.log(e.target)
            checkAnswer(element[1])
        })

        choose.append(creteBtn)
    
    }

    quiz.append(h2)
}

const checkAnswer = (answer) => {
    if (answer == true) {
        number++
        score++
        scoreh4.innerHTML = `Score : ${score}`
        setTimeout(()=> {
            checkNumber()
        }, 700)
    } else {
        number++
        mistake++
        mistakeh4.innerHTML = `Mistake : ${mistake}`
        setTimeout(()=> {
            checkNumber()
        }, 700)
    }
}

const resetGetNewQuestion = () => {
    quiz.innerHTML = ""
    choose.innerHTML = ""
}

const checkNumber = ()=> {
    if (number >= 4) {
        resetGetNewQuestion()
        console.log('done')
    }else {
        resetGetNewQuestion()
        getData()
    }
}

const newResetGame = () => {
    score = 0
    number = 0
    mistake = 0
    scoreh4.innerHTML = `Score : ${score}`
    mistakeh4.innerHTML = `Mistake : ${mistake}`
    resetGetNewQuestion()
    getData()
}

newGame.addEventListener("click", ()=> {
    newResetGame()
})

getData()







