document.addEventListener("DOMContentLoaded",()=>{

    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");


    const questions = [
      {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris",
      },
      {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Mars",
      },
      {
        question: "Who wrote 'Hamlet'?",
        choices: [
          "Charles Dickens",
          "Jane Austen",
          "William Shakespeare",
          "Mark Twain",
        ],
        answer: "William Shakespeare",
      },
    ];

    let curruntQNo = 0;
    let score = 0;
    
    startBtn.addEventListener("click",startQuize);

    function startQuize(){
        startBtn.classList.add("hidden");
        resultContainer.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        showQuestion();
    }

    function showQuestion(){
        nextBtn.classList.add("hidden");
        questionText.textContent = questions[curruntQNo].question;
        choicesList.innerHTML = "";
        questions[curruntQNo].choices.forEach((choice)=>{
            const li = document.createElement("li");
            li.textContent = choice;
            li.addEventListener("click",()=>{
                const correctAns = questions[curruntQNo].answer;
                li.classList.add("color");
                if (choice === correctAns) {
                  score++;
                }
                nextBtn.classList.remove("hidden");
            });
            choicesList.appendChild(li);
        });
    }

    

    nextBtn.addEventListener("click",()=>{
        curruntQNo++;
        if(curruntQNo<questions.length){
            showQuestion();
        }else{
            totalScore();
        };
    });

    function totalScore(){
        questionContainer.classList.add("hidden");
        resultContainer.classList.remove("hidden");
        scoreDisplay.textContent = `${score} out of ${questions.length}`;
    };

    restartBtn.addEventListener("click",()=>{
        curruntQNo = 0;
        score = 0;
        resultContainer.classList.add("hidden");
        startQuize();
    })






})