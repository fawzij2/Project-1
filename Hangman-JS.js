const words = [`supermario`, `megaman`, `sonic`, `pubg`, `hercules`, `finalfantasy`, `fortnite`, `uncharted`, `godofwar`, `kingdomhearts`]
const answerArea = document.querySelector(`.middle-bottom`)
let rightWord = []
let correct = 0
let wrong = 0
const hangman = [`head`, `body`, `left_arm`, `right_arm`, `left_leg`, `right_leg`]
for (let z = 0 ; z < words.length ; z++){
    let item = localStorage.getItem(z)
}
const resetButton = document.getElementById(`reset`)
const addButton = document.getElementById(`add_word`)
const backButton = document.getElementById(`back`)
let newWords = 9
const answer = () => {
    const key = Math.floor(Math.random() * 20)
    rightWord = localStorage.getItem(key)
    if (rightWord && rightWord !== "null"){
        rightWord = rightWord.split(``)
        for (let i=0 ; i < rightWord.length ; i++) {
            let element = document.createElement(`div`)
            element.innerText = rightWord[i]
            element.className = rightWord[i]
            answerArea.append(element)
            element.style.width = `20px`
            element.style.borderBottom = `2px solid brown`
            element.style.textAlign = `center`
            element.style.fontSize = `0`
        }
    } else {
        answer()
    }
    if (key < 10){
        if (key === 0){
            const picture = document.getElementById(`char_img`)
            picture.style.backgroundImage = `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSOjz5vttBPYaxLnhlDK84dA0aZN2CFouaA&usqp=CAU)`
        }
        if (key === 1){
            const picture = document.getElementById(`char_img`)
            picture.style.backgroundImage = `url(https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Mega_Man_%28Mega_Man_9%29.png/220px-Mega_Man_%28Mega_Man_9%29.png)`
        } 
        if (key === 2) {
            const picture = document.getElementById(`char_img`)
            picture.style.backgroundImage = `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukJNTlQFBckkr1wIiPID5RRnFDbwaX9dKCQ&usqp=CAU)`
        }
        if (key === 3) {
            const picture = document.getElementById(`char_img`)
            picture.style.backgroundImage = `url(https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/10/22/933055-pubg-2.jpg)`
        }
        if (key === 4) {
            const picture = document.getElementById(`char_img`)
            picture.style.backgroundImage = `url(https://i.ytimg.com/vi/kvgRpOHTDOc/hqdefault.jpg)`
        }
        if (key === 5) {
            const picture = document.getElementById(`char_img`)
            picture.style.backgroundImage = `url(https://static.wikia.nocookie.net/finalfantasy/images/5/5b/Cloud_Strife_from_FFVII_Remake_promo_render.png/revision/latest/smart/width/250/height/250?cb=20190910180154)`
        }
        if (key === 6) {
            const picture = document.getElementById(`char_img`)
            picture.style.backgroundImage = `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFAaqic-kYU1tUrF-OqcxCYSxzt4hX8l7EA&usqp=CAU)`
        }
        if (key === 7) {
            const picture = document.getElementById(`char_img`)
            picture.style.backgroundImage = `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM40d019sDeUlLjqelX5OH94yKAjeOwHjKcg&usqp=CAU)`
        }
        if (key === 8) {
            const picture = document.getElementById(`char_img`)
            picture.style.backgroundImage = `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPVoLBhE5IA7HEKYsl5aEIwylBbjJQLU8LGg&usqp=CAU)`
        }
        if (key === 9) {
            const picture = document.getElementById(`char_img`)
            picture.style.backgroundImage = `url(https://i.gadgets360cdn.com/large/kingdom_hearts_3_1549011030622.jpg)`
        }
    }
}
document.addEventListener(`DOMContentLoaded`, () => {
    answer()
});
const answerCheck = (theAnswer) => {
    console.log(theAnswer)
    const answer1 = theAnswer.innerText
    // console.log(answer1)
    if (rightWord.includes(answer1)){
        document.getElementById(`correct`).play()
        theAnswer.style.visibility = `hidden`
        let correctLetter = document.getElementsByClassName(answer1)
        for (let i = 0 ; i < correctLetter.length ; i++){
        correctLetter[i].style.fontSize = `30px`
        }
        correct += correctLetter.length
        if (correct === rightWord.length){
            document.getElementById(`win`).play()
            setTimeout(() => {
                alert(`You Win. \n Good Job`)
            location.reload()
            },100)
            
        }
    } else {
        document.getElementById('wrong').play()
        theAnswer.style.visibility = `hidden`
        wrong ++
        if (wrong === 6) {
            let bodyPart = document.getElementById(hangman[wrong-1])
            bodyPart.style.visibility = `visible`
        } if (wrong === 1) {
            let bodyPart = document.getElementById(hangman[wrong-1])
            bodyPart.style.visibility = `visible`
        } else {
            let bodyPart = document.getElementById(hangman[wrong-1])
            bodyPart.style.visibility = `visible`
        }
    }
    if (wrong === 6) {
        document.getElementById(`lose`).play()
        setTimeout(() => {
            alert(`You lose \n Try Again`)
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

resetButton.onclick = () => {location.reload()}

addButton.onclick = () => {
    const addition = prompt(`Enter a new word`, `type here`)
    localStorage.setItem(newWords, addition)
    newWords += 1
}

backButton.onclick = () => {
    window.location.href = `./Start.html`
}