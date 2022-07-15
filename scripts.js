// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
  'Front-End',
  'Web Developer'
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800)
  })
  counter = (counter + 1) % phrases.length
}

next();


///display the date
$(document).ready(function () {
  var today = new Date();
  var dd = today.getDate();

  var mm = today.getMonth()+1; 
  var yyyy = today.getFullYear();
  if(dd<10) 
  {
      dd='0'+dd;
  } 

  if(mm<10) 
  {
      mm='0'+mm;
  } 
  console.log(today);
  today = mm+'/'+dd+'/'+yyyy;

  $(this).find('.todaysDate').text(today);
});


var sammytheme = document.querySelector("#sammytheme");
var selection = "Notebook";
var leftMargin = document.querySelector(".left-margin");
var binderPaper = document.querySelector(".binder-paper");
var fullSheet = document.querySelector(".fullSheet");
var pageHeader = document.querySelector(".page-header");

sammytheme.addEventListener("change", function (e){
selection = e.target.value;
console.log(selection);

if (selection === "Notebook"){
  leftMargin.classList.remove("neon");
  binderPaper.classList.remove("neon");
  fullSheet.classList.remove("neon");
  pageHeader.classList.remove("neon");

  leftMargin.classList.remove("canvas");
  binderPaper.classList.remove("canvas");
  fullSheet.classList.remove("canvas");
  pageHeader.classList.remove("canvas");

  leftMargin.classList.add("notebook");
  binderPaper.classList.add("notebook");
  fullSheet.classList.add("notebook");
  pageHeader.classList.add("notebook");

} 

  else if (selection === "Neon"){
      leftMargin.classList.remove("notebook");
      binderPaper.classList.remove("notebook");
      fullSheet.classList.remove("notebook");
      pageHeader.classList.remove("notebook");

      leftMargin.classList.remove("canvas");
      binderPaper.classList.remove("canvas");
      fullSheet.classList.remove("canvas");
      pageHeader.classList.remove("canvas");

      leftMargin.classList.add("neon");
      binderPaper.classList.add("neon");
      fullSheet.classList.add("neon");
      pageHeader.classList.add("neon");
    }

  else if (selection === "Canvas"){
      leftMargin.classList.remove("notebook");
      binderPaper.classList.remove("notebook");
      fullSheet.classList.remove("notebook");
      pageHeader.classList.remove("notebook");

      leftMargin.classList.remove("neon");
      binderPaper.classList.remove("neon");
      fullSheet.classList.remove("neon");
      pageHeader.classList.remove("neon");

      leftMargin.classList.add("canvas");
      binderPaper.classList.add("canvas");
      fullSheet.classList.add("canvas");
      pageHeader.classList.add("canvas")
    }

});






//     else if (leftMargin.classList.contains("Canvas")){
//       leftMargin.classList.remove("Canvas");
//       leftMargin.classList.add("Neon");

//   }else if (binderPaper.classList.contains("Canvas")){
//     binderPaper.classList.remove("Canvas");
//     binderPaper.classList.add("Neon");
//   }
//   else if (binderPaper.classList.contains("Canvas")){
//     binderPaper.classList.remove("Canvas");
//     binderPaper.classList.add("Neon");
//   }
// } else if (selection === "Canvas"){
//   if (leftMargin.classList.contains("Notebook")){
//     leftMargin.classList.remove("Notebook");
//     leftMargin.classList.add("Canvas");
//   }else if (binderPaper.classList.contains("Neon")){
//     binderPaper.classList.remove("Neon");
//     binderPaper.classList.add("Canvas");
//   }
// }
// });


