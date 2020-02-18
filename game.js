// constants
//const QUESTION = document.getElementById("question");
//const SCORE = document.getElementById("score");
//const SCORECONT = document.getElementById("scoreContainer");
//const RESTART = document.getElementById("restart");
//const CHOICEA = document.getElementById("a");
//const CHOICEB = document.getElementById("b");
//const CHOICEC = document.getElementById("c");
//const CHOICED = document.getElementById("d");

const QUESTIONS = [
  {
    question: "Which is the smallest planet in our solar system?",
    answers: {
      a: "Earth",
      b: "Pluto",
      c: "Mercury",
      d: "Venus"
    },
    correct: "c"
  },
  {
    question: "What is the largest type of star?",
    answers: {
      a: "White Neutron Star",
      b: "Red Supergiant Star",
      c: "Blue Supergiant Star",
      d: "Supernova"
    },
    correct: "b"
  },
  {
    question: "What is the gas and dust called that follows a comet?",
    answers: {
      a: "Tail",
      b: "Debris field",
      c: "Spray",
      d: "Wake"
    },
    correct: "a"
  },
  {
    question: "What is the proper name of the sun?",
    answers: {
      a: "Solus",
      b: "Solara",
      c: "Sol",
      d: "Salsa"
    },
    correct: "c"
  },
  {
    question: "Which planet is also known as the Morning Star?",
    answers: {
      a: "Mercury",
      b: "Jupiter",
      c: "Saturn",
      d: "Venus"
    },
    correct: "d"
  },
  {
    question: "Which planet is also known as the Evening Star?",
    answers: {
      a: "Venus",
      b: "Sirius",
      c: "Jupiter",
      d: "Mercury"
    },
    correct: "a"
  },
  {
    question: "What is the point of no return around a black hole called?",
    answers: {
      a: "The point of no return",
      b: "Event Horizon",
      c: "Terminal Boundary",
      d: "Stellar Cusp"
    },
    correct: "b"
  },
  {
    question: "How much time does it take for the sun's light to reach earth?",
    answers: {
      a: "3 minutes",
      b: "5 minutes",
      c: "10 minutes",
      d: "8 minutes"
    },
    correct: "d"
  },
  {
    question:
      "What is the point called when the moon is furthest from the Earth?",
    answers: {
      a: "Apex",
      b: "Apogee",
      c: "Perigee",
      d: "Apsis"
    },
    correct: "b"
  },
  {
    question: "Which planet spins backwards relative to the rest?",
    answers: {
      a: "Uranus",
      b: "Jupiter",
      c: "Venus",
      d: "Saturn"
    },
    correct: "c"
  }
];

// variables
var currentQuestion;
var currentScore = 0;

//functions
function initButtons() {
  //initialize button functionality
  //RESTART.addEventListener("click", function() {startGame();});
  // $("#restart").click(function() {
  //   startGame();
  // });
  $("#restart").click(function() {
    location.reload();
  });
  // yes okay that last part to reload the page is a HOTFIX.
  // is that okay? I ran into a bug that I tore my hair out trying to fix
  // long story short, I couldn't fix it so I applied this as a hotfix.
  // it's not elegant, I am not proud of it, but it works.
  // simply starting the game and reinitializing the variables causes the game to crash on subsequent playthroughs...
  $("#restart").addClass("hidden");
  $("#scoreContainer").addClass("hidden");
  $("#a").click(function() {
    checkAnswer("a");
  });
  $("#b").click(function() {
    checkAnswer("b");
  });
  $("#c").click(function() {
    checkAnswer("c");
  });
  $("#d").click(function() {
    checkAnswer("d");
  });
}

function displayQuestion(q) {
  //takes in the current question object
  //displays question and choices
  $("#count").text(currentQuestion + 1);
  $("#question").text(q.question);
  $("#a").text(q.answers.a);
  $("#b").text(q.answers.b);
  $("#c").text(q.answers.c);
  $("#d").text(q.answers.d);
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < QUESTIONS.length) {
    displayQuestion(QUESTIONS[currentQuestion]);
  } else {
    endGame();
  }
}

function checkAnswer(a) {
  //takes the button that is clicked
  //compares to current questions correct answer
  //updates score
  //calls nextQuestion()
  if (a === QUESTIONS[currentQuestion].correct) {
    console.log("Correct!");
    currentScore++;
  } else {
    console.log("WRONG");
  }
  nextQuestion();
}

function endGame() {
  $("#score").text(currentScore);
  $("#restart").removeClass("hidden");
  $("#scoreContainer").removeClass("hidden");
}

function startGame() {
  currentQuestion = 0;
  currentScore = 0;
  initButtons();
  displayQuestion(QUESTIONS[currentQuestion]);
}

startGame();
