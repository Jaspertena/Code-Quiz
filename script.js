var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var nextButton = document.getElementById('next-btn')

// var shuffledQuestions = currentQuestionIndex
let score = 0;

startButton.addEventListener('click', beginGame)

function beginGame() {
    console.log("started")
    startButton.classList.add('hide')
    // shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    showQuestion(questions[0].question)
}

function NextQuestion(e) {
    console.log("clicked", e)
}


NextQuestion();
nextButton.addEventListener('click', NextQuestion())



function showQuestion(question){
    

    // questions[question].question
    // questionElement.textContent = question.question
    console.log(questions[0].question)
    let paragraph = document.getElementById("question");
    let text = document.createTextNode(question)
    paragraph.appendChild(text);
    questions.answers.forEach(answer => {
    var button = docment.createElement('button')
        button.innerText - answer.text
        button.classList.add('btn')
        if (answer.correct)  {
            button.dataset.correct - answer.correct}
    button.addEventListener('click',selectAnswer)
    answerButtonsElement.appendChild(button)
    })
}


function selectAnswer() {
}

var questions = [
    {   
            question: "CDN stand for _________?",
            answers: [
            {text: "Christian Dating Network"},
            {text: "Content Delivery Network"},
            {text: "Content Data Network"},
            {text: "Console Delivery Network"},
        ]
    },

    {
            question: "CSS stands for?",
            answers: [
            {text: "Cascading Style Sheets"},
            {text: "Content Style Sheets"},
            {text: "Cascading Series Systems"},
            {text: "Cookies Style Service"},
        ]
    },

    {  
            question: "Which tag below is not a semantic tag?",
            answers: [
            {text: "<section>"},
            {text: "<header>"},
            {text: "<nav>"},
            {text: "<span>"},
        ]
    },

    {   question: "key:value paring is called?",
        answers: [
        {text: "function"},
        {text: "element"},
        {text: "property"},
        {text: "div"},
    ]
}
]