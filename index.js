let startbtn = document.querySelector(".start-btn");
let quiz = document.querySelector(".quiz");
let headerUtd = document.querySelector(".header-utd");
let h2 = document.querySelector("h2");
let nxtBtn = document.querySelector(".nxt-btn");
let img = document.querySelector("img");
let optBtn = document.querySelectorAll(".opt-btn");
let options = document.querySelector(".options");
let optA = document.querySelector("#A");
let optB = document.querySelector("#B");
let optC = document.querySelector("#C");
let optD = document.querySelector("#D");
let body = document.querySelector("body");
let Score = document.querySelector(".score-board");
let scoreP = document.querySelector("p");
let playAgain = document.querySelector(".play-again");
let questions = [
  {
    question: "images/georgebest.jpg",
    optA: "Andy Cole",
    optB: "George Best",
    optC: "Paul Ince",
    optD: "Eric Cantona",
    correct: "B",
  },
  {
    question: "images/cantona.jpg.jpg",
    optA: "Steve Bruce",
    optB: "George Best",
    optC: "Paul Ince",
    optD: "Eric Cantona",
    correct: "D",
  },
  {
    question: "images/bruce.jpg",
    optA: "Andy Cole",
    optB: "Garry Neville",
    optC: "Steve Bruce",
    optD: "Eric Cantona",
    correct: "C",
  },
  {
    question: "images/paulscholes.jpg",
    optA: "Paul Scholes",
    optB: "David Beckham",
    optC: "Andy Cole",
    optD: "Eric Cantona",
    correct: "A",
  },
  {
    question: "images/keane.jpg",
    optA: "Andy Cole",
    optB: "Roy Keane",
    optC: "Garry Neville",
    optD: "Eric Cantona",
    correct: "B",
  },
  {
    question: "images/paul-ince.jpg",
    optA: "Andy Cole",
    optB: "Roy Keane",
    optC: "Paul Ince",
    optD: "Eric Cantona",
    correct: "C",
  },
  {
    question: "images/garryneville.jpg",
    optA: "Andy Cole",
    optB: "Garry Neville",
    optC: "Paul Ince",
    optD: "Eric Cantona",
    correct: "B",
  },
  {
    question: "images/van der sar.jpg",
    optA: "Andy Cole",
    optB: "Roy Keane",
    optC: "Paul Ince",
    optD: " Edwin Van der sar",
    correct: "D",
  },
  {
    question: "images/cole.jpg",
    optA: "Andy Cole",
    optB: "Roy Keane",
    optC: "Paul Ince",
    optD: "Danny Wallace",
    correct: "A",
  },
  {
    question: "images/beckham.jpg",
    optA: " Ruud Van Nistelrooy",
    optB: "Roy Keane",
    optC: "David Beckham",
    optD: "Danny Wallace",
    correct: "C",
  },
];
start();
function start() {
  startbtn.addEventListener("click", () => {
    startbtn.style.display = "none";
    let i = 0;
    const timer = setInterval(() => {
      h2.textContent = i + "%";
      h2.style.paddingTop = "4em";
      if (i === 100) {
        h2.textContent += "...";
        document.querySelector(".container").style.display = "none";
        quiz.style.display = "block";
        clearInterval(timer);
      } else {
        i++;
      }
    }, 10);
    headerUtd.style.display = "none";
    renderQuestion(currentquestion);
  });
}

let currentquestion = 0;
let renderQuestion = function (currquestion) {
  img.setAttribute("src", questions[currquestion].question);
  optA.textContent = questions[currquestion].optA;
  optB.textContent = questions[currquestion].optB;
  optC.textContent = questions[currquestion].optC;
  optD.textContent = questions[currquestion].optD;
};
score = 0;
options.addEventListener("click", (e) => {
  if (e.target.id === questions[currentquestion].correct) {
    e.target.style.backgroundColor = "green";
    score += 10;
    for (i = 0; i < optBtn.length; i++) {
      optBtn[i].disabled = true;
    }
  } else {
    e.target.style.backgroundColor = "red";
    for (i = 0; i < optBtn.length; i++) {
      optBtn[i].disabled = true;
    }
  }
});

nxtBtn.addEventListener("click", () => {
  if (currentquestion >= questions.length - 1) {
    quiz.style.display = "none";
    document.querySelector("body").style.backgroundImage = "block";
    Score.style.display = "block";
    scoreP.innerText = "Calculating Your Scores.....";
    setTimeout(() => {
      scoreP.innerText = `YOU SCORED ${score}%`;
      console.log(score + "%");
    }, 2500);
  } else {
    for (i = 0; i < optBtn.length; i++) {
      optBtn[i].style.backgroundColor = "";
      optBtn[i].disabled = false;
    }
    currentquestion++;
    renderQuestion(currentquestion);
  }
});
