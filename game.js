const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Which of these is not a Destiny class?",
        choice1: "Hunter",
        choice2: "Knight",
        choice3: "Warlock",
        choice4: "Titan",
        answer: 2

    },
    {
        question: "To which race does Oryx belong?",
        choice1: "The Fallen",
        choice2: "The Vex",
        choice3: "The Cabal",
        choice4: "The Hive",
        answer: 4

    },
    {
        question: "In which year did the Destiny game release ?",
        choice1: "2012",
        choice2: "2013",
        choice3: "2014",
        choice4: "2015",
        answer: 3

    },
    {
        question: "Who was responsible for the 'collapse' at the end of the 'Golden Age'?",
        choice1: "Rasputin",
        choice2: "The Void",
        choice3: "The Darkness",
        choice4: "The Withered",
        answer: 3

    },
    {
        question: "Who was the original voice of Ghost in Destiny?",
        choice1: "Peter Dinklage",
        choice2: "Micheal Cera",
        choice3: "Samuel. L. Jackson",
        choice4: "Nolan North",
        answer: 1

    },
    {
        question: "Which race was responsible for the RED War?",
        choice1: "The Exo",
        choice2: "The Hive",
        choice3: "The Darkness",
        choice4: "The Cabal",
        answer: 4

    },
    {
        question: "Which vendor oversees the Crucible?",
        choice1: "Lord Saladin",
        choice2: "Lord Shaxx",
        choice3: "Osiris",
        choice4: "Lord Felwinter",
        answer: 2

    },
    {
        question: "Who is responsible for the deaths of Eris Morns fire-team?",
        choice1: "Oryx, The Taken King",
        choice2: "Alak-hul, The Dark Blade",
        choice3: "Draxxis, The Betrayed",
        choice4: "Crota, Son of Oryx",
        answer: 4

    },
    {
        question: "Which is not a playable race in Destiny?",
        choice1: "Human",
        choice2: "Awoken",
        choice3: "Dark elf",
        choice4: "Exo",
        answer: 3

    },
    {
        question: "What is the name of the entity responsible for the start of the 'Golden Age'?",
        choice1: "Rasputin, The Warmind",
        choice2: "The Speaker",
        choice3: "The Traveler",
        choice4: "Omnigul",
        answer: 3

    },
    {
        question: "Who is responsible for the death of Cayde-6?",
        choice1: "Prince Uldren",
        choice2: "Zavala",
        choice3: "Lord Shaxx",
        choice4: "Queen Aroura",
        answer: 1

    },
    {
        question: "What was the name of the Last Ahamkara?",
        choice1: "Redrix",
        choice2: "Riven",
        choice3: "Korra",
        choice4: "Sepiks",
        answer: 2

    },
]

const CORRECT_BONUS = 15;
const MAX_QUESTIONS = 8;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [ ...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });
};


startGame();