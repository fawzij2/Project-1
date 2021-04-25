// const words = [`project`, `meeting`, `ragnarok`, `museum`, `hercules`, `amusement`, `broasted`, `endgame`, `titans`, `sodium`]
const answerArea = document.querySelector(`#words`)
const closeWindow = document.getElementById(`close_window`)
const startGame = document.getElementById(`start`)
const showWords = document.getElementById(`words_list`)
const addButton = document.getElementById(`add_word`)
let newWords = 9
const answers = () => {
    for (let i in localStorage) {
        let element = document.createElement(`div`)
        element.innerText = localStorage.getItem(i)
        element.className = localStorage.getItem(i)
        answerArea.append(element)
        element.style.width = `100px`
        // element.style.height = `30px`
        // element.style.padding = `10px`
    }
}
document.addEventListener(`DOMContentLoaded`, () => {
    answers()
  });

closeWindow.onclick = () => {
    const wordsList = document.getElementById("words")
    wordsList.style.visibility = "hidden"
}

startGame.onclick = () => {
    window.location.href= "./Hangman.html";

}

showWords.onclick = () => {
    const wordsList1 = document.getElementById("words")
    wordsList1.style.visibility = "visible"
}

addButton.onclick = () => {
    const addition = prompt(`Enter a new word`, `type here`)
    localStorage.setItem(newWords, addition)
    newWords += 1
}