const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info ');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-sectioin');
const quizeBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');



startBtn.onclick = () => {
    popupInfo.classList.add('active');
    let element=document.createElement('span')
    element.classList.toggle('info')
    popupInfo.querySelector('.test-list').append(element)
    main.classList.add('active');
}   

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}  


continueBtn.onclick = () => {
    quizSection.classList.add('active'); 
    popupInfo.classList.remove('active');
    quizeBox.classList.add('active'); 
    main.classList.remove('active');

    showQuestion(0);
    questionCounter(1);
    headerScore();
} 

tryAgainBtn.onclick = () => {
    quizeBox.classList.add('active'); 
    nexBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;

    showQuestion(questionCount);
    questionCounter(questionNumb);

    headerScore();

}  

goHomeBtn.onclick = () => {
    quizSection.classList.remove('active'); 
    nexBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;

    showQuestion(questionCount);
    questionCounter(questionNumb);
}  

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const nexBtn = document.querySelector('.next-btn');

nexBtn.onclick = () => {
    if(questionCount < questions.length - 1) {
        questionCount++;
        showQuestion(questionCount);

        questionNumb++;
        questionCounter(questionNumb);

        nexBtn.classList.remove('active');
    }
    else {
        showResultBox();
    }
}

const optionList = document.querySelector('.option-list');


function showQuestion(index) {
    const questionText = document.querySelector('.question-test');
    questionText.textContent = `${questions[index].numb}.${questions[index].question}`;

    let optionTag = `
        <div class="option"><span>${questions[index].options[0]}</span></div>
        <div class="option"><span>${questions[index].options[1]}</span></div>
        <div class="option"><span>${questions[index].options[2]}</span></div>
        <div class="option"><span>${questions[index].options[3]}</span></div>`;

        optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for(let i = 0; i < option.length; i++){
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function optionSelected(answer) {
    let userAnser = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;
    
    if (userAnser == correctAnswer){
        // console.log('answer is correct');
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
    }
    else {
        // console.log('answer is wrong'); 
        answer.classList.add('incorrect');

        for(let i = 0; i < allOptions; i++){
            if (optionList.children[i].textContent == correctAnswer){
                optionList.children[i].setAttribute('class', 'option correct');
            }
        }
    }

    //birini saylanda barysy ocmeli
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }

    nexBtn.classList.add('active');
}


function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
} 


function headerScore () {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
}

function showResultBox() {
    quizeBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = ` Your Score ${userScore} out of ${questions.length}`;

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = -1;
    let progressEndtValue = (userScore / questions.length) * 100;
    let speed = 20;

    let progress = setInterval(() => {
        progressStartValue++;
        // console.log(progressStartValue);

        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1)0deg)`;
        if(progressStartValue == progressEndtValue) {
            clearInterval(progress);
        }
    }, speed);
}