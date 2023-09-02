let questions = [
    {
        question: "How often are there elections?",
        answers: [
            { text: 'Every four year', correct: true},
            { text: 'Once a year', correct: false},
            { text: 'Every eight years', correct: false},
            { text: 'Every six years', correct: false},
        ]
    },
    {
        question: "can you be convicted for saying something racist to someone?",
        answers: [
            { text: "No", correct: false},
            { text: "Yes", correct: true},
        ]
    },
    {
        question: 'Who got most votes last(2022) election?',
        answers: [
            { text: 'Sverigedemokraterna', correct: false},
            { text: 'Liberalerna', correct: false},
            { text: 'Socialdemokraterna', correct: true},
            { text: 'Moderaterna', correct: false},
        ]
    },
    {
        question: 'Who is head of state?',
        answers: [
            { text: 'Prime menister', correct: false},
            { text: 'The speaker', correct: false},
            { text: 'The king', correct: true},
        ]
    },
    {
        question: 'What year did Women get the right to vote?',
        answers: [
            { text: '1921', correct: true},
            { text: '1919', correct: false},
            { text: 'Women have always had the right to vote', correct: false},
            { text: '1780', correct: false},
        ]
    },
    {
        question: 'Who was the first female Prime minister?',
        answers: [
            { text: 'Nooshi Dadgostar', correct: false},
            { text: 'Magdalena Andersson', correct: true},
            { text: 'Annie lööf', correct: false},
            { text: 'Ebba Bush', correct: false},
        ]
    },
    {
        question: 'How many seats are there in the Parliament?',
        answers: [
            { text: '49', correct: false},
            { text: '349', correct: true},
            { text: '459', correct: false},
            { text: '299', correct: false},
        ]
    },
    {
        question: "Which are Sweden's constitutions", 
        answers: [
            { text: "The form of government, the succession order, the freedom of the press regulation and the freedom of expression law ", correct: true},
            { text: "Common law, the form of government, the Criminal Code and the Discrimination Act", correct : false},
            { text: "The Freedom of Expression Act, the form of government and the rules of the Riksdag", correct: false},
        ]
    },
    {
        question: 'How are the seats in the Parliament distributed?',
        answers: [
            { text: 'The party gets as many procent of the seats as they got in the election', correct: true},
            { text: 'Equally', correct: false},
            { text: 'The mandats are drawn', correct: false},
        ]
    },
    {
        question: 'How many procent of the votes is needed to be in the Parlament',
        answers: [
            { text: '20%', correct: false},
            { text: '2%', correct: false},
            { text: '12,5', correct: false},
            { text: '4%', correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

const start = document.getElementById("start");
const startBtn = document.getElementById("start-btn");
const game = document.getElementById("game");
const quitBtn = document.getElementById("quit-btn");
const highScore = document.getElementById("high-score");

quitBtn.addEventListener('click', ()=> {
    start.style.display = 'block';
    game.style.display = 'none';
})

/**
 * Displays the quiz game
 */
function startQuiz() {
    start.style.display = 'none';
    game.style.display = 'block';

    currentQuestionIndex = 0;
    score = 0;
    questions = shuffle(questions);
    document.getElementById("score").innerText = 0;
    document.getElementById("incorrect").innerText = 0;
    nextBtn.innerHTML = "Next"
    showQuestion();
}


/**
 * Displays the questions
 */
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNr = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNr + ". " + currentQuestion.question;

    currentQuestion.answers = shuffle(currentQuestion.answers);

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = 'true';
        }
        button.addEventListener('click', selectAnswer);
    });
}

/**
 * Displays next question.
 */
function resetState() {
    nextBtn.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

/**
 * 
 * @param {Event} e - User click event 
 */
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++
        let oldScore = docuemnt.getElementById("score").innerText;
        document.getElementById("score").innerText = ++oldScore;
    } else {
        selectedBtn.classList.add('incorrect');
        let oldScore = document.getElementById("incorrect").innerText;
        document.getElementById("incorrect").innerText = ++oldScore;
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true') {
            button.classList.add('correct');

        }
        button.disabled = true;
    });
    nextBtn.style.display = 'block';
}

/**
 * Displays result at the end of game and gives user option to play again or to quit.
 */
function showScore() {
    resetState();

    questionElement.innerHTML = `You scored ${score} out or ${questions.length}!`;
    nextBtn.innerHTML = 'Play Again'
    nextBtn.style.display = 'block';
}

/**
 * Handles next button. 
 */
function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

/**
 * Fisher-Yates Shuffle used to shuffle arrays
 * @param {[]} array - an array to shuffle
 * @returns {[]} array - shuffled array
 */
function shuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      array.push(array[randomIndex]);
      array.splice(randomIndex, 1);
    }
    return array;
}

nextBtn.addEventListener('click', ()=> {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});