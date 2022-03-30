var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

// var shuffledQuestions = currentQuestionIndex

startButton.addEventListener('click', beginGame)

function beginGame() {
    console.log("started")
    startButton.classList.add('hide')
    // shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    NextQuestion()
}

function NextQuestion() {
    
}
NextQuestion();

function showQuestion(question){
    // questions[question].question
    // questionElement.textContent = question.question
    console.log(questions[0].question)
    question.answer.foreach(answer => {
        var button = docment.createElement('button')
        button.innerText - answer.text
        button.classList.add('btn')
        if (answer.correct)   
            button.dataset.correct - answer.correct
    button.addEventListener('click'),
    answerButtonsElementappendlChild(button)
    })
}

function selectAnswer() {
     
}

var questions = [
    {   question: "CDN stand for?",
        answers: [
            {text: "Christian Dating Network"},
            {text: "Content Delivery Network"},
            {text: "Content Data Network"},
            {text: "Console Delivery Network"},
        ]
    }
      
    {   question: "CSS stands for?",
        answers: [
            {text: "Cascading Style Sheets"},
            {text: "Content Style Sheets"},
            {text: "Cascading Data Network"},
            {text: "Console Delivery Network"},
        ]
    }
]

// var Startcontainer = document.querySelector(".Startcontainer");

// var questionContainer = document.querySelector(".questionContainer");
// var answerList = document.querySelector(".answerList");
// var nextButton = document.querySelector(".nextButton");
// var endContainer = document.querySelector(".endContainer");
// var questionDisplay = document.querySelector(".question");

// var questions = [
//     {
//          Question: "What does CDN stand for?",
//         choices: ["Christian Dating Network", "Content Delivery Network", "Content Data Network", "Console Delivery Network"],
//         correctAnswer: "2"
//     },
//     {
//         Question: "1+2",
//         choices: ["1", "2", "3", "4"],
//         correctAnswer: "3"
//     },
//     {
//         Question: "1+3",
//         choices: ["1", "2", "3", "4"],
//         correctAnswer: "4"
//     },
//     {
//         Question: "",
//         choices: ["1", "2", "3", "4"],
//         correctAnswer: "1"
//     },
// ];
// function showQuestion() {
//     for (var i = 0; i < questions.length; i++){
//     //     console.log(questions[i].Question)
//     //     console.log(questions[i].choices)
//     //     console.log(questions[i].correctAnswer)
//     var questionText = questions[i].Question;
//     questionDisplay.textContent=questionText;
//     var answerChoices = questions[i].choices;
//     }
//     answerChoices.forEach(function(item){
//         var answerbutton = document.createElement("button");
//         answerbutton.textContent=item;
//         answerList.appendChild(answerbutton);
//     })
// }

// showQuestion()