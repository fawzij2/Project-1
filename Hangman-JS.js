const words = [`project`]
const answerArea = document.querySelector(".middle-bottom")
const answer = () => {
    const rightWord = {}
    const rightWord2 = words[0].slice(0)
    console.log(rightWord2)
    for (let i =0 ; i<words[0].length ; i++){
        rightWord[i] = words[0][i]
        console.log(rightWord[i])
    } 
    for (let key in rightWord) {
        let element = document.createElement("div")
        element.innerText = rightWord[key]
        answerArea.append(element)
        element.style.visibility =`hidden`
    }
}
document.addEventListener("DOMContentLoaded", () => {
    answer()
  });

const answerCheck = (theAnswer) => {
    console.log(theAnswer)
    const answer1 = document.getElementById("a").value
    console.log(answer1)
    if (rightWord2[answer1]){
        theAnswer.style.visibility = "hidden"
    }
    theAnswer.style.visibility = "hidden"
}
const a = document.querySelector(`#a`)
a.onclick = () =>{answerCheck(a,`#a`)}
const b = document.querySelector(`#b`)
const c = document.querySelector(`#c`)
const d = document.querySelector(`#d`)
const e = document.querySelector(`#e`)
e.onclick = () => {answerCheck(e,`#e`)}
const f = document.querySelector(`#f`)
const g = document.querySelector(`#g`)
const h = document.querySelector(`#h`)
const i = document.querySelector(`#i`)
const j = document.querySelector(`#j`)
const k = document.querySelector(`#k`)
const l = document.querySelector(`#l`)
const m = document.querySelector(`#m`)
const n = document.querySelector(`#n`)
const o = document.querySelector(`#o`)
const p = document.querySelector(`#p`)
const q = document.querySelector(`#q`)
const r = document.querySelector(`#r`)
const s = document.querySelector(`#s`)
const t = document.querySelector(`#t`)
const u = document.querySelector(`#u`)
const v = document.querySelector(`#v`)
const w = document.querySelector(`#w`)
const x = document.querySelector(`#x`)
const y = document.querySelector(`#u`)
const z = document.querySelector(`#z`)
