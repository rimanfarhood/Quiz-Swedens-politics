// Questions and answer options for the quiz.

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
        question: "Can you be convicted for saying something racist to someone?",
        answers: [
            { text: "No", correct: false},
            { text: "Yes", correct: true},
        ]
    },
    {
        question: 'Who received the most votes in the previous election in 2022?',
        answers: [
            { text: 'Sverigedemokraterna', correct: false},
            { text: 'Liberalerna', correct: false},
            { text: 'Socialdemokraterna', correct: true},
            { text: 'Moderaterna', correct: false},
        ]
    },
    {
        question: 'Who holds the position of head of state?',
        answers: [
            { text: 'Prime minister', correct: false},
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
        question: 'How many mandates are there in the Parliament?',
        answers: [
            { text: '49', correct: false},
            { text: '349', correct: true},
            { text: '459', correct: false},
            { text: '299', correct: false},
        ]
    },
    {
        question: "What are Sweden's constitutions?", 
        answers: [
            { text: "The form of government, the succession order, the freedom of the press regulation and the freedom of expression law ", correct: true},
            { text: "Common law, the form of government, the Criminal Code and the Discrimination Act", correct : false},
            { text: "The Freedom of Expression Act, the form of government and the rules of the parlament", correct: false},
        ]
    },
    {
        question: 'How are the mandates in the Parliament distributed?',
        answers: [
            { text: 'The party gets as many percent of the seats as they got in the election', correct: true},
            { text: 'Equally', correct: false},
            { text: 'The mandates are drawn', correct: false},
        ]
    },
    {
        question: 'How many percent of the votes is needed to be in the Parlament?',
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

const game = document.getElementById("game");
const quitBtn = document.getElementById("quit-btn");
const highScore = document.getElementById("high-score");

quitBtn.addEventListener('click', ()=> {
    show(start);
    hide(game);
});


/**
 * Displays the quiz game
 */
function startQuiz() {
    hide(start);
    show(game);

    currentQuestionIndex = 0;
    score = 0;
    highScore.innerHTML = localStorage.getItem("score") || 0;
    questions = shuffle(questions);

    setText("score", 0)
    setText("incorrect", 0)
    setHtml(nextBtn, "Next")

    showQuestion();
}


// Helper functions
function hide(element) {
    element.style.display = 'none'
}
 
function show(element) {
    element.style.display = 'block'
}
 
function setText(element, text) {
    document.getElementById(element).innerText = text;
}

function setHtml(element, html) {
    element.innerHTML = html;
}
 

/**
 * Displays the questions
 */
function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNr = currentQuestionIndex + 1;
    setHtml(questionElement, `${questionNr}. ${currentQuestion.question}`)

    currentQuestion.answers = shuffle(currentQuestion.answers);

    currentQuestion.answers.forEach(answer => {
        const button = createButton(answer.text, answer.correct);
        answerButtons.appendChild(button);
        button.addEventListener('click', selectAnswer);
    });
}


/**
 * helper function create button 
 * @param {string} text - Button text content
 * @param {boolean} isCorrect - Indicates if the answer is correct or not
 * @returns {HTMLButtonElement} - Created button element
 */
function createButton(text, isCorrect) {
    const button = document.createElement("button");
    setHtml(button, text);
    button.classList.add("btn");
    if (isCorrect) {
        button.dataset.correct = 'true';
    }

    return button;
}


/**
 * Displays next question.
 */
function resetState() {
    hide(nextBtn);
    setHtml(answerButtons, '');
}


/**
 * 
 * @param {Event} e - User click event 
 * Changes the background color depending on the result of the selected answers button.
 * Increases the correct and incorrect scores.
 */
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';

    if (isCorrect) {
        addClass(selectedBtn, 'correct')
        score++;
        let oldScore = document.getElementById("score").innerText;
        setText("score", ++oldScore)
    } else {
        addClass(selectedBtn, 'incorrect')
        let oldScore = document.getElementById("incorrect").innerText;
        setText("incorrect", ++oldScore)
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            addClass(button, 'correct')
        }
        button.disabled = true;
    });
    show(nextBtn);
}


/**
 * Helper function to add class
 * @param {HTMLElement} selected - The element selected
 * @param {string} result - The class to add
 */
function addClass(selected, result) {
    selected.classList.add(result)
}


/**
 * Displays result at the end of game and gives user option to play again or to quit.
 */
function showScore() {
    resetState();

    setHtml(highScore, setHighScore(score));
    setHtml(questionElement, `You scored ${score} out of ${questions.length}!`);
    setHtml(nextBtn, 'Play Again');
    show(nextBtn)
}

/**
 * Handles next button. 
 */
function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
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

/**
 * 
 * @param {Event} gameScore 
 * @returns 
 */
function setHighScore(gameScore) {
    let localHighScore = window.localStorage.getItem("score");

    if (localHighScore && localHighScore > gameScore) {
        return localHighScore;
    } else {
        window.localStorage.setItem("score", gameScore);
        return gameScore;
    }
}

nextBtn.addEventListener('click', ()=> {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});