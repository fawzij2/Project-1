const words = [`project`, `meeting`, `ragnarok`, `museum`, `hercules`, `amusement`, `broasted`, `endgame`, `titans`, `sodium`]
const answerArea = document.querySelector(".middle-bottom")
let rightWord = []
let correct = 0
let wrong = 0
const hangman = ["head", "body", "left_arm", "right_arm", "left_leg", "right_leg"]
const answer = () => {
    rightWord = words[Math.floor(Math.random() * 10)].split("")
    for (let i=0 ; i < rightWord.length ; i++) {
        let element = document.createElement("div")
        element.innerText = rightWord[i]
        element.className = rightWord[i]
        answerArea.append(element)
        element.style.width = "20px"
        element.style.borderBottom = "2px solid brown"
        element.style.textAlign = "center"
        element.style.fontSize = "0"
    }
}
document.addEventListener("DOMContentLoaded", () => {
    answer()
  });

const answerCheck = (theAnswer) => {
    console.log(theAnswer)
    const answer1 = theAnswer.innerText
    // console.log(answer1)
    if (rightWord.includes(answer1)){
        document.getElementById("correct").play()
        theAnswer.style.visibility = "hidden"
        let correctLetter = document.getElementsByClassName(answer1)
        for (let i = 0 ; i < correctLetter.length ; i++){
        correctLetter[i].style.fontSize = "20px"
        }
        correct += correctLetter.length
        if (correct === rightWord.length){
            document.getElementById("win").play()
            setTimeout(() => {
                alert(`You Win. \n The man is grateful to you`)
            location.reload()
            },100)
            
        }
    } else {
        document.getElementById('wrong').play()
        theAnswer.style.visibility = "hidden"
        wrong ++
        if (wrong === 6) {
            let bodyPart = document.getElementById(hangman[wrong-1])
            bodyPart.style.visibility = "visible"
        } if (wrong === 1) {
            let bodyPart = document.getElementById(hangman[wrong-1])
            bodyPart.style.visibility = "visible"
        } else {
            let bodyPart = document.getElementById(hangman[wrong-1])
            bodyPart.style.visibility = "visible"
        }
    }
    if (wrong === 6) {
        document.getElementById("lose").play()
        setTimeout(() => {
            alert(`You lose \n The man is dead`)
                location.reload()
        }, 100) 
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
