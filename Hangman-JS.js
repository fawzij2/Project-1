const words = [`project`]
const answerArea = document.querySelector(".middle-bottom")
let rightWord = []
let correct = 0
let wrong = 0
const answer = () => {
    rightWord = words[0].split("")
    for (let i=0 ; i < rightWord.length ; i++) {
        let element = document.createElement("div")
        element.innerText = rightWord[i]
        element.className = rightWord[i]
        answerArea.append(element)
        element.style.visibility =`hidden`
    }
}
document.addEventListener("DOMContentLoaded", () => {
    answer()
  });

const answerCheck = (theAnswer) => {
    console.log(theAnswer)
    const answer1 = theAnswer.innerText
    console.log(answer1)
    if (rightWord.includes(answer1)){
        theAnswer.style.visibility = "hidden"
        let correctLetter = document.getElementsByClassName(answer1)
        // console.log(correctLetter)
        for (let i = 0 ; i < correctLetter.length ; i++){
        correctLetter[i].style.visibility = "visible"
        }
        correct += correctLetter.length
        if (correct === rightWord.length){
            alert("You Win. \n The man is grateful to you")
            location.reload()
        }
    } else {
        theAnswer.style.visibility = "hidden"
        wrong ++
        if (wrong === 6) {
            alert("You lose \n The man is dead")
            location.reload()
        }
    }
    
}
const a = document.querySelector(`#a`)
a.onclick = () =>{answerCheck(a)}
const b = document.querySelector(`#b`)
b.onclick = () =>{answerCheck(b)}
const c = document.querySelector(`#c`)
c.onclick = () =>{answerCheck(c)}
const d = document.querySelector(`#d`)
d.onclick = () =>{answerCheck(d)}
const e = document.querySelector(`#e`)
e.onclick = () => {answerCheck(e)}
const f = document.querySelector(`#f`)
f.onclick = () =>{answerCheck(f)}
const g = document.querySelector(`#g`)
g.onclick = () =>{answerCheck(g)}
const h = document.querySelector(`#h`)
h.onclick = () =>{answerCheck(h)}
const i = document.querySelector(`#i`)
i.onclick = () =>{answerCheck(i)}
const j = document.querySelector(`#j`)
j.onclick = () =>{answerCheck(j)}
const k = document.querySelector(`#k`)
k.onclick = () =>{answerCheck(k)}
const l = document.querySelector(`#l`)
l.onclick = () =>{answerCheck(l)}
const m = document.querySelector(`#m`)
m.onclick = () =>{answerCheck(m)}
const n = document.querySelector(`#n`)
n.onclick = () =>{answerCheck(n)}
const o = document.querySelector(`#o`)
o.onclick = () =>{answerCheck(o)}
const p = document.querySelector(`#p`)
p.onclick = () =>{answerCheck(p)}
const q = document.querySelector(`#q`)
q.onclick = () =>{answerCheck(q)}
const r = document.querySelector(`#r`)
r.onclick = () =>{answerCheck(r)}
const s = document.querySelector(`#s`)
s.onclick = () =>{answerCheck(s)}
const t = document.querySelector(`#t`)
t.onclick = () =>{answerCheck(t)}
const u = document.querySelector(`#u`)
u.onclick = () =>{answerCheck(u)}
const v = document.querySelector(`#v`)
v.onclick = () =>{answerCheck(v)}
const w = document.querySelector(`#w`)
w.onclick = () =>{answerCheck(w)}
const x = document.querySelector(`#x`)
x.onclick = () =>{answerCheck(x)}
const y = document.querySelector(`#y`)
y.onclick = () =>{answerCheck(y)}
const z = document.querySelector(`#z`)
z.onclick = () =>{answerCheck(z)}

const resetButton = document.getElementById("reset")
resetButton.onclick = () => {location.reload()}