const quizData = [
    {
        question: "What is CSS?",
        a: "Computer Security Systems",
        b: "Captivating Style Sheet",
        c: "Cascading Style Sheet",
        d: "Central Suspended State",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
