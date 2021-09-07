const quizData = [
  {
    question: "The word 'Sathyameva Jayate' is taken from?",
    a: "Yajur Veda",
    b: "Atharva Veda",
    c: "Mundaka Upanishad",
    d: "Sam Veda",
    correct: "c",
  },

  {
    question: "Dandia is a popular dance of ?",
    a: "Punjab",
    b: "Gujarat",
    c: "Telangana",
    d: "Maharastra",
    correct: "b",
  },
  {
    question:
      "The Rath Yatra at Puri is celebrated in honour of which Hindu deity ?",
    a: "Rama",
    b: "Jaganath",
    c: "Shiva",
    d: "Karthikeya",
    correct: "b",
  },
  {
    question:
      "Which one of the following is not a feature of North Indian temple architecture ?",
    a: "Sikara",
    b: "Garbha Gudi",
    c: "Gopuram",
    d: "Pradakshinam",
    correct: "c",
  },

  {
    question:
      "Kalchakra ceremony is associated with which of the following ceremonies ?",
    a: "Hinduism",
    b: "Buddhism",
    c: "Jainism",
    d: "Islam",
    correct: "b",
  },

  {
    question:
      "Which of the following places is famous for Chikankari work, which is a traditional art of embroidery ?",
    a: "Lucknow",
    b: "Hyderabad",
    c: "Jaipur",
    d: "Mysore",
    correct: "a",
  },

  {
    question:
      "Historic Chandragiri Fort is located in which of the following states ?",
    a: "Telangana",
    b: "Karnataka",
    c: "Maharastra",
    d: "Andhra Pradesh",
    correct: "d",
  },

  {
    question: "Who composed the famous song ‘Sare Jahan SeAchha’ ?",
    a: "Jaidev",
    b: "Mohammad Iqbal",
    c: "Bankim Chandra Chattopadhyay",
    d: "Rabindranath Tagore",
    correct: "b",
  },

  {
    question:
      "Which of the following combinations of the States and the festivals mainly celebrated there is not correct ?",
    a: "Uttar Pradesh – Krishna Janmashtami",
    b: "Maharashtra – Ganesh Chaturthi",
    c: "Gujarat – Durga Puja",
    d: "Rajasthan – Gangaur",
    correct: "c",
  },

  {
    question:
      "Which one of the following manuscript is included in the UNESCO’s Memory of World Register ?",
    a: "Rig Veda",
    b: "Ramayana",
    c: "Mahabaratha",
    d: "Bhagavath Gita",
    correct: "a",
  },

  {
    question:
      "Apart from India, in which of the following two countries, Tamil is an official language ?",
    a: "Mauritius and Malaysia",
    b: "Malaysia and Indonesia",
    c: "Sri Lanka and Mauritius",
    d: "Sri Lanka and Singapore",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
  
              <button onclick="location.reload()">wanna try again?</button>
          `;
    }
  }
});
